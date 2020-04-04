<template>
  <div>
    <div
      v-if="showPlaceHolder"
      :style="stylePlaceHolder"
    ></div>
    <div
      ref="scroll-affix"
      :style="affixStyle"
      class="scroll-affix-container"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Affix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      affixStyle: {
        position: 'absolute',
        top: 'initial'
      },
      stylePlaceHolder: {

      },
      showPlaceHolder: false,
      instance: '',
      defaultInstancePosition: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.instance = this.$refs['scroll-affix']
      this.createAffix()
    })
  },
  methods: {
    getInstanceRect () {
      return this.instance.getBoundingClientRect()
    },
    getWindowScrollTop () {
      return window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    },
    createAffix () {
      this.defaultInstancePosition = this.getInstanceRect().top

      this.beforeListener()

      document.addEventListener('scroll', this.scrollListener)
    },
    setFixedForInstance () {
      this.affixStyle = {
        position: 'fixed',
        top: `${this.offsetTop}px`
      }
    },
    setPlaceHolder () {
      this.showPlaceHolder = true

      const instanceRect = this.getInstanceRect()
      this.stylePlaceHolder = {
        width: `${instanceRect.width}px`,
        height: `${instanceRect.height}px`
      }
    },
    beforeListener () {
      if (this.defaultInstancePosition < this.offsetTop) {
        this.setFixedForInstance()

        this.setPlaceHolder()
      }

      this.defaultInstancePosition = this.getWindowScrollTop() + this.defaultInstancePosition
    },
    scrollListener () {
      const offsetTop = this.getInstanceRect().top
      if (offsetTop <= this.offsetTop) {
        this.setFixedForInstance()

        this.setPlaceHolder()
      }

      const windowScrollTop = this.getWindowScrollTop()
      const isArrivalDefault = (this.defaultInstancePosition - this.offsetTop) >= windowScrollTop

      if (isArrivalDefault && this.affixStyle.position === 'fixed') {
        this.affixStyle = {}
        this.showPlaceHolder = false
        this.stylePlaceHolder = {}
      }
    }
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style lang="scss" scoped>
.scroll-affix-container {
  position: initial;
  top: initial;
}
</style>

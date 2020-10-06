<template>
  <div>
    <div
      v-if="showPlaceHolder"
      :style="stylePlaceHolder"
    />
    <div
      ref="scroll-affix"
      :style="affixStyle"
      class="scroll-affix-container"
    >
      <slot />
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
        position: 'initial',
        top: 'initial'
      },

      // 占位区域样式
      stylePlaceHolder: {},

      // 占位区域
      showPlaceHolder: false,

      // 实例
      instance: '',

      // 用于记录实例的初始状态下的位置
      defaultInstancePosition: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.instance = this.$refs['scroll-affix']
      this.createAffix()
    })
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
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

    // 用于设置实例在固定后的空白占位
    setPlaceHolder () {
      this.showPlaceHolder = true

      const instanceRect = this.getInstanceRect()
      this.stylePlaceHolder = {
        width: `${instanceRect.width}px`,
        height: `${instanceRect.height}px`
      }
    },
    beforeListener () {
      // 若下一次进入页面发现滚动条所处位置已经超过了实例，则立即固定
      if (this.defaultInstancePosition < this.offsetTop) {
        this.setFixedForInstance()
        this.setPlaceHolder()
      }

      this.defaultInstancePosition = this.getWindowScrollTop() + this.defaultInstancePosition
    },
    scrollListener () {
      const offsetTop = this.getInstanceRect().top
      // 当实例距离顶部的距离刚好接近(0px+设置的 top 距离)时，则立即固定
      if (offsetTop <= this.offsetTop) {
        this.setFixedForInstance()
        this.setPlaceHolder()
      }

      const windowScrollTop = this.getWindowScrollTop()
      const isArrivalDefault = (this.defaultInstancePosition - this.offsetTop) >= windowScrollTop

      // 当实例的初始位置减去设置的 top 距离刚好接近滚动条滚过的距离时（即一直在向上滚动）&& 实例已经在固定状态，则取消固定
      if (isArrivalDefault && this.affixStyle.position === 'fixed') {
        this.affixStyle = {}
        this.showPlaceHolder = false
        this.stylePlaceHolder = {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-affix-container {
  position: initial;
  top: initial;
}
</style>

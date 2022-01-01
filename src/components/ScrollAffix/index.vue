<template>
  <div>
    <div
      v-if="showPlaceHolder"
      :style="stylePlaceHolder"
    />
    <div
      ref="refScrollAffix"
      :style="affixStyle"
      class="scroll-affix-container"
    >
      <slot
        v-bind="{
          affixed: getAffixed
        }"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Affix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  emits: ['change'],
  setup (props, { emit }) {
    // ref 实例
    const refScrollAffix = ref({})

    const affixStyle = ref({
      position: 'initial',
      top: 'initial'
    })
    // 占位区域样式
    const stylePlaceHolder = ref({})
    // 占位区域
    const showPlaceHolder = ref(false)
    // 用于记录实例的初始状态下的位置
    const defaultInstancePosition = ref('')

    const getAffixed = computed(() => affixStyle.value.position === 'fixed')

    onMounted(() => {
      nextTick(() => {
        createAffix()
      })
    })

    onBeforeUnmount(() => {
      document.removeEventListener('scroll', scrollListener)
    })

    const getInstanceRect = () => {
      return refScrollAffix.value.getBoundingClientRect()
    }

    const getWindowScrollTop = () => {
      return window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    }

    const createAffix = () => {
      defaultInstancePosition.value = getInstanceRect().top
      beforeListener()
      document.addEventListener('scroll', scrollListener)
    }

    const setFixedForInstance = () => {
      affixStyle.value = {
        position: 'fixed',
        top: `${props.offsetTop}px`
      }
      emit('change', true)
    }

    // 用于设置实例在固定后的空白占位
    const setPlaceHolder = () => {
      showPlaceHolder.value = true

      const instanceRect = getInstanceRect()
      stylePlaceHolder.value = {
        width: `${instanceRect.width}px`,
        height: `${instanceRect.height}px`
      }
    }

    const beforeListener = () => {
      // 若下一次进入页面发现滚动条所处位置已经超过了实例，则立即固定
      if (defaultInstancePosition.value < props.offsetTop) {
        setFixedForInstance()
        setPlaceHolder()
      }

      defaultInstancePosition.value = getWindowScrollTop() + defaultInstancePosition.value
    }

    const scrollListener = () => {
      const offsetTop = getInstanceRect().top
      // 当实例距离顶部的距离刚好接近(0px+设置的 top 距离)时，则立即固定
      if (offsetTop < props.offsetTop) {
        setFixedForInstance()
        setPlaceHolder()
      }

      const windowScrollTop = getWindowScrollTop()
      const isArrivalDefault = (defaultInstancePosition.value - props.offsetTop) >= windowScrollTop

      // 当实例的初始位置减去设置的 top 距离刚好接近滚动条滚过的距离时（即一直在向上滚动）&& 实例已经在固定状态，则取消固定
      if (isArrivalDefault && affixStyle.value.position === 'fixed') {
        affixStyle.value = {}
        showPlaceHolder.value = false
        stylePlaceHolder.value = {}
        emit('change', false)
      }
    }

    return {
      refScrollAffix,
      affixStyle,
      stylePlaceHolder,
      showPlaceHolder,
      defaultInstancePosition,

      getAffixed
    }
  }
})
</script>

<style lang="scss" scoped>
.scroll-affix-container {
  position: initial;
  top: initial;
}
</style>

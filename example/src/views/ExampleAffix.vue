<template>
  <div class="box-container">
    <div class="content">
      <div class="long-list">
        <div
          v-for="(item, index) in 50"
          :key="index"
          class="long"
        >
          <template
            v-if="index === 2"
          >
            <hoc-el-affix>
              <template v-slot="{ affixed }">
                <div class="box">
                  <span style="font-size: 25px">{{ affixed ? '🍎' : '🍏' }}</span>
                  吸顶【插槽版】
                </div>
              </template>
            </hoc-el-affix>
          </template>
          <template
            v-else-if="index === 9"
          >
            <hoc-el-affix
              :offset-top="120"
              @change="handleAffixed120"
            >
              <div class="box">
                <span style="font-size: 25px">{{ isAffixed120 ? '🌝' : '🌚' }}</span>
                距离顶部120px时固定【回调版】
              </div>
            </hoc-el-affix>
          </template>
          <template
            v-else
          >
            {{ index === 49 ? '到底了' : `占位符${index + 1}` }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleAffix',
  data () {
    return {
      isAffixed120: false
    }
  },
  methods: {
    handleAffixed120 (affixed) {
      this.isAffixed120 = affixed
    }
  }
}
</script>

<style lang="scss" scoped>
.box-container {
  .content {
    position: relative;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    .box {
      width: 300px;
      height: 50px;
      line-height: 50px;
      border: 1px solid #000;
    }
    .long-list {
      .long {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
      }
    }
  }
}
</style>

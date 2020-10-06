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
              <div class="box">
                吸顶
              </div>
            </hoc-el-affix>
          </template>
          <template
            v-else-if="index === 7"
          >
            <hoc-el-affix
              :offset-top="120"
            >
              <div class="box">
                距离顶部120px时固定
              </div>
            </hoc-el-affix>
          </template>
          <template
            v-else
          >
            {{ index === 99 ? '到底了' : `占位符${index + 1}` }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleAffix'
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

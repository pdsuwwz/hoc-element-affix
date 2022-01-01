<template>
  <div class="box-container">
    <div class="banner">
      <div class="repo">
        <p>📌 @hoc-element/affix</p><a
          href="https://github.com/pdsuwwz/hoc-element-affix"
          target="_blank"
        >
          <img
            src="~example/assets/logo.svg"
            alt="Logo"
          >
        </a>
      </div>
    </div>
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
              <template #default="{ affixed }">
                <div class="box">
                  <span style="font-size: 25px">{{ affixed ? '🥳' : '😀' }}</span>
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
                <span style="font-size: 25px">{{ isAffixed120 ? '🍎' : '🍏' }}</span>
                距离顶部 120px 时固定【回调版】
              </div>
            </hoc-el-affix>
          </template>
          <template
            v-else
          >
            {{ index === 49 ? '🎊 到底了' : `占位符${index + 1}` }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExampleAffix',
  setup () {
    const isAffixed120 = ref(false)

    const handleAffixed120 = (affixed) => {
      isAffixed120.value = affixed
    }

    return {
      isAffixed120,
      handleAffixed120
    }
  }
})
</script>

<style lang="scss" scoped>
.box-container {
  .banner {
    padding: 30px 0;
    background-color: #1C1C1C;
    .repo {
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: 400px) {
    .banner {
      .repo {
        width: 400px;
      }
    }
  }
  .content {
    position: relative;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    .box {
      width: 300px;
      height: 50px;
      line-height: 50px;
      border: 1px solid #FCFAF2;
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

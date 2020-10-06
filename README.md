# @hoc-element/affix

![npm](https://img.shields.io/npm/v/@hoc-element/affix)  ![NPM](https://img.shields.io/npm/l/@hoc-element/affix)

📌 将页面元素固定在可视范围内。

**Live demo:** https://pdsuwwz.github.io/hoc-element-affix

## Environment Support

* Vue 2.6.0+

## Install

```shell
npm install @hoc-element/affix
```

## Quick Start

```js
import Vue from 'vue'
import HocElementAffix from '@hoc-element/affix'

Vue.use(HocElementAffix)
```

## Feature

- [x] 自定义顶部偏移量
- [x] 固定状态改变时触发的回调
- [x] 插槽式的固定状态反馈

## Using

### 绑定参数 Attributes

| 字段 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| offsetTop | （可选）距离窗口顶部多少时开始固定 | Number | 0 |

### 事件 Events

| 字段 | 说明 | 类型 |
| -------- | -------- | -------- |
| change | （可选）固定状态发生改变时的回调函数 | Function |

### 插槽数据 Slot

绑定的数据默认在一个对象里，如需要可直接解构再使用

| 字段 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| affixed | （可选）实时的固定状态 | Boolean | false |


## Demo

下面是比较全的例子，几乎囊括了 API 的所有用法，源码戳这： [Code](https://github.com/pdsuwwz/hoc-element-affix/tree/master/example/src/views/ExampleAffix.vue )

```html
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
```


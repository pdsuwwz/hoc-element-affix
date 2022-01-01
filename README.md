# @hoc-element/affix

[![npm](https://img.shields.io/npm/v/@hoc-element/affix)](https://www.npmjs.com/package/@hoc-element/affix)


📌 基于 Webpack 5 构建的 Vue 3.x 固钉组件，用于将页面元素固定在可视范围内。

**[Live demo](https://pdsuwwz.github.io/hoc-element-affix)** 


## Version

* Vue 3.x 版本 ｜ [Vue 2.x 版本](https://github.com/pdsuwwz/hoc-element-affix/tree/vue2.0)



## Environment Support

* Vue 3.2.x

## Install

```shell
npm install @hoc-element/affix

# or

pnpm add @hoc-element/affix
```

## Quick Start

```js
import { createApp } from 'vue'
import HocElementAffix from '@hoc-element/affix'
import App from './App.vue'

createApp(App)
  .use(HocElementAffix)
  .mount('#app')
```

## Feature

- [x] 支持 Vue 3.x
- [x] 支持自定义顶部 `offsetTop` 偏移量
- [x] 支持固定状态改变触发回调
- [x] 支持 `Slot` 插槽式的固定状态反馈

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

下面是比较全的例子，几乎囊括了 API 的所有用法，源码戳这： [Code](https://github.com/pdsuwwz/hoc-element-affix/tree/main/example/src/views/ExampleAffix.vue )


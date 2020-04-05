import HocElAffix from './components/ScrollAffix'

const install = function (Vue, opts = {}) {
  Vue.component('HocElAffix', HocElAffix)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.1',
  install,
  HocElAffix
}

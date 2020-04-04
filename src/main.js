import HocElAffix from './components/ScrollAffix'

const install = function (Vue, opts = {}) {
  Vue.component('HocElAffix', HocElAffix)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.5',
  install,
  HocElAffix
}

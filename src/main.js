import HocElAffix from '@/components/ScrollAffix'

const install = function (app) {
  app.component('HocElAffix', HocElAffix)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.2',
  install,
  HocElAffix
}

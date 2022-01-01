import HocElAffix from '@/components/ScrollAffix'

const install = function (app) {
  app.component('HocElAffix', HocElAffix)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  HocElAffix
}

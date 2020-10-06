import Vue from 'vue'
import router from './router.js'

import HocElementAffix from 'source/main.js'
import App from './App.vue'

Vue.use(HocElementAffix)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

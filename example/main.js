import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'

// import HocElementAffix from 'root/lib/hoc-el-affix' // Switch to bundle lib
import HocElementAffix from '@/main.js'

import 'example/styles/variables.scss'

createApp(App)
  .use(router)
  .use(HocElementAffix)
  .mount('#app')

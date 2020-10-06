import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/components/Layout')
const importModule = (filePath) => {
  return () => import(`@/${filePath}`)
}

const routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: 'affix-example',
      component: importModule('views/ExampleAffix')
    }
  ]
}]

Vue.use(VueRouter)
export default new VueRouter({
  routes,
  mode: 'history'
})

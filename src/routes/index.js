import Home from '~/pages/Home.vue'
import IdulFitri from '~/pages/IdulFitri.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/idul-fitri', component: IdulFitri },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/1'
  },
  {
    path: '/:page',
    name: 'page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/the-holy-quran/',
  routes
})

export default router

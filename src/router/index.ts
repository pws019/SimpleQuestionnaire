import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import RecoveredPower from '../views/RecoveredPower.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recovered-power',
    name: 'RecoveredPower',
    // route level code-splitting
    // this generates a separate chunk (RecoveredPower.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RecoveredPower" */ '../views/RecoveredPower.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

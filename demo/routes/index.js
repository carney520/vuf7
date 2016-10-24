import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRouterTransition from 'vue-router-transition'
import configRouterMap from './routes'
import configRouterHooks from './hooks'

Vue.use(VueRouter)
Vue.use(VueRouterTransition, VueRouter)

let router = new VueRouter({
  hashbang: true,
  linkActiveClass: 'active'
})

// register route maps
configRouterMap(router)
configRouterHooks(router)

export default router

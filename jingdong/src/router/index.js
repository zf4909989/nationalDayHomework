import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/home'),
  }, {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home/home'),
  }]
})

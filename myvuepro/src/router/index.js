import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    component: Main,
  }, {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home/home'),
  }, {
    path: '/broadcast',
    name: 'broadcast',
    component: () => import('@/pages/Broadcast/broadcast'),
  }, {
    path: '/mine',
    name: 'mine',
    component: () => import('@/pages/Mine/mine'),
  }, {
    path: '/group',
    name: 'group',
    component: () => import('@/pages/Group/group'),
  }, {
    path: '/radio',
    name: 'radio',
    component: () => import('@/pages/Radio/radio'),
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login/login'),
  }]
})

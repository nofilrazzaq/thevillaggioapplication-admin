/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Applications from '@/views/Applications'
import Logs from '@/views/Logs'
import EntryMetrics from '@/views/EntryMetrics'
import ApplicationPrint from '@/views/ApplicationPrint'
import Export from '@/views/Export'

import store from '@/store.js'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login',
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Applications',
      component: Applications,
      meta: {
        title: 'Applications',
        requiresAuth: true
      }
    },
    {
      path: '/entry-metrics',
      name: 'EntryMetrics',
      component: EntryMetrics,
      meta: {
        title: 'Entry Metrics',
        requiresAuth: true
      }
    },
    {
      path: '/export',
      name: 'Export',
      component: Export,
      meta: {
        title: 'Export',
        requiresAuth: true
      }
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs,
      meta: {
        title: 'Logs',
        requiresAuth: true
      }
    },
    {
      path: '/application-print/:id',
      name: 'ApplicationPrint',
      component: ApplicationPrint,
      meta: {
        title: 'Application Print',
        requiresAuth: true
      }
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    Vue.$toast.error('Please login first!')
    next('/login')
  } else if (to.matched.some(record => record.meta.requiresAuth === false)) {
    if (store.getters.isLoggedIn) {
      next('/')
      return
    }
    next()
  } else {
    next()
  }
})
export default router

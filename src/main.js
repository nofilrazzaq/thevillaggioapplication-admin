/* eslint-disable no-undef */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueToast from 'vue-toast-notification'
import Loader from 'vue-loading-spinner/src/components/SpinLine.vue'
import MainLoader from 'vue-loading-spinner/src/components/DoubleBounce.vue'
import VueConfirmDialog from 'vue-confirm-dialog'

// styles
import 'vue-toast-notification/dist/theme-sugar.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/dataTables.bootstrap.min.css'
import '@/assets/css/style.css'

// scripts
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/assets/js/script.js'
import { helper } from './helper/helper'
import VueCryptojs from 'vue-cryptojs'

// Install components globally
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.component('Loader', Loader)
Vue.component('MainLoader', MainLoader)

Vue.use(VueToast)
Vue.use(VueConfirmDialog)
Vue.use(VueCryptojs)

Vue.config.productionTip = false

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
Vue.prototype.$helper = helper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

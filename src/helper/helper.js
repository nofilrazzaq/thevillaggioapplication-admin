import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import router from '@/router'
import 'vue-toast-notification/dist/theme-sugar.css'
Vue.use(VueToast)

export const helper = {
  catchHandler: (err) => {
    console.log(err)
    Vue.$toast.error(err.response.data.message || 'An unkown error occured please contact suppport')
    router.push('/login')
  }
}

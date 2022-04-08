import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import AuthService from './services/authService'
import ApplicationService from './services/applicationService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: ''
  },
  mutations: {
    api_request (state) {
      state.status = 'loading'
    },
    api_error (state) {
      state.status = 'error'
    },
    api_success (state) {
      state.status = 'success'
    }
  },
  actions: {
    catchHandler ({ commit }) {
      commit('api_error')
      commit('empty_state')
      localStorage.removeItem('token')
      localStorage.removeItem('admin')
      delete axios.defaults.headers.common['Authorization']
    }
  },
  getters: {
    apiStatus: state => state.status
  },
  modules: {
    AuthService,
    ApplicationService
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Admin from '@/models/admin'

Vue.use(Vuex)

const BASE_URL = process.env.API_URL + '/admin'

const AuthService = {
  state: {
    admin: JSON.parse(localStorage.getItem('admin')) || '',
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    init_state (state, payload) {
      state.token = payload.token
      state.admin = payload.admin
    },
    empty_state (state) {
      state.token = ''
      state.admin = ''
    }
  },
  actions: {
    login ({ commit, dispatch }, data) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/login',
          data: data,
          method: 'POST'
        })
          .then(resp => {
            const admin = new Admin(resp.data.admin)
            const token = resp.data.access_token
            localStorage.setItem('token', token)
            localStorage.setItem('admin', JSON.stringify(admin))
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('api_success')
            commit('init_state', { token, admin })
            resolve(resp)
          })
          .catch(err => {
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/logout',
          method: 'POST'
        })
          .then(resp => {
            commit('api_success')
            commit('empty_state')
            localStorage.removeItem('token')
            localStorage.removeItem('admin')
            delete axios.defaults.headers.common['Authorization']
            resolve()
            resolve(resp)
          })
          .catch(err => {
            commit('api_error')
            reject(err)
          })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    getToken: state => state.token,
    admin: state => state.admin
  }
}

export default AuthService

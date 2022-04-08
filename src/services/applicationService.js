import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = process.env.API_URL

const ApplicationService = {
  actions: {
    // updateLanding ({ commit, dispatch }, data) {
    //   return new Promise((resolve, reject) => {
    //     commit('api_request')
    //     axios({
    //       url: BASE_URL + '/admin/landing',
    //       data: data,
    //       method: 'PUT'
    //     })
    //       .then(resp => {
    //         commit('api_success')
    //         resolve(resp)
    //       })
    //       .catch(err => {
    //         commit('api_error')
    //         reject(err)
    //       })
    //   })
    // },
    fetchApplication ({ commit, dispatch }, id) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/application/' + id,
          method: 'GET'
        })
          .then(resp => {
            const application = resp.data.application
            commit('api_success')
            resolve(resp)
            return application
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    fetchApplicationStatus ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/application_status',
          method: 'GET'
        })
          .then(resp => {
            commit('api_success')
            resolve(resp)
            return resp
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    fetchMetrics ({ commit, dispatch }, data) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/application/metrics/' + data,
          method: 'GET'
        })
          .then(resp => {
            commit('api_success')
            resolve(resp)
            return resp
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    updateApplicationStatus ({ commit, dispatch }, status) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/application_status',
          data: {status: status},
          method: 'PUT'
        })
          .then(resp => {
            commit('api_success')
            resolve(resp)
            return resp
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    fetchAllApplications ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/applications',
          method: 'GET'
        })
          .then(resp => {
            const applications = resp.data.applications
            commit('api_success')
            resolve(resp)
            return applications
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    fetchAllLogs ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/application/logs',
          method: 'GET'
        })
          .then(resp => {
            const applicationLogs = resp.data.applicationLogs
            commit('api_success')
            resolve(resp)
            return applicationLogs
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    exportApplications ({ commit, dispatch }, data) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/admin/application/export',
          data: data,
          method: 'POST',
          config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
          .then(resp => {
            commit('api_success')
            resolve(resp)
            return resp
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    },
    deleteApplication ({ commit, dispatch }, id) {
      return new Promise((resolve, reject) => {
        commit('api_request')
        axios({
          url: BASE_URL + '/application/' + id,
          method: 'DELETE'
        })
          .then(resp => {
            commit('api_success')
            resolve(resp)
            return resp
          })
          .catch(err => {
            commit('api_error')
            dispatch('catchHandler')
            reject(err)
          })
      })
    }
  }
}

export default ApplicationService

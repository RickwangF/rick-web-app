import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    user: {
      bid: 123,
      uid: 123,
      phone: '13312341234',
      avatar: '',
      version: ''
    },
    token: ''
  },
  mutations: {
    setUser (state, user) {
      if (!user || Object.keys(user).length === 0) {
        return
      }

      if (!user.bid || !user.uid) {
        return
      }
      state.user = user
    },
    setToken (state, token) {
      if (!token) {
        return
      }
      state.token = token
    },
    clearUser (state) {
      state.user = {
        bid: 123,
        uid: 123,
        phone: '13312341234',
        avatar: '',
        version: ''
      }
    },
    clearToken (state) {
      state.token = ''
    }
  },
  actions: {
    setUser ({ commit }, user) {
      if (user && user.uid && user.bid) {
        commit('setUser', user)
      }
    },
    setToken ({ commit }, token) {
      if (token) {
        commit('setToken', token)
      }
    }
  }
}

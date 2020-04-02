import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const CancelToken = axios.CancelToken

const state = {
  token: null,
  loginType: null,  //登陆状态
  tabBarActive: 'home',
}

const mutations = {
  // 获取登陆状态
  setLoginType (state,type) {
    state.loginType = type
  },
  // 获取token
  setToken (state, token) {
    state.token = token
  },
  setTabBarActive (state,active) {
    state.tabBarActive = active
  }
}

const actions = {

}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
 state,
 actions,
 mutations,
 plugins: [vuexLocal.plugin]
})

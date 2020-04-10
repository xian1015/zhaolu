import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}
const mutations = {
  localUserName: (state, username) => {
    state.username = username
    // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('username', username)
  },
  localUserPass: (state, userpass) => {
    state.userpass = userpass
    // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('userpass', userpass)
  },
  clearUserName: (state) => {
    state.username = null;
    // 把登录的用户的名清除
    localStorage.removeItem('username')
  },
  clearUserPass: (state) => {
    state.userpass = null;
    localStorage.removeItem('userpass')
  }
}
const state = {
  username: '' || localStorage.getItem('username'),
  userpass: '' || localStorage.getItem('userpass')
}
// getters 只会依赖 state 中的成员去更新
const getters = {
  username: (state) => state.username,
  userpass: (state) => state.userpass
}
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
export default store

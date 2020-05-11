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
  },
  localAdminName: (state, adminname) => {
    state.adminname = adminname
    // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('adminname', adminname)
  },
  localAdminPass: (state, adminpass) => {
    state.adminpass = adminpass
    // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('adminpass', adminpass)
  },
}
const state = {
  username: '' || localStorage.getItem('username'),
  userpass: '' || localStorage.getItem('userpass'),
  adminname: '' || localStorage.getItem('adminname'),
  adminpass: '' || localStorage.getItem('adminpass')
}
// getters 只会依赖 state 中的成员去更新
const getters = {
  username: (state) => state.username,
  userpass: (state) => state.userpass,
  adminname: (state) => state.adminname,
  adminpass: (state) => state.adminpass
}
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
export default store

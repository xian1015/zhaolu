import Vue from 'vue'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
Vue.use(VueAxios, axios,Vuex)
//axios组件
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'animate.css'

Vue.use(VueRouter)
//网页title组件
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
//网页组件
import App from './App.vue'
import index from './views/Index.vue'
import recharge from './views/Recharge.vue'
import personalCenter from './views/PersonalCenter.vue'
import homepage from './views/Homepage.vue'
import regist from './views/Regist.vue'
import book from './views/Book.vue'
import zlHeader from './views/ZLHeader.vue'
import logincheck from './views/LoginCheck.vue'
import bookImp from './views/BookImp.vue'
import store from './store/store.js'


// import 'jquery'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

const routes = [
  { path: '/index', component: index, meta: { title: '朝露书城——愿你如朝如露，热切通透'},children:[
    { path: '/zlHeader', component: zlHeader},
  ]},
  { path: '/personalCenter', component: personalCenter, meta: { title: '朝露书城——个人中心'},children:[
  ]},
  { path: '/recharge', component: recharge, meta: { title: '朝露书城——充值中心'},children:[
  ]},
  { path: '/regist', component: regist, meta: { title: '朝露书城——注册页面'},children:[
  ]},
  { path: '/book', component: book, meta: { title: '朝露书城'},children:[
  ]},
  { path: '/homepage', component: homepage, meta: { title: '朝露书城'},children:[
    { path: '/zlHeader', component: zlHeader},
  ]},
  { path: '/logincheck', component: logincheck, meta: { title: '登录检查'},children:[
  ]},
  { path: '/bookImp', component: bookImp, meta: { title: '书籍录入'},children:[
  ]},
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//生产模式消息为false
Vue.config.productionTip = false

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
import '../src/store/download'

Vue.use(VueRouter)
//网页title组件
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
//网页组件
import App from './App.vue'
import index from './views/Index.vue'
import recharge from './views/Recharge.vue'
import personalCenter from './views/PersonalCenter.vue'
import regist from './views/Regist.vue'
import book from './views/Book.vue'
import zlHeader from './views/ZLHeader.vue'
import randomRecom from './views/RandomRecom.vue'
import hotRank from './views/HotRank.vue'
import logincheck from './views/LoginCheck.vue'
import middle from './views/Middle.vue'
import type from './views/Type.vue'
import searchList from './views/SearchList.vue'
import bookImp from './views/BookImp.vue'
import bookAlter from './views/BookAlter.vue'
import bannerAlter from './views/bannerAlter.vue'
import backStage from './views/BackStage.vue'
import bsManage from './views/BSManage.vue'
import store from './store/store.js'


// import 'jquery'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

const routes = [
  { path: '/index', name:'index', component: index, meta: { title: '朝露书城——愿你如朝如露，热切通透'},children:[
    { path: '/zlHeader',name:'zlHeader', component: zlHeader},
    { path: '/randomRecom',name:'randomRecom', component: randomRecom},
    { path: '/hotRank',name:'hotRank', component: hotRank},
  ]},
  { path: '/personalCenter', name: 'personalCenter', component: personalCenter, meta: { title: '朝露书城——个人中心'},children:[
    { path: '/hotRank',name:'hotRank', component: hotRank},
  ]},
  { path: '/recharge',name:'recharge', component: recharge, meta: { title: '朝露书城——充值中心'},children:[
  ]},
  { path: '/regist',name:'regist', component: regist, meta: { title: '朝露书城——注册页面'},children:[
  ]},
  { path: '/book',name:'book', component: book,meta: { title: '朝露书城'},children:[
    { path: '/hotRank',name:'hotRank', component: hotRank},
  ]},
  { path: '/logincheck',name:'logincheck', component: logincheck, meta: { title: '登录检查'},children:[
  ]},
  { path: '/middle',name:'middle', component: middle, meta: { title: '朝露书城——愿你如朝如露，热切通透'},children:[
  ]},
  { path: '/type',name:'type', component: type, meta: { title: '朝露书城——愿你如朝如露，热切通透'},children:[
    { path: '/hotRank',name:'hotRank', component: hotRank},
  ]},
  { path: '/searchList',name:'searchList', component: searchList, meta: { title: '搜索结果'},children:[
  ]},
  { path: '/backStage',name:'backStage', component: backStage, meta: { title: '后台登录'},children:[
  ]},
  { path: '/bsManage',name:'bsManage', component: bsManage, meta: { title: '后台管理'},children:[
    { path: '/bookImp',name:'bookImp', component: bookImp},
    { path: '/bookAlter',name:'bookAlter', component: bookAlter},
    { path: '/bannerAlter',name:'bannerAlter', component: bannerAlter},
  ]},
]
const router = new VueRouter({
  routes
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//生产模式消息为false
Vue.config.productionTip = false

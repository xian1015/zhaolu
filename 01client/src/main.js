import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
Vue.use(VueAxios, axios)
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
import homepage from './components/homepage.vue'

// import 'jquery'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

const routes = [
  { path: '/homepage', component: homepage, meta: { title: '首页'},children:[
    // { path: '/conBox1', component: conBox1},
  ]},
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//生产模式消息为false
Vue.config.productionTip = false

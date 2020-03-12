<template>
  <div class="zlHeader">
    <div class="h_header">
      <div class="h_headerBox wd1200">
        <div class="h_headerBoxLeft">
          <a href="http://localhost:8080/#/index" class="h_headerBoxLeft_logo"></a>
          <div class="h_nav">
            <ul class="h_navBox">
              <li v-for="item in navTitle" v-bind:key="item.id">
                <router-link :to="{path:item.englishTitle}">
                  <div
                    v-bind:class="[isTitle ===item.title ? 'h_nav_itemSele' : 'h_nav_itemNoSele']"
                    v-on:click="selected(item.title)"
                  >{{item.title}}</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="h_headerBoxCenter">
          <div class="h_search">
            <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="searchInput"></el-input>
          </div>
        </div>
        <div class="h_headerBoxRight">
          <el-button class="h_login" type="text" v-if="!islogin" v-on:click="loginClick">
            <a>登录/注册</a>
          </el-button>
          <a class="h_login" type="text" v-else>欢迎！</a>
        </div>
      </div>
    </div>
    <div class="h_loginBigBox" v-if="isLoginClick">
      <div class="loginMark"></div>
      <div class="loginBox">
        <div class="lb_exit el-icon-circle-close" v-on:click="exitLoginBox"></div>
        <div class="lb_login">
          <div>
            <h2>登&nbsp;&nbsp;&nbsp;录</h2>
          </div>
          <div class="lb_adimBox">
            <span>账户：</span>
            <el-input
              class="lb_input"
              placeholder="请输入账户"
              prefix-icon="el-icon-user-solid"
              v-model="userInput"
            ></el-input>
          </div>
          <div class="lb_adimBox">
            <span>密码：</span>
            <el-input
              class="lb_input"
              placeholder="请输入密码"
              show-password
              prefix-icon="el-icon-more"
              v-model="passInput"
            ></el-input>
          </div>
          <div v-if="loginEmpty" class="login_empty">账号或密码不能为空</div>
          <button class="login_button">确&nbsp;&nbsp;认</button>
        </div>
        <div class="lb_regist">
          <router-link :to="{path:'./regist'}">
            <div>没有账户？注册点这里</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import index from "./Index";
import recharge from "./Recharge";
import personalCenter from "./PersonalCenter";
import regist from "./Regist";
import app from "../App";

export default {
  name:'ZLHeader',
  data: function() {
    return {
      userInput: "",
      passInput: "",
      img: [],
      imgUrl: [],
      navTitle: [
        { id: 0, title: "首页", englishTitle: "./index" },
        { id: 1, title: "充值", englishTitle: "./recharge" },
        { id: 2, title: "个人中心", englishTitle: "./personalCenter" }
      ],
      // isTitle: "",
      islogin: false,
      isLoginClick: false,
      loginEmpty: false
    };
  },
  props:['isTitle'],

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    loginClick: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    exitLoginBox: function() {
      this.isLoginClick = !this.isLoginClick;
    }
  }
};
//   mounted() {
//     let that = this;
//     this.axios.get("http://localhost:8888/cloudNote").then(res => {
//       that.img = res.data;
//     });
//     this.axios.get("http://localhost:8888/cloudNoteUrl").then(res => {
//       that.imgUrl = res.data;
//     });
//   }
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
</style>
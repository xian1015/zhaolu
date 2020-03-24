<template>
  <div class="zlHeader">
    <div class="h_header">
      <div class="h_headerBox wd1200">
        <div class="h_headerBoxLeft">
          <a href="http://localhost:8080/#/index" class="h_headerBoxLeft_logo">
          <img src="../assets/Logo.png" alt="朝露Logo" class="h_logo">
          </a>
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
          <div class="h_login" v-if="islogin">欢迎您，{{userInput}}</div>
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
          <div v-if="isLoginEmpty" class="login_empty">账号或密码不能为空</div>
          <div v-if="isLoginTypeWrong" class="login_empty">账号或密码格式不正确，需要3到8位的数字或英文字母</div>
          <div v-if="isLoginWrong" class="login_empty">账号或密码不正确</div>
          <button class="login_button" v-on:click="login">确&nbsp;&nbsp;认</button>
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
axios.default.widthCredentials = true;

import index from "./Index";
import recharge from "./Recharge";
import personalCenter from "./PersonalCenter";
import regist from "./Regist";
import app from "../App";

export default {
  name: "ZLHeader",
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
      isLoginEmpty: false,
      isLoginTypeWrong: false,
      isLoginWrong: false,
      test: []
    };
  },
  props: ["isTitle"],

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    loginClick: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    exitLoginBox: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    login: function() {
      let that = this;
      let u = that.userInput;
      let p = that.passInput;
      var reg = /^[a-z0-9]{0,8}$/i; // i是忽略大小写,g是全局查找
      if (u.length !== 0 && p.length !== 0 && (!reg.test(u) || !reg.test(p))) {
        that.isLoginTypeWrong = true;
      } else if (u.length === 0 || p.length === 0) {
        that.isLoginEmpty = true;
      } else {
        that.isLoginTypeWrong = false;
        that.isLoginEmpty = false;
        this.axios({
          method: "post",
          url: "/login",
          data: { u, p }
        })
          .then(res => {
            console.log(res.data);
            _this.userToken = "Bearer " + res.data.data.body.token;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            _this.$router.push("/home");
            alert("登陆成功");
          })
          .catch(error => {
            alert("账号或密码错误");
            console.log(error);
          });
        var url = "localhost:8888/login?username=" + u + "&password=" + p;
        //4. 获取服务器返回结果
        that.axios.get(url).then(result => {
          // 5.判断提示用户登录结果
          if (result.data.code == 1) {
            alert("登录成功");
          } else {
            that.isLoginWrong = true;
          }
        });
      }
    }
  }
  // mounted() {
  //   let that = this;
  //   this.axios.get("http://localhost:8888/login").then(res => {
  //     that.test = res.data;
  //   });
  // }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
</style>
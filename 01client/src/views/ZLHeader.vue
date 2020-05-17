<template>
  <div class="zlHeader">
    <div class="h_header">
      <div class="h_headerBox wd1200">
        <div class="h_headerBoxLeft">
          <a href="http://localhost:8080/#/index" class="h_headerBoxLeft_logo">
            <img src="../assets/Logo.png" alt="朝露Logo" class="h_logo" />
          </a>
          <div class="h_nav">
            <ul class="h_navBox">
              <li v-for="item in navTitle" v-bind:key="item.id">
                <div
                  v-bind:class="[isTitle ===item.title ? 'h_nav_itemSele' : 'h_nav_itemNoSele']"
                  v-on:click="selected(item.title,item.id)"
                >{{item.title}}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="h_headerBoxCenter">
          <div class="h_searchBox">
            <el-input class="h_search" placeholder="请输入搜索的书本内容" prefix-icon="el-icon-search" v-model="searchInput"></el-input>
            <button class="searchButton" v-on:click="search">搜&nbsp;索</button>
          </div>
        </div>
        <div class="h_headerBoxRight">
          <el-button class="h_login" type="text" v-if="!islogin" v-on:click="loginClick">
            <a>登录/注册</a>
          </el-button>
          <div class="h_login" v-if="islogin">
            欢迎您，{{$store.getters.username}}&nbsp;&nbsp;&nbsp;
            <span
              class="h_zhuxiao"
              v-on:click="exitLogin"
            >
              注&nbsp;销
              <i class="h_zhuxiaounder"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="headerBorder"></div>
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
    <div class="headerBox"></div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
axios.default.widthCredentials = true;

import app from "../App";
import index from "./Index";
import recharge from "./Recharge";
import personalCenter from "./PersonalCenter";
import regist from "./Regist";
import logincheck from "./LoginCheck";

export default {
  name: "ZLHeader",
  data: function() {
    return {
      searchInput:"",
      userInput: "",
      passInput: "",
      userInfo: {},
      loading: false,
      loginSess: {
        username: "",
        password: ""
      },
      img: [],
      imgUrl: [],
      navTitle: [
        { id: 0, title: "首页", englishTitle: "./index" },
        { id: 1, title: "个人中心", englishTitle: "./personalCenter" },
        { id: 2, title: "充值", englishTitle: "./recharge" }
      ],
      // isTitle: "",
      islogin: false,
      isLoginClick: false,
      isLoginEmpty: false,
      isLoginTypeWrong: false,
      isLoginWrong: false,
      test: [],
      searchList:[],
      searchListBox:[],
      searchID:[],
    };
  },
  props: ["isTitle"],

  methods: {
    selected: function(title, id) {
      let that = this;
      let u = localStorage.getItem("username");
      if (u != null || id == 0) {
        this.title = title;
        that.$router.push(this.navTitle[id].englishTitle);
      } else {
        that.$router.push("logincheck");
      }
    },
    loginClick: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    exitLoginBox: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    login: function() {
      let that = this;
      let userName = that.userInput;
      let userPassword = that.passInput;
      var reg = /^[a-z0-9]{0,8}$/i; // i是忽略大小写,g是全局查找
      if (
        userName.length !== 0 &&
        userPassword.length !== 0 &&
        (!reg.test(userName) || !reg.test(userPassword))
      ) {
        that.isLoginEmpty = false;
        that.isLoginWrong = false;
        that.isLoginTypeWrong = true;
      } else if (userName.length === 0 || userPassword.length === 0) {
        that.isLoginEmpty = true;
        that.isLoginTypeWrong = false;
        that.isLoginWrong = false;
      } else {
        that.isLoginTypeWrong = false;
        that.isLoginEmpty = false;
        let data = {
          userName: userName,
          userPassword: userPassword
        };
        that.axios
          .get("http://localhost:8888/login", {
            params: data
          })
          .then(res => {
            if (res.data[0].statusCode === 200) {
              that.isLoginWrong = false;
              console.log(res.data);
              let userInfo = res.data[1];
              that.userInfo = userInfo;
              //localUserName 这个是store里面的方法名，后面就是要缓存的值
              this.$store.commit("localUserName", userInfo.user_name);
              this.$store.commit("localUserPass", userInfo.user_password);
              //这里结束的位置
              that.islogin = true;
              window.location.reload();
            } else {
              that.loading = false;
              that.isLoginWrong = true;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    exitLogin: function() {
      this.$store.commit("clearUserName");
      this.$store.commit("clearUserPass");
      this.islogin = false;
      window.location.reload();
    },
    search:function(){
      this.$router.push({path: "/middle",query: {searchInput: this.searchInput}});
    }
  },

  mounted() {
    let that = this;
    let u = localStorage.getItem("username");
    if (u != null) {
      that.islogin = true;
    } else {
      that.islogin = false;
    }
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Index.css";
</style>
<template>
  <div class="personalCenter">
    <zlHeader isTitle="个人中心"></zlHeader>
    <div class="pc_infor wd1200">
      <div class="pc_lanBox"></div>
      <div class="pc_inforbox">
        <div class="pc_infor_item1">
          <div class="pc_info_titleBox">
            <span class="pc_infor_titlefont">id</span>
            <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
          </div>
          <div class="pc_info_contentBox">{{userInfo.user_id}}</div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_info_titleBox">
            <span class="pc_infor_titlefont">用户名</span>
            <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
          </div>
          <div class="pc_info_contentBox">{{userInfo.user_name}}</div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">
            <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">邮箱</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_email}}</div>
          </div>
          <div class="pc_infor_item2">
            <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">电话</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_tele}}</div>
          </div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">
            <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">性别</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_sex}}</div>
          </div>
          <div class="pc_infor_item2">
            <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">年龄</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_age}}</div>
          </div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">余额</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_score}}</div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">已购数量</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_buyNum}}</div>
        </div>
        <div class="pc_infor_item3">
          <div class="pc_info_titleBox">
              <span class="pc_infor_titlefont">已购书籍</span>
              <img class="pc_bg1" src="../assets/img/pc/bg1.png" alt />
            </div>
            <div class="pc_info_contentBox">{{userInfo.user_buybook_id}}</div>
        </div>
      </div>
      <div class="in_hotRank">
        <div class="in_hotRankBox">
          <div class="in_hr_title">
            <span class="in_hr_text">热门榜</span>
          </div>
          <div class="in_hr_contentBox">
            <ul class="in_hr_content">
              <li v-for="item in hotRank" v-bind:key="item.id" class="ell1">
                <a href="item.url">{{item.id+1}}.{{item.name}}&nbsp;作者：{{item.author}}</a>
              </li>
            </ul>
          </div>
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
import zlHeader from "./ZLHeader";

export default {
  data: function() {
    return {
      searchInput: "",
      userInput: "",
      passInput: "",
      img: [],
      imgUrl: [],
      navTitle: [
        { id: 0, title: "首页", englishTitle: "./index" },
        { id: 1, title: "充值", englishTitle: "./recharge" },
        { id: 2, title: "个人中心", englishTitle: "./personalCenter" }
      ],
      isTitle: "个人中心",
      islogin: false,
      isLoginClick: false,
      hotRank: [
        { id: 0, name: "撒野", author: "p", url: "#" },
        { id: 1, name: "某某", author: "p", url: "#" },
        { id: 2, name: "地球上线", author: "莫晨欢", url: "#" },
        { id: 3, name: "撒野", author: "p", url: "#" },
        { id: 4, name: "某某", author: "p", url: "#" },
        { id: 5, name: "地球上线", author: "莫晨欢", url: "#" },
        { id: 6, name: "撒野", author: "p", url: "#" },
        { id: 7, name: "某某", author: "p", url: "#" },
        { id: 8, name: "地球上线", author: "莫晨欢", url: "#" },
        { id: 9, name: "高能二维码", author: "青色羽翼", url: "#" }
      ],
      userInfo: {
        user_id: "",
        user_name: "",
        user_password: "",
        user_age: "",
        user_email: "",
        user_sex: "",
        user_tele: "",
        user_score: "",
        user_buyNum: "",
        user_buybook_id: ""
      }
    };
  },

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
    getInfo: function() {
      let that = this;
      let userName = localStorage.getItem("username");
      let userPassword = localStorage.getItem("userpass");
      let data = {
        userName: userName,
        userPassword: userPassword
      };
      that.axios
        .get("http://localhost:8888/getInfo", {
          params: data
        })
        .then(res => {
          console.log(res.data);
          that.userInfo.user_id = res.data.user_id;
          that.userInfo.user_name = res.data.user_name;
          that.userInfo.user_password = res.data.user_password;
          that.userInfo.user_email = res.data.user_email;
          that.userInfo.user_sex = res.data.user_sex;
          that.userInfo.user_tele = res.data.user_tele;
          that.userInfo.user_age = res.data.user_age;
          that.userInfo.user_score = res.data.user_score;
          that.userInfo.user_buyNum = res.data.user_buyNum;
          if (res.data.user_buybook_id == "") {
            that.userInfo.user_buybook_id = "未购买";
          } else {
            that.userInfo.user_buybook_id = res.data.user_buybook_id;
          }
          console.log(that.userInfo);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    zlHeader
  },
  mounted() {
    let that = this;
    this.getInfo();
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/PersonalCenter.css";
</style>

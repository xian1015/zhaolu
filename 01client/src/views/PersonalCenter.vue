<template>
  <div class="personalCenter">
    <zlHeader isTitle="个人中心"></zlHeader>
    <div class="pc_infor wd1200">
      <div class="pc_inforbox">
        <div class="pc_infor_item1">
          <span>id:</span>
        </div>
        <div class="pc_infor_item1">
          <span>用户名：</span>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">邮箱：</div>
          <div class="pc_infor_item2">电话：</div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">性别：</div>
          <div class="pc_infor_item2">年龄：</div>
        </div>
        <div class="pc_infor_item1">
          <span>余额：</span>
        </div>
        <div class="pc_infor_item1">
          <span>已购数量：</span>
        </div>
        <div class="pc_infor_item3">
          <span>已购书籍：</span>
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
      ]
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
    }
  },
  components:{
    zlHeader
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
@import "../assets/css/PersonalCenter.css";
</style>

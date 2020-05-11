<template>
  <div class="index">
    <zlHeader isTitle="首页"></zlHeader>
    <div class="in_typeSearch wd1200">
      <div class="in_ts_titleBox">
        <span>&nbsp;&nbsp;类别搜索：</span>
      </div>
      <ul class="in_tsBox">
        <li v-for="item in typeList" v-bind:key="item.id">
          <router-link :to="{path:'/type',query: {id: item.id}}">
          <a href="#">{{item.name}}</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="in_banner wd1200">
      <div class="in_bannerBox">
        <img src="../assets/img/index/banner.png" alt="">
      </div>
      <hotRank typeID="undefined"></hotRank>
    </div>
    <randomRecom recomNum=4></randomRecom>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import app from "../App";
import index from "./Index";
import recharge from "./Recharge";
import personalCenter from "./PersonalCenter";
import regist from "./Regist";
import zlHeader from "./ZLHeader";
import randomRecom from "./RandomRecom";
import hotRank from "./HotRank";

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
      isTitle: "首页",
      isLoginClick: false,
      typeList: [
        { id: 0, name: "言情" },
        { id: 1, name: "悬疑" },
        { id: 2, name: "科幻" },
        { id: 3, name: "奇幻" }
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
    zlHeader,
    randomRecom,
    hotRank,
  },
  mounted() {
    let that = this;
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Index.css";
</style>

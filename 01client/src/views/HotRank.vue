<template>
  <div class="hotRank">
    <div class="in_hotRankBox">
      <div class="in_hr_title">
        <span class="in_hr_text">热门榜</span>
      </div>
      <div class="in_hr_contentBox">
        <ul class="in_hr_content">
          <li v-for="item in hotRank" v-bind:key="item.id" class="ell1">
            <router-link :to="{path:'/book',query: {id: item.book_id}}">
            <a href="item.url">{{item.id}}.&nbsp;{{item.book_name}}&nbsp;&nbsp;&nbsp;{{item.author}}&nbsp;著</a>
            </router-link>
          </li>
        </ul>
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

import app from "../App";


export default {
  name: "HotRank",
  data: function() {
    return {
      hotRank1: [
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
      hotRank:[],
      hotRankNum: 0,
    };
  },
  props:["typeID"],

  methods: {

  },

  mounted() {
    let that = this;
    let data = { typeID: that.typeID };
    this.axios
      .get("http://localhost:8888/hotrank", {
        params: data
      })
      .then(res => {
        that.hotRank = res.data;
        for(let i =0;i<that.hotRank.length;i++){
          that.hotRank[i].id=i+1;
        }
      });
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/HotRank.css";
</style>
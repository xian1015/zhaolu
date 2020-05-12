<template>
  <div class="hotRank">
    <div class="in_hotRankBox">
      <div class="in_hr_title">
        <span class="in_hr_text">{{typeName}}热门榜</span>
      </div>
      <div class="in_hr_contentBox">
        <ul class="in_hr_content">
          <li v-for="item in hotRank" v-bind:key="item.id" class="ell1">
            <router-link
              :to="{path:'/middle',query: {id: item.book_id}}"
            >{{item.id}}.&nbsp;{{item.book_name}}&nbsp;&nbsp;&nbsp;{{item.author}}&nbsp;著</router-link>
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
      hotRank: [],
      hotRankNum: 0,
      typeName: ""
    };
  },
  props: ["typeID"],

  methods: {},

  mounted() {
    let that = this;
    let data = { typeID: that.typeID };
    if (
      that.typeID == 0 ||
      that.typeID == 1 ||
      that.typeID == 2 ||
      that.typeID == 3
    ) {
      if (that.typeID == 0) {
        that.typeName = "言情";
      } else if (that.typeID == 1) {
        that.typeName = "悬疑";
      } else if (that.typeID == 2) {
        that.typeName = "科幻";
      } else if (that.typeID == 3) {
        that.typeName = "奇幻";
      }
    } else {
      that.typeName = "综合";
    }
    this.axios
      .get("http://localhost:8888/hotrank", {
        params: data
      })
      .then(res => {
        that.hotRank = res.data;
        for (let i = 0; i < that.hotRank.length; i++) {
          that.hotRank[i].id = i + 1;
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
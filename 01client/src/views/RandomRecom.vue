<template>
  <div class="randomRecom">
    <div class="in_randomRecom wd1200">
      <div class="in_midTitleBox">
        <p class="in_midTitle">随机推荐</p>
      </div>
      <div class="in_rrcontentBox">
        <ul class="in_rrcontent">
          <li class="in_rrcontent_item" v-for="item in RandomRecomList" v-bind:key="item.id">
            <div class="in_rrcontent_itemBox">
              <router-link :to="{path:'/middle',query: {id: item.book_id}}">
                <img class="in_rr_img" :src="item.book_cover" alt />
              </router-link>
              <div class="in_rr_text">
                <div class="in_rr_textBox">
                  <router-link :to="{path:'/middle',query: {id: item.book_id}}">
                    <p class="bookName1">{{item.book_name}}</p>
                  </router-link>
                  <p class="bookAuthor1">作者：{{item.author}}</p>
                </div>
                <div class="in_rr_textIntro">
                  <p class="bookIntroTitle">简介：</p>
                  <span class="bookIntro1 ell2">&nbsp;{{item.introduction}}</span>
                </div>
              </div>
            </div>
            <div class="in_rr_type">
              <p>类型：{{item.bigtype_name}}</p>
            </div>
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
  name: "RandomRecom",
  data: function() {
    return {
      RandomRecomList: []
    };
  },

  methods: {
    reload: function() {
      window.location.reload();
    }
  },
  props: ["recomNum"],
  mounted() {
    let that = this;
    let data = { recomNum: that.recomNum };
    this.axios
      .get("http://localhost:8888/recom", {
        params: data
      })
      .then(res => {
        that.RandomRecomList = res.data;
      });
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Index.css";
@import "../assets/css/RandomRecom.css";
</style>
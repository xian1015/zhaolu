<template>
  <div class="type">
    <zlHeader></zlHeader>
    <div class="bookBox wd1200">
      <!-- <div class="book_inforBox">
        <div class="bookLeft">
          <img class="bookCover" :src="bookInfo.book_cover" alt />
          <button class="bookPay">购&nbsp;&nbsp;&nbsp;买</button>
        </div>
        <div class="bookInfo">
          <div class="b_text">
            <div class="b_textBox">
              <p class="b_bookName1">{{bookInfo.book_name}}</p>
              <p class="b_bookAuthor1">作者：{{bookInfo.author}}</p>
            </div>
            <div class="b_textIntro">
              <p class="b_bookIntroTitle">简介：</p>
              <span class="b_bookIntro1">&nbsp;{{bookInfo.introduction}}</span>
            </div>
          </div>
        </div>
      </div> -->
      <hotRank :typeID="$route.query.type"></hotRank>
    </div>
    <randomRecom recomNum="4"></randomRecom>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import app from "../App";
import zlHeader from "./ZLHeader";
import randomRecom from "./RandomRecom";
import hotRank from "./HotRank";

export default {
  data: function() {
    return {
      type:"",
      typeID:"",
      bookInfo: {},
      bookId:{}
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    }
  },
  components: {
    zlHeader,
    randomRecom,
    hotRank,
  },
  mounted() {
    let that = this;
    this.type=this.$route.query.type;
    console.log(this.type);
  },
  
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Book.css";
</style>
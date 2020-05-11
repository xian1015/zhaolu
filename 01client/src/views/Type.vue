<template>
  <div class="type">
    <zlHeader></zlHeader>
    <!-- <div class="bookBox wd1200">
      <div class="book_inforBox">
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
    </div> -->
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

export default {
  data: function() {
    return {
      bookInfo: {},
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
    randomRecom
  },
  mounted() {
    let that = this;
    // let data = { id: that.$route.query.id };
    // console.log(data);
    // this.axios
    //   .get("http://localhost:8888/book", {
    //     params: data
    //   })
    //   .then(res => {
    //     that.bookInfo = res.data;
    //     console.log(that.bookInfo);
    //   });
  },
  
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Book.css";
</style>
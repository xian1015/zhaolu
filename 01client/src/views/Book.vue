<template>
  <div class="book">
    <zlHeader></zlHeader>
    <div class="bookBox wd1200">
      <div class="book_inforBox">
        <div class="bookLeft">
          <img class="bookCover" :src="bookInfo.book_cover" alt />
          <button class="bookPay" v-on:click="buy" v-if="!isBuy">购&nbsp;&nbsp;&nbsp;买</button>
          <button class="bookPay" v-if="isBuy">已&nbsp;&nbsp;购&nbsp;&nbsp;买</button>
        </div>
        <div class="bookInfo">
          <div class="b_text">
            <div class="b_textBox">
              <p class="b_bookName1">{{bookInfo.book_name}}</p>
              <p class="b_bookAuthor1">
                <span>作者：{{bookInfo.author}}</span>
                <span class="price">价格：{{bookInfo.book_price}}&nbsp;积分</span>
              </p>
            </div>
            <div class="b_textIntro">
              <p class="b_bookIntroTitle">简介：</p>
              <span class="b_bookIntro1">&nbsp;{{bookInfo.introduction}}</span>
            </div>
          </div>
        </div>
      </div>
      <hotRank typeID="undefined"></hotRank>
    </div>
    <randomRecom recomNum="4"></randomRecom>
    <div class="b_buyBox" v-if="wantBuy">
      <div class="buyMark"></div>
      <div class="buyBox" v-if="!isBuy">
        <div class="b_buy">
          <div>
            <span>是否购买？购买将扣除1积分。</span>
          </div>
        </div>
        <div class="b_buttonBox">
          <div class="buy_button" v-on:click="yes">确&nbsp;&nbsp;认</div>
          <div class="buy_button" v-on:click="exit">取&nbsp;&nbsp;消</div>
        </div>
      </div>
      <div class="buyBox" v-if="isBuy">
        <div class="b_buy">
          <div>
            <span>购买成功</span>
          </div>
        </div>
        <div class="b_buttonBox">
          <div class="buy_button" v-on:click="exit">确&nbsp;&nbsp;认</div>
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

import app from "../App";
import zlHeader from "./ZLHeader";
import randomRecom from "./RandomRecom";
import hotRank from "./HotRank";

export default {
  data: function() {
    return {
      bookInfo: {},
      bookId: {},
      isBuy: false,
      wantBuy: false,
      state: ""
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    buy: function() {
      this.wantBuy = true;
    },
    yes: function() {
      let that = this;
      let u = localStorage.getItem("username");
      let data = { bookID: this.bookInfo.book_id, userName: u };
      this.axios
        .get("http://localhost:8888/buy", {
          params: data
        })
        .then(res => {
          that.state = res.data;
          if (that.state.statusCode === 200) {
            that.isBuy = true;
          } else if(that.state.statusCode === 1){
            that.wantBuy = false;
            that.isBuy = false;
            alert("积分为0，购买失败");
          }
          window.location.href = "https://www.huiyitxt.com/job.php?action=download&aid=463384&mt=5dc3249e2419f47dc28bab55853b2d05t"
        });
    },
    exit: function() {
      this.wantBuy = false;
    },
  },
  components: {
    zlHeader,
    randomRecom,
    hotRank
  },
  mounted() {
    let that = this;
    let data = { id: that.$route.query.id };
    this.axios
      .get("http://localhost:8888/book", {
        params: data
      })
      .then(res => {
        that.bookInfo = res.data;
      });
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Book.css";
</style>
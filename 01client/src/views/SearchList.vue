<template>
  <div class="search">
    <zlHeader></zlHeader>
    <div class="t_TopBox wd1200">
      <div class="t_ListBox">
        <div class="t_titleBox">
          <p class="t_titleContent">搜索"{{$route.query.searchInput}}"结果</p>
        </div>
        <ul class="t_list" v-if="isSearchList">
          <li v-for="item in SearchListBox" v-bind:key="item.id" class="t_itemBox">
            <div class="t_bcMask"></div>
            <div class="t_itemBC">
              <router-link :to="{path:'/middle',query: {id: item.book_id}}">
                <div class="t_bookLeft">
                  <img class="t_bookCover" :src="item.book_cover" />
                </div>
              </router-link>
              <div class="t_text">
                <div class="t_textBox">
                  <router-link :to="{path:'/middle',query: {id: item.book_id}}">
                    <p class="t_bookName1">{{item.book_name}}</p>
                  </router-link>
                  <p class="t_bookAuthor1">作者：{{item.author}}</p>
                </div>
                <div class="t_textIntro">
                  <p class="t_bookIntroTitle">简介：</p>
                  <span class="t_bookIntro1 ell3">&nbsp;{{item.introduction}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-if="!isSearchList" class="noRes">
          <p>{{state}}</p>
        </div>
        <div class="t_nextBox">
          <button class="next page" v-on:click="toNext">下一页</button>
          <button class="pre page" v-on:click="toPre">上一页</button>
        </div>
      </div>
      <hotRank typeID="undefined"></hotRank>
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
      searchInput: "",
      bookInfo: {},
      bookId: {},
      SearchList: [],
      SearchListBox: [],
      count: 0,
      idcount: 0,
      isSearchList: false,
      state: ""
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    toNext: function() {
      let that = this;
      if (that.idcount < that.SearchList.length) {
        that.isSearchList = false;
        let buf = that.idcount;
        for (let i = 0; i < that.SearchList.length - buf; i++) {
          that.SearchListBox[i] = that.SearchList[that.idcount];
          that.SearchListBox[i].id = that.idcount + 1;
          that.idcount++;
        }
        that.SearchListBox.length = that.idcount - buf;
        that.count++;
        that.isSearchList = true;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        alert("已经是最后一页");
      }
    },
    toPre: function() {
      let that = this;
      if (that.SearchListBox[0].id != 1) {
        that.isSearchList = false;
        let buf = that.SearchListBox[0].id;
        for (let i = 7; i >= 0; i--) {
          that.SearchListBox[i] = that.SearchList[buf - 2];
          that.idcount--;
          buf--;
        }
        that.count--;
        that.isSearchList = true;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        alert("已经是第一页");
      }
    }
  },
  components: {
    zlHeader,
    randomRecom,
    hotRank
  },
  created() {
    let that = this;
    this.searchInput = this.$route.query.searchInput;
    let data = { searchInput: this.searchInput };
    console.log(data);
    this.axios
      .get("http://localhost:8888/search", {
        params: data
      })
      .then(res => {
        let countBuf;
        let buf = res.data[0];
        that.SearchList = res.data[1];
        console.log(res.data);
        console.log(buf);
        console.log(that.SearchList);
        if (buf.statusCode == 200) {
            if(that.SearchList>8){
                countBuf = 8;
            } else {
                countBuf = that.SearchList.length
            }
          for (let i = 0; i < countBuf; i++) {
            that.SearchListBox[i] = that.SearchList[i];
            that.SearchListBox[i].id = that.idcount + 1;
            that.idcount++;
          }
          that.isSearchList = true;
          console.log(that.SearchListBox);
        } else {
          that.isSearchList = false;
          that.state = buf.msg;
        }
      });
  },
  mounted() {}
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/type.css";
</style>
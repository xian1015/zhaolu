<template>
  <div class="bookAlter">
    <div class="ba_searchBox">
      <el-input
        class="ba_search"
        placeholder="请输入搜索的书本内容"
        prefix-icon="el-icon-search"
        v-model="searchInput"
      ></el-input>
      <button class="searchButton" v-on:click="search">搜&nbsp;索</button>
    </div>
    <el-table v-if="!isSearchList"></el-table>
    <ul class="b_list" v-if="isSearchList">
      <li class="b_itemBox2">
          <span class="b_bookName1 b_content">书名</span>
        <span class="b_bookAuthor1 b_content">作者</span>
        <div class="b_bookIntro1 b_content">
          <span class="ell1">简介</span>
        </div>
      </li>
      <li v-for="item in SearchListBox" v-bind:key="item.id" class="b_itemBox">
        <span class="b_bookName1 b_content">{{item.book_name}}</span>
        <span class="b_bookAuthor1 b_content">{{item.author}}</span>
        <div class="b_bookIntro1 b_content">
          <span class="ell1">{{item.introduction}}</span>
        </div>
        <div class="b_alter">
          <span class="b_content b_alter1">修改</span>
          <span class="b_content b_alter2">删除</span>
        </div>
      </li>
    </ul>
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
      isSearchList: false,
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
    },
    search: function() {
      let that = this;
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
            if (that.SearchList > 8) {
              countBuf = 8;
            } else {
              countBuf = that.SearchList.length;
            }
            for (let i = 0; i < that.SearchList.length; i++) {
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
    }
  },
  created() {},
  components: {
    zlHeader
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/BookAlter.css";
</style>
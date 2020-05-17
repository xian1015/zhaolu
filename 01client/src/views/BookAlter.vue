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
          <span class="b_content b_alter1" v-on:click="b_Alter(item.id)">修改</span>
          <span class="b_content b_alter2" v-on:click="b_delete(item.id)">删除</span>
        </div>
      </li>
    </ul>
    <div class="ba_Box" v-if="isAlter">
      <div class="ba_mask"></div>
      <div class="bookAlterBox">
        <div class="ba_exit el-icon-circle-close" v-on:click="exitAlterBox"></div>
        <div class="ba_topBox">
          <div class="ba_leftBox">
            <div class="ba_itemBox">
              <span class="ba_title">书名：</span>
              <el-input v-model="bookName" placeholder="请输入内容"></el-input>
            </div>
            <div class="ba_itemBox">
              <span class="ba_title">作者：</span>
              <el-input v-model="author" placeholder="请输入内容"></el-input>
            </div>
            <div class="ba_itemBox">
              <span>类型：</span>
              <el-radio-group v-model="type">
                <el-radio-button label="言情"></el-radio-button>
                <el-radio-button label="悬疑"></el-radio-button>
                <el-radio-button label="科幻"></el-radio-button>
                <el-radio-button label="奇幻"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <div class="ba_rightBox"></div>
        </div>
        <div class="ba_itemBox">
          <span class="ba_title">价格：</span>
          <el-input v-model="price" type="number" placeholder="请输入内容" min="1" value="1"></el-input>
        </div>
        <div class="ba_itemBox">
          <span class="ba_title">介绍：</span>
          <el-input
            v-model="introduction"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            maxlength="200"
          ></el-input>
        </div>
        <div class="buttonBox">
          <button class="ba_Sub" v-on:click="bookAlter">
            <span>提&nbsp;交</span>
          </button>
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
      isSearchList: false,
      searchInput: "",
      bookInfo: {},
      bookId: {},
      SearchList: [],
      SearchListBox: [],
      count: 0,
      idcount: 0,
      isSearchList: false,
      state: "",
      isAlter: false,
      bookName: "",
      author: "",
      type: "言情",
      price: "1",
      introduction: "",
      buf: {}
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
    exitAlterBox: function() {
      this.isAlter = false;
      this.isSearchList = true;
    },
    search: function() {
      let that = this;
      let data = { searchInput: this.searchInput };
      this.axios
        .get("http://localhost:8888/search", {
          params: data
        })
        .then(res => {
          let countBuf;
          let buf = res.data[0];
          that.SearchList = res.data[1];
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
    },
    b_Alter: function(id) {
      let that = this;
      this.isAlter = true;
      this.buf = this.SearchListBox[id - 1];
      this.bookName = this.buf.book_name;
      this.author = this.buf.author;
      this.type = this.buf.bigtype_name;
      this.price = "1";
      this.introduction = this.buf.introduction;
    },
    b_delete: function(id) {
      let that = this;
      this.SearchListBox.splice(id - 1, 1);
    },
    bookAlter: function() {
      let that = this;
      let id = this.buf.book_id;
      let bookName = that.bookName.replace(/\s*/g, "");
      let author = that.author.replace(/\s*/g, "");
      let type = that.type;
      let price = parseInt(that.price.replace(/\s*/g, ""));
      let introduction = that.introduction.replace(/\s*/g, "");
      that.bookinfo = {
        id,
        bookName,
        author,
        type,
        price,
        introduction
      };
      let data = that.bookinfo;
      this.axios
        .get("http://localhost:8888/bookAlter", {
          params: data
        })
        .then(res => {
          console.log(res);
          if (res.data.statusCode == 0) {
            that.isNameRep = true;
          } else if (res.data.statusCode == 200) {
            alert("修改成功请刷新！");
            that.isAlter = false;
            that.SearchListBox[that.buf.id-1].book_name = that.bookinfo.bookName;
            that.SearchListBox[that.buf.id-1].author = that.bookinfo.author;
            that.SearchListBox[that.buf.id-1].bigtype_name = that.bookinfo.type;
            that.SearchListBox[that.buf.id-1].book_price = that.bookinfo.price;
            that.SearchListBox[that.buf.id-1].introduction = that.bookinfo.introduction;
            console.log(that.SearchListBox[that.buf.id-1]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
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
@import "../assets/css/BookImp.css";
</style>
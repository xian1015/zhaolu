<template>
  <div class="bannerAlter">
    <el-table v-if="!isSearchList"></el-table>
    <ul class="b_list" v-if="isSearchList">
      <li class="b_itemBox2">
        <span class="b_bookName1 b_content">banner图</span>
        <span class="b_bookIntro1 b_content2 ell1">简介</span>
        <span class="b_bookAuthor1 b_content2">链接</span>
        <span class="b_bAdd" v-on:click="isAdd">添加新banner活动</span>
      </li>
      <li v-for="item in SearchListBox" v-bind:key="item.id" class="b_itemBox">
        <div class="b_bookName1 b_content">
          <img class="b_bookimg" :src="item.banner_img" alt />
        </div>
        <span class="b_bookAuthor1 b_content2">{{item.banner_intro}}</span>
        <span class="ell1 b_bookIntro1 b_content2">{{item.banner_link}}</span>
        <div class="b_alter">
          <span class="b_content b_alter1" v-on:click="b_Alter(item.id)">修改</span>
          <span class="b_content b_alter2" v-on:click="b_delete(item.id)">删除</span>
        </div>
      </li>
    </ul>
    <div class="baa_Box" v-if="isAlter">
      <div class="baa_mask"></div>
      <div class="bannerAlterBox">
        <div class="baa_exit el-icon-circle-close" v-on:click="exitAlterBox"></div>
        <div class="baa_itemBox">
          <span class="baa_title">banner简介</span>
          <el-input v-model="banner_intro" placeholder="请输入内容"></el-input>
        </div>
        <div class="baa_itemBox">
          <span class="baa_title">banner链接</span>
          <el-input v-model="banner_link" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttonBox">
          <button class="baa_Sub" v-on:click="bannerAlter">
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
      banner_intro: "",
      banner_link:"",
      bookInfo: {},
      bookId: {},
      SearchList: [],
      SearchListBox: [],
      count: 0,
      idcount: 0,
      isSearchList: false,
      state: "",
      isAlter: false,
      buf:{},
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
    isAdd: function() {
      let that = this;
      this.isAlter = true;
    },
    isAlter: function(id) {
      let that = this;
      this.isAlter = true;
      this.buf = this.SearchListBox[id - 1];
      this.banner_link = this.buf.banner_link;
      this.banner_intro = this.buf.banner_intro;
    },
    b_delete: function(id) {
      let that = this;
      this.SearchListBox.splice(id - 1, 1);
    },
    bannerAlter: function() {
      let that = this;
      let id = this.buf.banner_id;
      let banner_link = that.banner_link;
      let banner_intro = that.banner_intro;
      that.bookinfo = {
        id,
        banner_link,
        banner_intro,
      };
      let data = that.bookinfo;
      console.log(data);
      this.axios
        .get("http://localhost:8888/bannerImp", {
          params: data
        })
        .then(res => {
          console.log(res);
          if (res.data.statusCode == 0) {
            alert("添加失败！");
          } else if (res.data.statusCode == 200) {
            alert("添加成功！");
            this.buf.banner_id = that.SearchListBox[that.SearchListBox.length-1].banner_id+1;
            this.buf.banner_link = that.banner_link;
            this.buf.banner_intro = that.banner_intro;
            that.SearchListBox.push(this.buf)
            that.isAlter = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    let that = this;
    let data = { searchInput: this.searchInput };
    this.axios.get("http://localhost:8888/banner").then(res => {
      let countBuf;
      let buf = res.data[0];
      that.SearchList = res.data[1];
      if (buf.statusCode == 200) {
        for (let i = 0; i < that.SearchList.length; i++) {
          that.SearchListBox[i] = that.SearchList[i];
          that.SearchListBox[i].id = that.idcount + 1;
          if (that.SearchList[that.idcount].banner_link == null) {
            that.SearchListBox[i].banner_link = "无";
          }
          if (that.SearchList[that.idcount].banner_intro == null) {
            that.SearchListBox[i].banner_intro = "无";
          }
          that.idcount++;
        }
        that.isSearchList = true;
      } else {
        that.isSearchList = false;
        that.state = buf.msg;
      }
    });
  },
  components: {
    zlHeader
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/BannerAlter.css";
</style>
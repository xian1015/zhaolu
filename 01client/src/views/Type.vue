<template>
  <div class="type">
    <zlHeader></zlHeader>
    <div class="t_TopBox wd1200">
      <div class="t_ListBox">
        <div class="t_titleBox">
          <p class="t_titleContent">{{typeName}}小说</p>
        </div>
        <ul class="t_list" v-if="isTypeList">
          <li v-for="item in typeListBox" v-bind:key="item.id" class="t_itemBox">
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
        <div class="t_nextBox">
          <button class="next page" v-on:click="toNext">下一页</button>
          <button class="pre page" v-on:click="toPre">上一页</button>
        </div>
      </div>
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
      type: "",
      typeID: "",
      typeName: "",
      bookInfo: {},
      bookId: {},
      typeList: [],
      typeListBox: [],
      count: 0,
      idcount: 0,
      isTypeList: false
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    toNext: function() {
      let that = this;
      if (that.idcount < that.typeList.length) {
        that.isTypeList = false;
        let buf = that.idcount;
        for (let i = 0; i < that.typeList.length - buf; i++) {
          that.typeListBox[i] = that.typeList[that.idcount];
          that.typeListBox[i].id = that.idcount + 1;
          that.idcount++;
        }
        that.typeListBox.length = that.idcount - buf;
        that.count++;
        that.isTypeList = true;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        alert("已经是最后一页");
      }
    },
    toPre: function() {
      let that = this;
      if (that.typeListBox[0].id != 1 ) {
        that.isTypeList = false;
        let buf = that.typeListBox[0].id;
        for (let i = 7; i >= 0; i--) {
          that.typeListBox[i] = that.typeList[buf-2];
          that.idcount--;
          buf--;
        }
        that.count--;
        that.isTypeList = true;
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
    this.typeID = this.$route.query.type;
    let data = { typeID: this.typeID };
    this.axios
      .get("http://localhost:8888/type", {
        params: data
      })
      .then(res => {
        that.typeList = res.data;
        console.log(res.data);
        for (let i = 0; i < 8; i++) {
          that.typeListBox[i] = that.typeList[i];
          that.typeListBox[i].id = that.idcount + 1;
          that.idcount++;
        }
        that.isTypeList = true;
        console.log(that.typeListBox);
      });
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
  },
  mounted() {}
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/type.css";
</style>
<template>
  <div class="bookImp">
    <div class="bookImpBox">
      <div class="bi_topBox">
        <div class="bi_leftBox">
          <div class="bi_itemBox">
            <span class="bi_title">书名：</span>
            <el-input v-model="bookName" placeholder="请输入内容"></el-input>
          </div>
          <div class="bi_itemBox">
            <span class="bi_title">作者：</span>
            <el-input v-model="author" placeholder="请输入内容"></el-input>
          </div>
          <div class="bi_itemBox">
            <span>类型：</span>
            <el-radio-group v-model="type">
              <el-radio-button label="言情"></el-radio-button>
              <el-radio-button label="悬疑"></el-radio-button>
              <el-radio-button label="科幻"></el-radio-button>
              <el-radio-button label="奇幻"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="bi_rightBox"></div>
      </div>
      <div class="bi_itemBox">
        <span class="bi_title">价格：</span>
        <el-input v-model="price" type="number" placeholder="请输入内容" min="1" value="1"></el-input>
      </div>
      <div class="bi_itemBox">
        <span class="bi_title">介绍：</span>
        <el-input
          v-model="introduction"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          maxlength="200"
        ></el-input>
      </div>
      <div class="buttonBox">
        <button class="bi_Sub" v-on:click="bookImp">
          <span>提&nbsp;交</span>
        </button>
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
      bookName: "",
      author: "",
      type: "言情",
      price: "1",
      introduction: "",
      bookinfo: {},
      imageUrl: ""
    };
  },

  methods: {
    bookImp: function() {
      let that = this;
      let bookName = that.bookName.replace(/\s*/g, "");
      let author = that.author.replace(/\s*/g, "");
      let type = that.type;
      let price = that.price.replace(/\s*/g, "");
      let introduction = that.introduction.replace(/\s*/g, "");
      that.bookinfo = {
        bookName,
        author,
        type,
        price,
        introduction
      };
      let data = that.bookinfo;
      console.log(data);
      this.axios
        .get("http://localhost:8888/bookImp", {
          params: data
        })
        .then(res => {
          console.log(res);
          if (res.data.codes == 0) {
            that.isNameRep = true;
          } else if (res.data.codes == 1) {
            alert("录入成功！");
            that.bookName = "";
            that.author = "";
            that.type = "言情";
            that.price = "";
            that.introduction = "";
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    let that = this;
  },
  components: {
    zlHeader
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/bookImp.css";
</style>
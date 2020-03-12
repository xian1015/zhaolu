<template>
  <div class="regist">
    <div class="re_infor">
      <router-link :to="{path:'./index'}">
        <div class="re_homepage">
          <i class="el-icon-arrow-left"></i>
          <span>回到首页</span>
        </div>
      </router-link>
      <div class="re_inforBox">
        <div class="re_infor_itembox">
          <div class="re_infor_item"><span class="xinghao">*</span>用户名：</div>
          <input class="re_infor_input" placeholder="请输入用户名" type="text" name="username" />
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item"><span class="xinghao">*</span>密码：</div>
          <input class="re_infor_input" placeholder="请输入密码" type="password" name="password" />
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">电话：</div>
          <input class="re_infor_input" placeholder="请输入电话" v-model="input" clearable />
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item"><span class="xinghao">*</span>邮箱：</div>
          <input class="re_infor_input" placeholder="请输入邮箱" type="email" name="user_email" />
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">性别：</div>
          <el-radio class="re_infor_radio" v-model="radio" label="1">男</el-radio>
          <el-radio class="re_infor_radio" v-model="radio" label="2">女</el-radio>
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">年龄：</div>
          <input class="re_infor_input" type="number" placeholder="请输入年龄" min="1" max="99" />
        </div>
      </div>
      <button class="re_Sub">
          <span>提&nbsp;交</span>
      </button>
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
import app from "../App";

export default {
  data: function() {
    return {
      input: "",
      radio: "2"
    };
  },

  methods: {}
  // mounted() {
  //   let that = this;
  //   this.axios.get("http://localhost:8888/cloudNote").then(res => {
  //     that.img = res.data;
  //   });
  //   this.axios.get("http://localhost:8888/cloudNoteUrl").then(res => {
  //     that.imgUrl = res.data;
  //   });
  // }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/regist.css";
</style>
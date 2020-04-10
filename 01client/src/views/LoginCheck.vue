<template>
  <div class="logincheck">
    <div class="logincheck_content">请先登录...{{count}}s后回到首页</div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
axios.default.widthCredentials = true;

import index from "./Index";
import recharge from "./Recharge";
import personalCenter from "./PersonalCenter";
import regist from "./Regist";
import app from "../App";

export default {
  name: "ZLHeader",
  data: function() {
    return {
      count: 3
    };
  },
  props: ["isTitle"],

  methods: {
    countdown: function() {
        let that = this;
      if (that.count > 0) {
        that.count--;
      } else {
        clearInterval();
        that.$router.push("./index");
      }
    }
  },

  mounted() {
    let that = this;
    setInterval(this.countdown, 1000);
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/loginCheck.css";
</style>
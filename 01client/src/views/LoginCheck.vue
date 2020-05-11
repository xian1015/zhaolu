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

import app from "../App";
import index from "./Index";
import backStage from "./BackStage";

export default {
  data: function() {
    return {
      count: 3,
      quanxian: this.$route.params.quanxian,
      timer:'',
    };
  },

  methods: {
    countdown: function() {
      let that = this;
      if (that.count > 0) {
        that.count--;
      } else {
        if(that.quanxian == "backStage"){
          that.$router.push("./backStage");
          clearInterval(that.timer);
        } else {
          that.$router.push("./index");
          clearInterval(that.timer);
        }
      }
    }
  },

  mounted() {
    let that = this;
    this.timer = setInterval(this.countdown, 1000);
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/loginCheck.css";
</style>
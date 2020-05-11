<template>
  <div class="middle">
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
axios.default.widthCredentials = true;

import app from "../App";

export default {
  data: function() {
    return {
      
    };
  },

  methods: {
  },

  mounted() {
    let that = this;
    let data = { id: that.$route.query.id };
    console.log(data);
    that.$router.push({path: "/book",query: {id:that.$route.query.id}});
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/loginCheck.css";
</style>
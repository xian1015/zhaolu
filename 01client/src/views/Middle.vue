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
    if(that.$route.query.id){
      let data = { id: that.$route.query.id };
      that.$router.push({path: "/book",query: {id:that.$route.query.id}});
    } else if(that.$route.query.searchInput){
      let data = { id: that.$route.query.searchInput };
      that.$router.push({path: "/searchList",query: {searchInput:that.$route.query.searchInput}});
    }
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/loginCheck.css";
</style>
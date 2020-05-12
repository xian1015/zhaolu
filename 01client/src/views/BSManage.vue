<template>
  <div class="bsManage">
    <el-container>
      <el-aside>
        <el-menu :default-openeds="['1']" default-active="1-1">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>书籍管理
            </template>
            <el-menu-item index="1-1" v-on:click="bookAdd">图书添加</el-menu-item>
            <el-menu-item index="1-2" v-on:click="bookAlter">图书修改</el-menu-item>
          </el-submenu>
          <el-menu-item index="2" v-on:click="bannerAlter">
            <i class="el-icon-menu"></i>公告管理
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="contain2">
        <el-header>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <span>admin</span>
        </el-header>

        <el-main v-if="isbookAdd">
          <bookImp></bookImp>
        </el-main>
        <el-main v-if="isbookAlter">
          <bookAlter></bookAlter>
        </el-main>
        <el-main v-if="isbannerAlter">
          <bannerAlter></bannerAlter>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import app from "../App";
import bookImp from "./BookImp";
import bookAlter from "./BookAlter";
import bannerAlter from "./bannerAlter";

export default {
  data: function() {
    return {
      quanxian: "bs",
      item: {},
      isbookAdd: true,
      isbookAlter: false,
      isbannerAlter: false
    };
  },
  components: {
    bookImp,
    bookAlter,
    bannerAlter,
  },
  methods: {
    bookAdd: function() {
      this.isbookAdd = true;
      this.isbookAlter = false;
      this.isbannerAlter = false;
    },
    bookAlter: function() {
      this.isbookAdd = false;
      this.isbookAlter = true;
      this.isbannerAlter = false;
    },
    bannerAlter: function() {
      this.isbookAdd = false;
      this.isbookAlter = false;
      this.isbannerAlter = true;
    }
  },
  mounted() {
    let that = this;
    let a = localStorage.getItem("adminname");
    if (that.quanxian != "bs") {
      that.$router.push({
        name: "logincheck",
        params: { quanxian: "backStage" }
      });
    }
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/bsManage.css";
</style>

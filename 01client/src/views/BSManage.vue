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
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-menu"  v-on:click="bannerAlter"></i>公告管理
            </template>
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
          <el-table :data="tableData">
            
          </el-table>
        </el-main>
        <el-main v-if="isbannerAlter">
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
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

export default {
  data: function() {
    return {
      quanxian: this.$route.params.quanxian,
      item: {},
      isbookAdd: true,
      isbookAlter: false,
      isbannerAlter: false,
    };
  },
  components:{
    bookImp
  },
  methods: {
    bookAdd:function(){
      this.isbookAdd = true;
      this.isbookAlter = false;
      this.isbannerAlter = false;
    },
    bookAlter:function(){
      this.isbookAdd = false;
      this.isbookAlter = true;
      this.isbannerAlter = false;
    },
    bannerAlter:function(){
      this.isbookAdd = false;
      this.isbookAlter = false;
      this.isbannerAlter = true;
    },
  },
  mounted() {
    let that = this;
    let a = localStorage.getItem("adminname");
    console.log(a);
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

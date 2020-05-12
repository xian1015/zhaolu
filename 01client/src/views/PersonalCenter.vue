<template>
  <div class="personalCenter">
    <zlHeader isTitle="个人中心"></zlHeader>
    <div class="pc_infor wd1200">
      <div class="pc_lanBox"></div>

      <div class="pc_inforbox">
        <div class="pc_titleBox">
          <p class="pc_titleContent">用户信息</p>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">ID:&nbsp;{{userInfo.user_id}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">用户名:&nbsp;{{userInfo.user_name}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">邮箱:&nbsp;{{userInfo.user_email}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">电话:&nbsp;{{userInfo.user_tele}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">性别:&nbsp;{{userInfo.user_sex}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">年龄:&nbsp;{{userInfo.user_age}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
        </div>
        <div class="pc_infor_item1">
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">余额:&nbsp;{{userInfo.user_score}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
          <div class="pc_infor_item2">
            <div class="pc_item_bc">
              <div class="pc_info_contentBox">已购数量:&nbsp;{{userInfo.user_buyNum}}</div>
              <div class="pc_mask"></div>
            </div>
          </div>
        </div>
        <div class="pc_infor_item3">
          <div class="pc_item_bc2">
              <div class="pc_info_contentBox2">已购书籍:&nbsp;{{userInfo.user_buybook_id}}</div>
              <div class="pc_mask2"></div>
            </div>
        </div>
      </div>

      <hotRank typeID="undefined"></hotRank>
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
import hotRank from "./HotRank";

export default {
  data: function() {
    return {
      userInfo: {
        user_id: "",
        user_name: "",
        user_password: "",
        user_age: "",
        user_email: "",
        user_sex: "",
        user_tele: "",
        user_score: "",
        user_buyNum: "",
        user_buybook_id: ""
      }
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    loginClick: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    exitLoginBox: function() {
      this.isLoginClick = !this.isLoginClick;
    },
    getInfo: function() {
      let that = this;
      let userName = localStorage.getItem("username");
      let userPassword = localStorage.getItem("userpass");
      let data = {
        userName: userName,
        userPassword: userPassword
      };
      that.axios
        .get("http://localhost:8888/getInfo", {
          params: data
        })
        .then(res => {
          console.log(res.data);
          that.userInfo.user_id = res.data.user_id;
          that.userInfo.user_name = res.data.user_name;
          that.userInfo.user_password = res.data.user_password;
          that.userInfo.user_email = res.data.user_email;
          that.userInfo.user_sex = res.data.user_sex;
          that.userInfo.user_tele = res.data.user_tele;
          that.userInfo.user_age = res.data.user_age;
          that.userInfo.user_score = res.data.user_score;
          that.userInfo.user_buyNum = res.data.user_buyNum;
          if (res.data.user_buybook_id == "") {
            that.userInfo.user_buybook_id = "未购买";
          } else {
            that.userInfo.user_buybook_id = res.data.user_buybook_id;
          }
          console.log(that.userInfo);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    zlHeader,
    hotRank
  },
  mounted() {
    let that = this;
    this.getInfo();
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/PersonalCenter.css";
</style>

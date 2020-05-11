<template>
  <div class="houtai">
    <div class="ht_loginBigBox">
      <div class="loginMark"></div>
      <div class="loginBox">
        <div class="ht_login">
          <div>
            <h2>后&nbsp;&nbsp;台&nbsp;&nbsp;登&nbsp;&nbsp;录</h2>
          </div>
          <div class="ht_adimBox">
            <span>账户：</span>
            <el-input
              class="ht_input"
              placeholder="请输入账户"
              prefix-icon="el-icon-user-solid"
              v-model="adminName"
            ></el-input>
          </div>
          <div class="ht_adimBox">
            <span>密码：</span>
            <el-input
              class="ht_input"
              placeholder="请输入密码"
              show-password
              prefix-icon="el-icon-more"
              v-model="adminPass"
            ></el-input>
          </div>
          <div v-if="isLoginEmpty" class="login_empty">账号或密码不能为空</div>
          <div v-if="isLoginWrong" class="login_empty">账号或密码不正确</div>
          <button class="login_button" v-on:click="adminLogin">确&nbsp;&nbsp;认</button>
        </div>
        <div class="ht_tip">
          <div>仅限管理员登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import app from "../App";

export default {
  data: function() {
    return {
      adminName: "",
      adminPass: "",
      adminInfo: {},
      loading: false,
      loginSess: {
        adminname: "",
        password: ""
      },
      islogin: false,
      isLoginEmpty: false,
      isLoginWrong: false
    };
  },

  methods: {
    adminLogin: function() {
      let that = this;
      let adminName = that.adminName;
      let adminPass = that.adminPass;
      if (adminName.length !== 0 && adminPass.length !== 0) {
        let data = {
          adminName: adminName,
          adminPass: adminPass
        };
        that.axios
          .get("http://localhost:8888/adminLogin", {
            params: data
          })
          .then(res => {
            if (res.data[0].statusCode === 200) {
              let adminInfo = res.data[1];
              that.adminInfo = adminInfo;
              //localadminName 这个是store里面的方法名，后面就是要缓存的值
              this.$store.commit("localAdminName", adminInfo.admin_name);
              this.$store.commit("localAdminPass", adminInfo.admin_password);
              //这里结束的位置
              that.islogin = true;
              that.$router.push({name: 'bsManage',params: { quanxian: 'backStage' }});
            } else {
              that.loading = false;
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        that.isLoginEmpty = true;
      }
    }
  },
  components: {},
  mounted() {
    let that = this;
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/BackStage.css";
</style>

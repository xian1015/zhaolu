<template>
  <div class="regist">
    <div class="re_infor">
      <div class="re_homepage">
        <router-link :to="{path:'./index'}">
          <div class="re_homepageBox">
            <i class="el-icon-arrow-left"></i>
            <span>回到首页</span>
          </div>
        </router-link>
      </div>
      <div class="re_inforBox">
        <div class="re_infor_itembox">
          <div class="re_infor_item">
            <span class="xinghao">*</span>用户名：
          </div>
          <input
            class="re_infor_input"
            placeholder="请输入用户名"
            v-model="userinput"
            type="text"
            name="username"
          />
          <div v-if="isNameRep" class="regist_wrong">用户名重复</div>
          <div v-if="isNameOK" class="regist_wrong">请输入3~8位数字或英文字母</div>
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">
            <span class="xinghao">*</span>密码：
          </div>
          <input
            class="re_infor_input"
            placeholder="请输入密码"
            v-model="passinput"
            type="password"
            name="password"
          />
          <div v-if="isPassOK" class="regist_wrong">请输入3~8位数字或英文字母</div>
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">
            <span class="xinghao">*</span>手机号：
          </div>
          <input class="re_infor_input" placeholder="请输入电话" v-model="teleinput" clearable />
          <div v-if="isTeleEmp" class="regist_wrong">请输入正确的11位手机号</div>
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">
            <span class="xinghao">*</span>邮箱：
          </div>
          <input
            class="re_infor_input"
            placeholder="请输入邮箱"
            type="email"
            v-model="emainput"
            name="user_email"
          />
          <div v-if="isEmaEmp" class="regist_wrong">请输入正确的邮箱</div>
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">
            <span class="xinghao">*</span>性别：
          </div>
          <el-radio class="re_infor_radio" v-model="radio" label="1">男</el-radio>
          <el-radio class="re_infor_radio" v-model="radio" label="2">女</el-radio>
        </div>
        <div class="re_infor_itembox">
          <div class="re_infor_item">
            <span class="xinghao">*</span>年龄：
          </div>
          <input class="re_infor_input" type="age" placeholder="请输入年龄" v-model="ageinput" />
          <div v-if="isAgeEmp" class="regist_wrong">请输入1~99岁的年龄</div>
        </div>
      </div>
      <button class="re_Sub" v-on:click="regist">
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
      userinput: "",
      passinput: "",
      teleinput: "",
      emainput: "",
      ageinput: "",
      radio: "2",
      registTable: {},
      isTeleEmp: false,
      isEmaEmp: false,
      isAgeEmp: false,
      isTrue: true,
      isNameRep: false,
      isNameOK: false,
      isPassOK: false
    };
  },

  methods: {
    regist: function() {
      let that = this;
      let reName = that.userinput;
      let rePass = that.passinput;
      let retele = that.teleinput;
      let reema = that.emainput;
      let reage = that.ageinput;
      let resex = "女";
      if (that.radio == "1") {
        resex = "男";
      }
      that.registTable = {
        reName,
        rePass,
        retele,
        reema,
        resex,
        reage
      };
      console.log(that.registTable); //检测能否获取信息
      let reg = /^[a-z0-9]{3,8}$/i; // i是忽略大小写,g是全局查找
      let teleReg = /^1[3456789]\d{9}$/;
      let emaReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // console.log("tele:" + teleReg.test(retele));
      // console.log("ema:" + emaReg.test(reema));
      console.log("Pass:" + reg.test(rePass));
      if (
        reName == undefined ||
        rePass == undefined ||
        retele == undefined ||
        reema.length == 0 ||
        reage.length == 0
      ) {
        alert("带*不能为空");
        that.isTrue = false;
      } else {
        if (!reg.test(reName)) {
          that.isNameOK = true;
          that.isTrue = false;
        } else {
          that.isNameOK = false;
        }
        if (!reg.test(rePass)) {
          that.isPassOK = true;
          that.isTrue = false;
        } else {
          that.isPassOK = false;
        }
        if (!teleReg.test(retele)) {
          that.isTeleEmp = true;
          that.isTrue = false;
        } else {
          that.isTeleEmp = false;
        }
        if (!emaReg.test(reema)) {
          that.isEmaEmp = true;
          that.isTrue = false;
        } else {
          that.isEmaEmp = false;
        }
        if (reage < 1 || reage > 99) {
          that.isAgeEmp = true;
          that.isTrue = false;
        } else {
          that.isAgeEmp = false;
        }
        if (
          reg.test(reName) &&
          reg.test(rePass) &&
          teleReg.test(retele) &&
          emaReg.test(reema) &&
          reage >= 1 && reage <= 99
        ) {
          that.isTrue = true;
        }
      }
      if (that.isTrue) {
        // console.log("isTrue") 检测进语句没
        let data = that.registTable;
        this.axios
          .get("http://localhost:8888/regist", {
            params: data
          })
          .then(res => {
            console.log(res);
            if (res.data.codes == 0) {
              that.isNameRep = true;
            } else if (res.data.codes == 1) {
              alert("注册成功！请回到首页进行登录！");
              that.isNameRep = false;
              that.$router.push("./index");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    let that = this;
    that.isTeleEmp = false;
    that.isEmaEmp = false;
    that.isAgeEmp = false;
    that.isTrue = false;
    that.isNameRep = false;
    that.isNameOK = false;
    that.isPassOK = false;
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/regist.css";
</style>
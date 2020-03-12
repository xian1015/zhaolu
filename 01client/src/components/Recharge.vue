<template>
  <div class="recharge">
    <zlHeader isTitle="充值"></zlHeader>
    <div class="rc_recharge wd1200">
      <div class="rc_rcBox">
        <ul class="rc_wayBox">
          <li v-for="item in wayOfRecharge" v-bind:key="item.id">
            <div
              v-bind:class="[isWay ===item.way ? 'chongzhi1' : 'chongzhi2']"
              v-on:click="waySelected(item.way)"
            >{{item.way}}支付</div>
          </li>
        </ul>
        <div class="rc_rechargeBox">
          <div class="rc_rechargeBoxTop">
            <div class="rc_rechargeBoxLeft">
              <div class="rc_wayOf">支付平台：{{isWay}}</div>
              <div class="rc_amount">
                <span>支付金额：</span>
                <el-radio-group v-model="radio" class="amountBox">
                  <el-radio :label="10" class="amountItem">10元，购买100点朝露币</el-radio>
                  <el-radio :label="30" class="amountItem">30元，购买300点朝露币</el-radio>
                  <el-radio :label="50" class="amountItem">50元，购买500点朝露币</el-radio>
                  <el-radio :label="100" class="amountItem">100元，购买1000点朝露币</el-radio>
                  <el-radio :label="1" class="amountItem">1元，购买5点朝露币</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="rc_rechargeBoxRight">
              <div class="rc_rechargeTips"></div>
            </div>
          </div>
          <div class="rc_rechargeButton">
            <div class="rc_rechargeButtonBox">支&nbsp;&nbsp;付</div>
          </div>
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

import index from "./Index";
import recharge from "./Recharge";
import personalCenter from "./PersonalCenter";
import regist from "./Regist";
import app from "../App";
import zlHeader from "./ZLHeader";

export default {
  data: function() {
    return {
      searchInput: "",
      userInput: "",
      passInput: "",
      img: [],
      imgUrl: [],
      navTitle: [
        { id: 0, title: "首页", englishTitle: "./index" },
        { id: 1, title: "充值", englishTitle: "./recharge" },
        { id: 2, title: "个人中心", englishTitle: "./personalCenter" }
      ],
      isTitle: "充值",
      wayOfRecharge: [
        { id: 0, way: "支付宝" },
        { id: 1, way: "微信" }
      ],
      isWay: "支付宝",
      radio: 10
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    waySelected: function(way) {
      this.isWay = way;
    },
  },
  components:{
    zlHeader
  }
};
//   mounted() {
//     let that = this;
//     this.axios.get("http://localhost:8888/cloudNote").then(res => {
//       that.img = res.data;
//     });
//     this.axios.get("http://localhost:8888/cloudNoteUrl").then(res => {
//       that.imgUrl = res.data;
//     });
//   }
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Recharge.css";
</style>

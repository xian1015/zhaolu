<template>
  <div class="book">
    <zlHeader></zlHeader>
    <div class="bookBox wd1200">
      <div class="book_infor">
        <div class="bookRight">
          <div class="bookCover"></div>
          <button class="bookPay"></button>
        </div>
        <div class="bookInfo"></div>
      </div>
      <div class="in_hotRank">
        <div class="in_hotRankBox">
          <div class="in_hr_title">
            <span class="in_hr_text">热门榜</span>
          </div>
          <div class="in_hr_contentBox">
            <ul class="in_hr_content">
              <li v-for="item in hotRank" v-bind:key="item.id" class="ell1">
                <a href="item.url">{{item.id+1}}.{{item.name}}&nbsp;作者：{{item.author}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="in_todayIntro wd1200">
      <div class="in_midTitleBox">
        <p class="in_midTitle">随机推荐</p>
      </div>
      <div class="in_ticontentBox">
        <ul class="in_ticontent">
          <li class="in_ticontent_item" v-for="item in todayIntroList" v-bind:key="item.id">
            <div class="in_ticontent_itemBox">
              <a href class="in_ti_img">
                <img src alt />
              </a>
              <div class="in_ti_text">
                <div class="in_ti_textBox">
                  <a href>
                    <p class="bookName1">{{item.name}}</p>
                  </a>
                  <p class="bookAuthor1">
                    作者：
                    <a href>{{item.author}}</a>
                  </p>
                </div>
                <div class="in_ti_textIntro">
                  <p>
                    简介：
                    <span class="bookIntro1 ell2">{{item.intro}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="in_ti_type">
              <p>类型:{{item.type}}</p>
            </div>
          </li>
        </ul>
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
      isTitle: "",
      // islogin: false,
      // isLoginClick: false,
      // loginEmpty: false,
      hotRank: [
        { id: 0, name: "撒野", author: "p", url: "#" },
        { id: 1, name: "某某", author: "p", url: "#" },
        { id: 2, name: "地球上线", author: "莫晨欢", url: "#" },
        { id: 3, name: "撒野", author: "p", url: "#" },
        { id: 4, name: "某某", author: "p", url: "#" },
        { id: 5, name: "地球上线", author: "莫晨欢", url: "#" },
        { id: 6, name: "撒野", author: "p", url: "#" },
        { id: 7, name: "某某", author: "p", url: "#" },
        { id: 8, name: "地球上线", author: "莫晨欢", url: "#" },
        { id: 9, name: "高能二维码", author: "青色羽翼", url: "#" }
      ],
      todayIntroList: [
        {
          id: 0,
          name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          type: "纯爱",
          intro:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        },
        {
          id: 1,
          name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          type: "纯爱",
          intro:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        },
        {
          id: 2,
          name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          type: "纯爱",
          intro:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        },
        {
          id: 3,
          name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          type: "纯爱",
          intro:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        }
      ],
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    // loginClick: function() {
    //   this.isLoginClick = !this.isLoginClick;
    // },
    // exitLoginBox: function() {
    //   this.isLoginClick = !this.isLoginClick;
    // }
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
@import "../assets/css/Book.css";
</style>
<template>
  <div class="randomRecom">
    <div class="in_randomRecom wd1200">
      <div class="in_midTitleBox">
        <p class="in_midTitle">随机推荐</p>
      </div>
      <div class="in_rrcontentBox">
        <ul class="in_rrcontent">
          <li class="in_rrcontent_item" v-for="item in RandomRecomList" v-bind:key="item.id">
            <div class="in_rrcontent_itemBox">
              <a href>
                <img class="in_rr_img" :src="item.book_cover" alt />
              </a>
              <div class="in_rr_text">
                <div class="in_rr_textBox">
                  <a href>
                    <p class="bookName1">{{item.book_name}}</p>
                  </a>
                  <p class="bookAuthor1">
                    作者：{{item.author}}
                  </p>
                </div>
                <div class="in_rr_textIntro">
                  <p class="bookIntroTitle">简介：</p>
                  <span class="bookIntro1 ell2">&nbsp;{{item.introduction}}</span>
                </div>
              </div>
            </div>
            <div class="in_rr_type">
              <p>类型：{{item.bigtype_name}}</p>
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
axios.default.widthCredentials = true;

import app from "../App";

export default {
  name: "RandomRecom",
  data: function() {
    return {
      RandomRecomList: [],
      i: [
        {
          id: 0,
          book_name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          bigtype_name: "纯爱",
          introduction:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        },
        {
          id: 1,
          book_name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          bigtype_name: "纯爱",
          introduction:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        },
        {
          id: 2,
          book_name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          bigtype_name: "纯爱",
          introduction:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        },
        {
          id: 3,
          book_name: "撒野",
          author: "p",
          url: "#",
          img: "./",
          bigtype_name: "纯爱",
          introduction:
            "我想，左肩有你，右肩微笑。我想，在你眼里，撒野奔跑，我想，一个眼神，就到老。重点学校的优等生蒋丞被寄养家庭“流放”到亲生父亲所在的钢厂，陌生的环境、粗鄙的父亲、与曾经学校完全不能相提并论的四中都令其感到压抑郁闷。直到某一天，机缘巧合下，蒋丞遇到了“钢厂小霸王”顾飞，至此开始了一段关于“拯救”与“希望”的故事……"
        }
      ]
    };
  },

  methods: {},
  props: ["recomNum"],
  mounted() {
    let that = this;
    let data = { recomNum: that.recomNum };
    this.axios
      .get("http://localhost:8888/recom", {
        params: data
      })
      .then(res => {
        that.RandomRecomList = res.data;
        console.log(that.RandomRecomList);
      });
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
@import "../assets/css/Index.css";
@import "../assets/css/RandomRecom.css";
</style>
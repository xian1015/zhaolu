
<template>
  <div class="homepage">
    <div class="hp_header">
      <div class="hp_headerBox">
        <div class="hp_headerBoxLeft">
          <a href="/homepage" class="hp_headerBoxLeft_logo">
          </a>
          <ul class="hp_nav">
            <li
              v-for="item in navTitle"
              v-bind:key="item.id"
              v-bind:class="[isTitle ===item.title ? 'hp-nav-itemSele' : 'hp-nav-itemNoSele']"
              v-on:click="selected(item.title)"
            >
              <a href="#">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="hp_headerBoxCenter">
        </div>
        <div class="hp_headerBoxRight">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      img: [],
      imgUrl: [],
      navTitle: [
        { id: 0, title: '首页' },
        { id: 1, title: '每日签到' },
        { id: 2, title: '个人中心' }
      ],
      isTitle: '首页',
      isWeb: false
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    zhuxiao: function() {
      this.isWeb = !this.isWeb;
    },
  },

  // mounted() {
  //   let that = this;
  //   this.axios.get("http://localhost:8888/cloudNote").then(res => {
  //     that.img = res.data;
  //   });
  //   this.axios.get("http://localhost:8888/cloudNoteUrl").then(res => {
  //     that.imgUrl = res.data;
  //   });
  // }
};

</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/homepage.css";
</style>

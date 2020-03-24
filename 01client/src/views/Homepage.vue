<template>
  <div class="homepage">
        <zlHeader></zlHeader>
  </div>
</template>
<script>
import zlHeader from "./ZLHeader";
export default {
  data: function() {
    return {

    };
  },

  components:{
    zlHeader
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
</style>
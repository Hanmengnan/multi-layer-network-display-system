<template>
  <div class="container">
    <div class="border-1"></div>
    <div class="border-2"></div>
    <div class="border-3"></div>
    <div class="border-4"></div>

    <div class="title-container">
      <div class="iconfont">&#xe6fc;</div>
      <div class="title" v-text="title"></div>
      <div class="iconfont">&#xe6bd;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
@import "~@/assets/css/variable";
.container {
  .mixin-width-height();
  position: relative;

  .border-1 {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
    border-top: #1795e9 solid 5px;
    border-left: #1795e9 solid 5px;
  }
  .border-2 {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: 0;
    border-top: #1795e9 solid 5px;
    border-right: #1795e9 solid 5px;
  }
  .border-3 {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0;
    left: 0;

    border-bottom: #1795e9 solid 5px;
    border-left: #1795e9 solid 5px;
  }
  .border-4 {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0;
    right: 0;
    border-bottom: #1795e9 solid 5px;
    border-right: #1795e9 solid 5px;
  }

  .title-container {
    box-sizing: border-box;
    .mixin-flex(@justify-content: center);
    .mixin-width-height();
    font-size: @defaultFontSize*2;
    color: @borderColor;
    .title {
      margin: 0 20px 0 20px;
    }
  }
}
</style>

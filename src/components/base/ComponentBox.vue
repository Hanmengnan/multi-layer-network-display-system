<template>
  <div class="box">
    <div class="header">
      <div class="border-left"></div>
      <div class="border-right"></div>
      <div class="header-title" v-text="titleName"></div>
      <div class="header-button">
        <slot name="header-button"></slot>
      </div>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentBox",
  props: {
    titleName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base.less";
@import "~@/assets/css/variable.less";
.box {
  .mixin-width-height();
  .mixin-flex(@flex-direction: column, @justify-content: flex-start);
  .header {
    .mixin-flex();
    position: relative;
    width: 100%;
    height: 4vh;
    background-color: rgba(0, 0, 0, 0.2);

    .header-title {
      margin-left: 40px;
      font-size: @defaultFontSize*1.3;
      color: @defaultFontColor;
    }
    .header-button {
      margin-right: 30px;
    }
    .border-left {
      position: absolute;
      top: 0;
      left: 0;
      border: 8px solid transparent;
      border-left: @themeColor3 solid 8px;
      border-top: @themeColor3 solid 8px;
    }
    .border-right {
      position: absolute;
      top: 0;
      right: 0;
      height: 3vh;
      border-left: 2vh solid @themeColor1;
      border-bottom: 1vh solid transparent;
    }
  }
  .body {
    width: 100%;
    height: 85%;
    overflow: hidden;
    margin-top: 5px;
  }
}
</style>

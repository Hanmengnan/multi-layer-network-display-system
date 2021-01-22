<template>
  <div class="legend-container">
    <div class="setting">
      <slot name="left"></slot>
    </div>
    <div class="title" v-text="titleName"></div>
    <div class="setting">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend",
  props: {
    titleName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";
@import "~@/assets/css/mixin/base";
.legend-container {
  .mixin-flex(@justify-content: space-between);
  .title {
    flex: 6;
    color: @defaultFontColor;
    font-size: @defaultFontSize;
  }
  .setting {
    flex: 1;
    color: @defaultFontColor;
  }
}
</style>

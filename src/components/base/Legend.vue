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
.legend-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .title {
    flex: 12;
    color: @defaultFontColor;
    font-size: @defaultFontSize;
  }
  .setting {
    flex: 2;
    color: @defaultFontColor;
  }
}
</style>

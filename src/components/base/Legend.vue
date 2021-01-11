<template>
  <div>
    <div class="title" v-text="titleName"></div>
    <slot class="icon"></slot>
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
.title {
  color: @defaultFontColor;
  font-size: @defaultFontSize;
}
.icon {
  position: relative;
  right: 5%;
}
</style>

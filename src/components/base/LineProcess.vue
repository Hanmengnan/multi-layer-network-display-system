<template>
  <div class="line-process">
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="process" ref="process">
      <div
        class="value"
        :style="
          `
          width: ${this.value}%;
          background-color: ${this.themeColor};
        `
        "
      >
        {{ value }}%
      </div>
    </div>
  </div>
</template>

<script>
import { themeColor1 } from "@/assets/js/variable.js";

export default {
  name: "line-process",
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      required: false,
      default: themeColor1
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";

.line-process {
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @titleFontWeight;
  display: flex;
  position: relative;

  .title {
    flex: 1;
    margin-right: 10px;
    font-size: @defaultFontSize / 1.2;
  }

  .process {
    flex: 2;
    border-radius: 20px;
    border: @themeColor1 3px solid;

    .value {
      height: 100%;
      border-radius: 20px;
      font-size: @defaultFontSize;
      transition: width 0.5s;
    }
  }
}
</style>

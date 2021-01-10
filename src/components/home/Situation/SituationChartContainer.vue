<template>
  <div
    :class="[
      'chart-box',
      { 'first-box': index === '0' },
      { 'last-box': index === '1' }
    ]"
  >
    <div class="box-border-1"></div>
    <div class="box-border-2"></div>
    <pie-chart-empty
      :title="title"
      :themeColor="themeColor"
      :aimConditionNumber="aimConditionNumber"
      :clickEvent="clickEvent"
      :conditionNumber="conditionNumber"
    ></pie-chart-empty>
  </div>
</template>

<script>
import PieChartEmpty from "@/components/base/chart/PieChartEmpty";

export default {
  name: "ChartContainer",
  components: {
    PieChartEmpty
  },
  props: {
    index: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      required: false,
      default: "#1772e9"
    },
    aimConditionNumber: {
      type: Number,
      required: true
    },
    conditionNumber: {
      type: Number,
      required: true
    },
    clickEvent: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";
.chart-box {
  height: 100%;
  width: 33.3%;
  background: rgba(0, 0, 0, 0.1);
  position: relative;

  .box-border-1,
  .box-border-2 {
    position: absolute;
    width: 10px;
    height: 10px;
  }

  .box-border-1 {
    bottom: 0;
    right: 0;
    border-bottom: solid @titleDescribeSize @borderColor;
    border-right: solid @titleDescribeSize @borderColor;
  }

  .box-border-2 {
    top: 0;
    left: 0;
    border-top: solid @titleDescribeSize @borderColor;
    border-left: solid @titleDescribeSize @borderColor;
  }
}
.first-box {
  margin-right: 4px;
}
.last-box {
  margin-left: 4px;
}
</style>

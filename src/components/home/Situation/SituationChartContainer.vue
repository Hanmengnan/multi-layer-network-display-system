<template>
  <pie-chart-empty
    :title="title"
    :themeColor="themeColor"
    :aimConditionNumber="aimConditionNumber"
    :clickEvent="clickEvent"
    :conditionNumber="conditionNumber"
  ></pie-chart-empty>
</template>

<script>
import PieChartEmpty from "@/components/chart/PieChartEmpty";

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
</style>

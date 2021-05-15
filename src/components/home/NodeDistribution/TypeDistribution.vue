<template>
  <pie-progress-chart
    :chart-data="chartData"
    :chart-name="chartName"
  ></pie-progress-chart>
</template>

<script>
import PieProgressChart from "@/components/home/NodeDistribution/PieProgressChart";

export default {
  name: "TypeDistribution",
  props: {
    chartData: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  data() {
    return {
      chartName: "类型分布"
    };
  },
  components: {
    PieProgressChart
  }
};
</script>

<style lang="less" scoped></style>

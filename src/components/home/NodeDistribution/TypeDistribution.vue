<template>
  <pie-progress-chart
    :chart-data="typeData"
    :chart-name="chartName"
  ></pie-progress-chart>
</template>

<script>
import PieProgressChart from "@/components/home/NodeDistribution/PieProgressChart";

export default {
  name: "TypeDistribution",
  data() {
    return {
      chartName: "类型分布",
      typeData: [
        { name: "光节点", value: 30 },
        { name: "电中继站", value: 20 },
        { name: "业务上下站", value: 40 }
      ]
    };
  },
  components: {
    PieProgressChart
  }
};
</script>

<style lang="less" scoped></style>

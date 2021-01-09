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
      chartName: "地区分布",
      typeData: [
        { name: "北京", value: 30 },
        { name: "上海", value: 20 },
        { name: "广州", value: 40 },
        { name: "深圳", value: 40 },
        { name: "贵州", value: 5 },
        { name: "沈阳", value: 8 }
      ]
    };
  },
  components: {
    PieProgressChart
  }
};
</script>

<style lang="less" scoped></style>

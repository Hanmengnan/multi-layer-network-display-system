<template>
  <div ref="chartContainer"></div>
</template>

<script>
let mychart;
import echarts from "echarts";
export default {
  name: "ProgressChart",
  props: {},
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    mychart = echarts.init(chartArea);
    mychart.setOption(this.options);
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
.chartContainer {
  .mixin-width-height();
}
</style>

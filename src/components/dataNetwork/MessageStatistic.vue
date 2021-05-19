<template>
  <div class="mainArea">
    <div class="chartArea">
      <BarChart
        :chart-name="statisticData.chartName"
        :chart-data="statisticData.chartData"
        :chart-axis-data="statisticData.chartAxisData"
        :direction="false"
        style="width: 100%; height: 100%"
      ></BarChart>
    </div>
  </div>
</template>

<script>
import BarChart from "../chart/BarChart";

export default {
  name: "MessageStatistic",
  components: {
    BarChart
  },
  props: {
    statisticData: {
      type: Object,
      required: true
    }
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
@import "~@/assets/css/mixin/base";

.mainArea {
  color: @defaultFontColor;
  position: relative;
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;
  .mixin-width-height();
  .mixin-flex();

  .chartArea {
    .mixin-width-height(@width: 100%, @height:100%);
  }
}
</style>

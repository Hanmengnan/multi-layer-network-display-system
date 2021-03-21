<template>
  <div class="band-monitor">
    <div class="title">
      <div class="text time">时间: {{ time }}</div>
      <div class="text target">目标: {{ target }}</div>
    </div>
    <div class="container">
      <BarChart
        :direction="true"
        :char-data="chartData"
        :char-axis-data="chartAxisData"
        :chart-name="chartName"
        :x-axis-pointer="chartSetting.xAxisPointer"
        :tooltip="chartSetting.tooltip"
        :y-axis-label-font-size="chartSetting.yAxisLabelFontSize"
      />
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/chart/BarChart.vue";

let timer = "";
export default {
  name: "band-monitor",
  components: {
    BarChart
  },
  data() {
    return {
      chartData: [[30, 34, 32, 22, 12, 23, 44, 41, 54, 34]],
      chartAxisData: [
        "MD01",
        "MD02",
        "MD03",
        "MD04",
        "MD05",
        "MD06",
        "MD07",
        "MD08",
        "MD09",
        "MD10"
      ],
      chartName: ["带宽"],
      chartSetting: {
        tooltip: {
          trigger: "item"
        },
        xAxisPointer: {
          show: false,
          type: "none"
        },
        yAxisLabelFontSize: 10
      },
      time: "2020-12-21",
      target: "全网"
    };
  },
  mounted() {
    timer = setInterval(() => {
      this.chartData = new Array([
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
      ]);
    }, 1000);
  },
  beforeDestroy() {
    setInterval(timer);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
@import "~@/assets/css/mixin/base";

.band-monitor {
  .mixin-flex(@flex-direction: column);
  .mixin-width-height();
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @titleFontWeight;
  position: relative;

  .title {
    .mixin-flex();
    .mixin-width-height(@width: 85%, @height: 10%);
    background-color: @themeColor1;
    margin-right: 23px;
    margin-top: 5px;
    padding: 0 10px;

    .text {
      padding: 0 3px;
      border-left: 5px solid @defaultFontColor;
      border-right: 5px solid @defaultFontColor;
    }
  }

  .container {
    .mixin-width-height(@height: 90%);
  }
}
</style>

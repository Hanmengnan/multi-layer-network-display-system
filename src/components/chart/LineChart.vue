<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { themeColors } from "@/assets/js/variable";

export default {
  name: "LineChart",
  props: {
    title: {
      type: String,
      required: false
    },
    dataZoom: {
      type: Object,
      required: false
    },
    tooltip: {
      type: Object,
      required: false,
      default: () => {
        return {
          trigger: "axis"
        };
      }
    },
    grid: {
      type: Object,
      required: false,
      default: () => {
        return {
          show: false,
          left: "5%",
          right: "12%",
          top: "10%",
          height: "73%"
        };
      }
    },
    xAxisType: {
      type: String,
      required: false,
      default: "category"
    },
    xAxisLabelColor: {
      type: String,
      required: false,
      default: themeColors[0]
    },
    xAxisPointer: {
      type: Object,
      required: false,
      default: () => {
        return {
          show: true,
          type: "none"
        };
      }
    },
    yAxisType: {
      type: String,
      required: false,
      default: "value"
    },
    yAxisPosition: {
      type: String,
      required: false,
      default: "right"
    },
    yAxisLabelColor: {
      type: String,
      required: false,
      default: themeColors[0]
    },
    yAxisPointer: {
      type: Object,
      required: false,
      default: () => {
        return {
          show: true,
          type: "none"
        };
      }
    },
    ySplitLineStyle: {
      type: Object,
      required: false,
      default: () => {
        return {
          lineStyle: {
            color: "rgba(255,255,255,0.05)",
            width: 1
          }
        };
      }
    },
    charData: {
      type: Array,
      required: true
    },
    charAxisData: {
      type: Array,
      required: true
    },
    chartName: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      myChart: null,
      option: this.chartOption()
    };
  },
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    this.myChart = echarts.init(chartArea);
    this.myChart.setOption(this.option);
  },
  methods: {
    chartOption: function() {
      let option = {};
      if (this.title !== undefined) {
        option.title = {
          show: true,
          text: this.title
        };
      } else {
        option.title = { show: false };
      }
      if (this.dataZoom !== undefined) {
        option.dataZoom = this.dataZoom;
      }
      if (this.tooltip !== undefined) {
        option.tooltip = this.tooltip;
      }
      option.dataZoom = {
        type: "inside",
        filterMode: "none"
      };
      option.grid = this.grid;
      option.xAxis = {
        type: this.xAxisType,
        data: this.charAxisData,
        axisLabel: {
          color: this.xAxisLabelColor
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisPointer: this.xAxisPointer,
        splitLine: {
          show: false
        }
      };
      option.yAxis = {
        type: this.yAxisType,
        data: this.charData,
        axisLabel: {
          color: this.yAxisLabelColor
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        position: this.yAxisPosition,
        splitLine: this.ySplitLineStyle
      };
      option.series = this.seriesData();
      return option;
    },
    seriesData: function() {
      let tempList = [];
      this.charData.forEach((item, index) => {
        tempList.push({
          name: this.chartName[index],
          type: "line",
          color: themeColors[index],
          smooth: true,
          data: item
        });
      });
      return tempList;
    }
  },
  watch: {
    charData: function() {
      this.option.series = this.seriesData();
      this.option.xAxis.data = this.charAxisData;
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
.chartContainer {
  .mixin-width-height();
}
</style>

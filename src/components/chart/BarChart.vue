<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echart from "echarts";
import { themeColors } from "@/assets/js/variable.js";

let chart;

export default {
  name: "bar-chart",
  props: {
    direction: {
      type: Boolean,
      required: true
    },
    stack: {
      type: Boolean,
      required: false,
      default: false
    },
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
          height: "75%"
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
      options: this.chartOption()
    };
  },
  mounted() {
    chart = echart.init(this.$refs.chartContainer);
    chart.setOption(this.options);
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
      if (this.direction) {
        option.grid.right = "25%";
      }
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
      if (this.direction) {
        option.xAxis.type = this.yAxisType;
        option.xAxis.axisLabel = { show: false };
      }

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
      if (this.direction) {
        option.yAxis.type = this.xAxisType;
        option.yAxis.data = this.charAxisData;
      }
      option.series = this.seriesData();
      return option;
    },
    seriesData: function() {
      let tempList = [];
      this.charData.forEach((item, index) => {
        let obj = {
          name: this.chartName[index],
          type: "bar",
          color: themeColors[index],
          smooth: true,
          barWidth: String(100 / this.charData.length + 5) + "%",
          data: item
        };
        if (this.stack) {
          obj.stack = "Total";
        }
        if (this.direction) {
          obj.label = {
            show: true,
            position: "insideRight"
          };
        }
        tempList.push(obj);
      });
      return tempList;
    }
  },
  watch: {
    chartData: {
      handler(newval) {
        this.options.yAxis.data = newval.map(val => {
          return val.name;
        });
        this.options.series[0].data = newval.map(val => {
          return val.value;
        });
        chart.setOption(this.options);
      }
    },
    title(newval) {
      this.options.title.text = newval;
      this.options.series[0].name = newval;
      chart.setOption(this.options);
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

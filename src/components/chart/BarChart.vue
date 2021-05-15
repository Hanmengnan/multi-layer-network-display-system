<template>
  <div ref="chartContainer" style="width: 100%;height: 100%"></div>
</template>

<script>
import echart from "echarts";
import { themeColors } from "@/assets/js/variable.js";

let chart;
let timer = null;

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
    xAxisLabelFontSize: {
      type: Number,
      required: false,
      default: 12
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
    yAxisLabelFontSize: {
      type: Number,
      required: false,
      default: 12
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
    chartData: {
      type: Array,
      required: true
    },
    chartAxisData: {
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
  computed: {},
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
      } else {
        option.dataZoom = {
          type: "inside",
          filterMode: "none"
        };
      }
      if (this.tooltip !== undefined) {
        option.tooltip = this.tooltip;
      }

      option.grid = this.grid;
      if (this.direction) {
        option.grid.right = "25%";
      }

      option.xAxis = {
        type: this.xAxisType,

        axisLabel: {
          interval: 0,
          color: this.xAxisLabelColor,
          fontSize: this.xAxisLabelFontSize
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
        option.xAxis.axisPointer = { show: false };
      } else {
        option.xAxis.data = this.chartAxisData;
      }

      option.yAxis = {
        type: this.yAxisType,
        axisLabel: {
          color: this.yAxisLabelColor,
          fontSize: this.yAxisLabelFontSize
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
        option.yAxis.data = this.chartAxisData;
      }
      option.series = this.seriesData();
      return option;
    },
    seriesData: function() {
      let tempList = [];
      this.chartData.forEach((item, index) => {
        let obj = {
          name: this.chartName[index],
          type: "bar",
          color: themeColors[index],
          smooth: true,
          barWidth: String(100 / this.chartData[0].length + 25) + "%",
          data: item
        };
        if (this.stack) {
          obj.stack = "Total";
        }
        if (this.direction) {
          obj.label = {
            show: true,
            position: "insideRight",
            formatter: function(params) {
              if (params.value > 0) {
                return params.value;
              } else {
                return "";
              }
            }
          };
        }
        tempList.push(obj);
      });
      return tempList;
    }
  },
  watch: {
    chartAxisData: {
      deep: true,
      handler: function() {
        this.options = this.chartOption();
        if (this.direction) {
          this.options.yAxis.data = this.chartAxisData;
        } else {
          this.options.xAxis.data = this.chartAxisData;
        }
        chart.setOption(this.options);
      }
    }
  },

  mounted() {
    chart = echart.init(this.$refs.chartContainer);
    chart.setOption(this.options);
  },
  beforeDestroy() {
    setInterval(timer);
  }
};
</script>
<style lang="less" scoped></style>

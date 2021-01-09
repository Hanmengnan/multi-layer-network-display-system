<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echart from "echarts";
import { lineChartColor } from "@/assets/js/variable.js";

let chart;

export default {
  name: "bar-chart",
  props: {
    chartData: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    xAxisColor: {
      type: String,
      required: false,
      default: "grey"
    },
    yAxisColor: {
      type: String,
      required: false,
      default: "grey"
    }
  },
  data() {
    return {
      options: {
        color: [lineChartColor],
        tooltip: {
          trigger: "axis"
        },
        title: {
          text: this.title,
          x: "center",
          y: 20,
          textStyle: {
            color: "grey"
          }
        },
        visualMap: {
          show: false,
          min: 10,
          max: 50,
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#21DEF4", "#06354E"]
          }
        },
        yAxis: {
          type: "category",
          data: this.chartData.map(val => {
            return val.name;
          }),
          axisLine: {
            show: true,
            lineStyle: {
              color: this.yAxisColor
            }
          },
          splitLine: {
            show: false
          }
        },
        xAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: this.xAxisColor
            }
          }
        },
        series: [
          {
            name: this.title,
            type: "bar",
            data: this.chartData.map(val => {
              return val.value;
            }),
            animationDelay: function(idx) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 5;
        }
      }
    };
  },
  mounted() {
    chart = echart.init(this.$refs.chartContainer);
    chart.setOption(this.options);
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
.chart-container {
  width: 100%;
  height: 100%;
}
</style>

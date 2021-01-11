<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "LineChart",
  props: {
    title: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      myChart: null,
      option: {
        title: {
          show: false,
          text: this.title,
          left: "35%",
          textStyle: {
            color: "#ff9900"
          }
        },
        grid: {
          show: false,
          left: "12%",
          right: "5%",
          height: "70%",
          top: "5%"
        },
        tooltip: {
          trigger: "axis"
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        xAxis: {
          type: "time",
          axisLabel: {
            color: "#2292DD"
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "white"
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#2292DD"
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "grey"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.1)"
            }
          }
        },
        series: [
          {
            name: "light",
            type: "line",
            color: "#2B91D5",
            showSymbol: false,
            smooth: true,
            data: this.listData
          }
        ]
      }
    };
  },
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    this.myChart = echarts.init(chartArea);
    this.myChart.setOption(this.option);
  },
  watch: {
    listData: function(newVal) {
      this.option.series[0].data = newVal;
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style lang="less" scoped>
.chartContainer {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div ref="flowChart" class="flow-chart"></div>
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
          text: this.title,
          left: "35%",
          textStyle: {
            color: "#ff9900"
          }
        },
        legend: {
          show: true,
          icon: "roundRect",
          textStyle: {
            color: "#F0F8FF"
          },
          data: ["light"],
          left: "10%"
        },
        grid: {
          show: false,
          left: "15%",
          right: "5%",
          height: "70%",
          top: "15%"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "time",
          axisLine: {
            show: true,
            lineStyle: {
              color: "grey"
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "grey"
            }
          },
          splitNumber: 5
        },
        series: [
          {
            name: "light",
            type: "line",
            color: "#00CCFF",
            showSymbol: false,
            data: this.listData
          }
        ]
      }
    };
  },
  mounted: function() {
    const chartArea = this.$refs.flowChart;
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
.flow-chart {
  width: 100%;
  height: 100%;
}
</style>

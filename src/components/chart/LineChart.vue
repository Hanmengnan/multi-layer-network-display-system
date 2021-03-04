<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { themeColors } from "@/assets/js/variable";

export default {
  name: "LineChart",
  props: {
    charSetting: {
      type: Object,
      required: false,
      default: function() {
        return {
          title: {
            show: false
          },
          dataZoom: [
            {
              type: "inside"
            }
          ],
          tooltip: {
            trigger: "axis"
          },
          grid: {
            show: false,
            left: "5%",
            right: "12%",
            top: "8%",
            height: "75%"
          },
          xAxis: {
            type: "category",
            axisLabel: {
              color: themeColors[0]
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "white"
              }
            },
            axisTick: {
              show: false
            },
            axisPointer: {
              show: true,
              type: "none"
            }
          },
          yAxis: {
            type: "value",
            position: "left",
            axisLabel: {
              color: themeColors[0]
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "grey"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            }
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
      option: {
        title: {
          show: false
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        grid: {
          show: false,
          left: "5%",
          right: "12%",
          top: "8%",
          height: "75%"
        },
        xAxis: {
          type: "category",
          data: this.charAxisData,
          axisLabel: {
            color: "#2292DD"
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "white"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: this.charSetting.xSplitLine
          },
          axisPointer: {
            show: true,
            type: "none"
          }
        },
        yAxis: {
          type: "value",
          position: "right",
          axisLabel: {
            color: "#2292DD"
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "grey"
            }
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          splitLine: this.charSetting.yAxis.splitLine
        },
        series: this.seriesData()
      }
    };
  },
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    this.myChart = echarts.init(chartArea);
    this.myChart.setOption(this.option);
  },
  methods: {
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
    listData: function(newVal) {
      this.option.series[0].data = newVal;
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

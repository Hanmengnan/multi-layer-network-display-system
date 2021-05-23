<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { scatterData } from "@/assets/map/mapConstant";
import mapJson from "@/assets/map/chinaDataV.json";
import {
  defaultFontColor,
  defaultFontSize,
  themeColor1,
  themeColor2,
  themeColor3,
  themeColor5
} from "@/assets/js/variable";

let myChart;

export default {
  name: "GeoChart",
  props: {
    chartData: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  data() {
    return {
      option: {
        geo: {
          show: true,
          map: "china",
          roam: true,
          zoom: 1,
          center: [113.83531246, 34.0267395887],
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgb(255,255,255)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255, 255, 255, 0)"
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 255, 255, 0)"
                  }
                ]
              }
            },
            emphasis: {
              areaColor: themeColor1,
              borderWidth: 0
            }
          }
        },
        visualMap: {
          seriesIndex: 0,
          dimension: 2,
          pieces: [
            { min: 5 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 3, max: 5 },
            { min: 2, max: 3 },
            { max: 2 } // 不指定 min，表示 min 为无限大（-Infinity）。
          ],
          color: [themeColor2, themeColor3, themeColor5, themeColor1],
          textStyle: {
            color: defaultFontColor
          },
          bottom: 10
        },
        tooltip: {
          trigger: "item"
        },
        grid: {
          right: "0%",
          top: "5%",
          bottom: "5%",
          width: "20%",
          containLabel: false
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: "category",
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            fontSize: defaultFontSize,
            color: defaultFontColor
          },
          data: this.chartData.map(item => item.name)
        },
        series: [
          {
            name: "节点数量",
            type: "scatter",
            coordinateSystem: "geo",
            data: scatterData(this.chartData),
            encode: {
              value: 2
            },
            symbolSize: function(val) {
              return val[2] * 5;
            },
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            }
          },
          {
            name: "节点数量",
            zlevel: 1.5,
            type: "bar",
            symbol: "none",
            data: this.chartData.map(item => item.value)
          }
        ]
      }
    };
  },
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    echarts.registerMap("china", mapJson);
    myChart = echarts.init(chartArea);
    myChart.setOption(this.option);
  },
  watch: {
    chartData: {
      deep: true,
      handler: function() {
        this.option.yAxis.data = this.chartData.map(item => item.name);
        this.option.series[0].data = scatterData(this.chartData);
        this.option.series[1].data = this.chartData.map(item => {
          return {
            value: item.value,
            itemStyle: {
              color: themeColor1
            }
          };
        });
        myChart.setOption(this.option);
      }
    }
  }
};
</script>

<style scoped></style>

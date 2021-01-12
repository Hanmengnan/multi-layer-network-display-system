<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { scatterData, barData, nodeData } from "@/assets/map/mapConstant";
import mapJson from "@/assets/map/chinaDataV.json";
import {
  themeColor1,
  themeColor2,
  themeColor3,
  themeColor5
} from "@/assets/js/variable";

let myChart;

export default {
  name: "GeoChart",
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
                    color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: "#389BB7",
              borderWidth: 0
            }
          }
        },
        visualMap: {
          min: 0,
          max: Math.max(...nodeData.map(item => item.value)),
          pieces: [
            { min: 50 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 40, max: 50 },
            { min: 30, max: 40 },
            { min: 20, max: 30 },
            { min: 10, max: 20 },
            { max: 10 } // 不指定 min，表示 min 为无限大（-Infinity）。
          ],
          color: [themeColor2, themeColor3, themeColor5, themeColor1],
          textStyle: {
            color: "#fff"
          },
          precision: 0
        },
        grid: {
          right: "1%",
          top: "0%",
          bottom: "0%",
          width: "20%",
          containLabel: false
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: 10,
              color: "#ddd"
            }
          },
          data: nodeData.map(item => item.name)
        },
        series: [
          {
            name: "nodeHealth",
            type: "scatter",
            coordinateSystem: "geo",
            data: scatterData(nodeData),
            encode: {
              value: 2
            },
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1
              }
            }
          },
          {
            name: "nodeHealth",
            zlevel: 1.5,
            type: "bar",
            symbol: "none",
            data: barData(nodeData)
          }
        ]
      }
    };
  },
  methods: {
    sortCity: function(a, b) {
      return b.value - a.value;
    }
  },
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    echarts.registerMap("china", mapJson);
    myChart = echarts.init(chartArea);
    myChart.setOption(this.option);
  }
};
</script>

<style scoped></style>

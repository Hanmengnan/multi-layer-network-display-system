<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { scatterData, barData, nodeData } from "@/assets/map/mapConstant";
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
          min: 0,
          max: Math.max(...nodeData.map(item => item.value)),
          pieces: [
            { min: 45 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 30, max: 45 },
            { min: 15, max: 30 },
            { max: 15 } // 不指定 min，表示 min 为无限大（-Infinity）。
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
          data: barData(nodeData).map(item => item[1])
        },
        series: [
          {
            name: "节点数量",
            type: "scatter",
            coordinateSystem: "geo",
            data: scatterData(nodeData),
            encode: {
              value: 2
            },
            symbolSize: function(val) {
              return val[2] / 3;
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
            data: barData(nodeData)
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
  }
};
</script>

<style scoped></style>

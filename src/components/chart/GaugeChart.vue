<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
let myChart;
import echarts from "echarts";
import {
  defaultFontSize,
  defaultFontColor,
  themeColor1,
  themeColor3,
  themeColor2
} from "@/assets/js/variable";

export default {
  name: "GaugeChart",
  props: {
    parameterList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      option: {
        series: [
          {
            name: this.parameterList[0].name,
            type: "gauge",
            center: ["15%", "40%"],
            radius: "50%",
            startAngle: -30,
            endAngle: 210,
            clockwise: false,
            data: [
              {
                value: this.parameterList[0].value,
                name: this.parameterList[0].name
              }
            ],
            max: 50,
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: themeColor1
                      },
                      {
                        offset: 0.6,
                        color: themeColor3
                      },
                      {
                        offset: 1,
                        color: themeColor2
                      }
                    ])
                  ]
                ],
                width: 15
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              width: 3
            },
            title: {
              show: true,
              fontSize: defaultFontSize,
              color: defaultFontColor,
              offsetCenter: ["0", "100%"]
            },
            detail: {
              formatter: "{value} %",
              fontSize: defaultFontSize,
              color: defaultFontColor
            }
          },
          {
            name: this.parameterList[1].name,
            type: "gauge",
            center: ["50%", "40%"],
            radius: "50%",
            startAngle: -30,
            endAngle: 210,
            clockwise: false,
            data: [
              {
                value: this.parameterList[1].value,
                name: this.parameterList[1].name
              }
            ],
            max: 500,
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: themeColor1
                      },
                      {
                        offset: 0.6,
                        color: themeColor3
                      },
                      {
                        offset: 1,
                        color: themeColor2
                      }
                    ])
                  ]
                ],
                width: 15
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              width: 3
            },
            title: {
              show: true,
              fontSize: defaultFontSize,
              color: defaultFontColor,
              offsetCenter: ["0", "100%"]
            },
            detail: {
              formatter: "{value} ms",
              fontSize: defaultFontSize,
              color: defaultFontColor
            }
          },
          {
            name: this.parameterList[2].name,
            type: "gauge",
            radius: "50%",
            center: ["85%", "40%"],
            startAngle: -30,
            endAngle: 210,
            clockwise: false,
            data: [
              {
                value: this.parameterList[2].value,
                name: this.parameterList[2].name
              }
            ],
            max: 10000,
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: themeColor1
                      },
                      {
                        offset: 0.6,
                        color: themeColor3
                      },
                      {
                        offset: 1,
                        color: themeColor2
                      }
                    ])
                  ]
                ],
                width: 15
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              width: 3
            },
            title: {
              show: true,
              fontSize: defaultFontSize,
              color: defaultFontColor,
              offsetCenter: ["0", "100%"]
            },
            detail: {
              formatter: "{value} Mbit/s",
              fontSize: defaultFontSize,
              color: defaultFontColor
            }
          }
        ]
      }
    };
  },
  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    myChart = echarts.init(chartArea);
    myChart.setOption(this.option);
  }
};
</script>

<style lang="less" scoped>
.chartContainer {
  width: 100%;
  height: 100%;
}
</style>

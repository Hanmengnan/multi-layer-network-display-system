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
    return {};
  },
  methods: {
    chartOption: function() {
      let series = this.parameterList.map((item, index) => {
        let tmp = {
          name: item.name,
          type: "gauge",
          center: ["15%", "40%"],
          radius: "50%",
          startAngle: -30,
          endAngle: 210,
          clockwise: false,
          data: [
            {
              value: item.value,
              name: item.name
            }
          ],
          max: 100,
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
        };
        if (index === 1) {
          tmp.center = ["50%", "40%"];
          tmp.detail.formatter = "{value} ms";
        }
        if (index === 2) {
          tmp.center = ["85%", "40%"];
          tmp.max = 0;
          tmp.min = 100;
        }
        return tmp;
      });
      return {
        series: series
      };
    }
  },

  mounted: function() {
    const chartArea = this.$refs.chartContainer;
    myChart = echarts.init(chartArea);
    myChart.setOption(this.chartOption());
  },
  watch: {
    parameterList: {
      deep: true,
      handler: function() {
        myChart.setOption(this.chartOption());
      }
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

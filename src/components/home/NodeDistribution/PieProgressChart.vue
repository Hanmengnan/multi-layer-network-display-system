<template>
  <div ref="chartContainer" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { defaultFontColor, themeColors } from "@/assets/js/variable";

let mychart;

export default {
  name: "pie-chart",
  props: {
    chartName: {
      type: String,
      required: true
    },
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      options: {
        color: themeColors,
        legend: {
          data: this.getDataTitle(),
          show: true,
          left: "5%",
          textStyle: {
            color: defaultFontColor
          }
        },
        tooltip: {
          trigger: "item"
        },
        grid: {
          left: "70%",
          right: "10%",
          top: "10%",
          bottom: "5%"
        },
        yAxis: {
          type: "category",
          data: this.getDataTitle(),
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: defaultFontColor,
            interval: 0
          },
          splitLine: {
            show: false
          }
        },
        xAxis: {
          show: false
        },
        series: [
          {
            name: this.chartName,
            type: "pie",
            radius: "60%",
            center: ["25%", "50%"],
            hoverAnimation: false,
            minShowLabelAngle: 10,
            data: this.chartData,
            label: {
              show: false,
              color: defaultFontColor
            },
            labelLine: {
              show: false,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 1,
              length2: 20
            },
            itemStyle: {
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            // eslint-disable-next-line no-unused-vars
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          },
          {
            name: this.chartName,
            type: "bar",
            barWidth: "15%",
            data: this.chartData,
            itemStyle: {
              color: function(params) {
                return themeColors[params.dataIndex];
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    getDataTitle: function() {
      return this.chartData.map(item => {
        return item.name;
      });
    }
  },
  mounted() {
    const chartArea = this.$refs.chartContainer;
    mychart = echarts.init(chartArea);
    mychart.setOption(this.options);
  },
  watch: {
    chartData: {
      handler(newVal) {
        this.options.legend.data = this.getDataTitle();
        this.options.yAxis.data = this.getDataTitle();

        this.options.series[0].data = newVal;
        this.options.series[1].data = newVal;
        mychart.setOption(this.options);
      },
      deep: true
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

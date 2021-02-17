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
    chartData: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    chartSetting: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: {
        title: {},
        color: themeColors,
        legend: {
          show: this.chartSetting.legendShow,
          left: "5%",
          textStyle: {
            color: defaultFontColor
          }
        },
        tooltip: {
          trigger: "item",
          position: [50, 20]
        },
        series: [
          {
            name: this.title,
            type: "pie",
            radius: this.chartSetting.radius,
            center: ["40%", "50%"],
            hoverAnimation: false,
            minShowLabelAngle: 10,
            data: this.chartData,
            label: {
              show: true,
              position: "center",
              formatter: () =>
                "利用率\n" +
                String(
                  (
                    (this.chartData[0].value / this.chartData[1].value) *
                    100
                  ).toFixed(1) + "%"
                ),
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
          }
        ]
      }
    };
  },
  mounted() {
    const chartArea = this.$refs.chartContainer;
    mychart = echarts.init(chartArea);
    mychart.setOption(this.options);
  },
  watch: {
    chartData: {
      handler(newVal) {
        this.options.series[0].data = newVal;
        mychart.setOption(this.options);
      },
      deep: true
    },
    title(newTitle) {
      this.options.series[0].name = newTitle;
      mychart.setOption(this.options);
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

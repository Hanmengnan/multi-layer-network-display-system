<template>
  <div
    ref="chartContainer"
    class="chartContainer"
    @click="clickEvent(title)"
  ></div>
</template>

<script>
import echarts from "echarts";
import {
  defaultFontColor,
  defaultFontSize,
  defaultFontWeight
} from "@/assets/js/variable.js";

let chartArea;

export default {
  name: "process-chart",
  props: {
    charSetting: {
      type: Object,
      required: false,
      default() {
        return {
          legendShow: false,
          titleShow: true,
          radius: ["70%", "80%"]
        };
      }
    },
    title: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      required: false,
      default: "#1772e9"
    },
    aimConditionNumber: {
      type: String,
      required: true
    },
    conditionNumber: {
      type: String,
      required: true
    },
    clickEvent: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      options: {
        clockwise: true,
        title: [
          {
            show: this.charSetting.titleShow,
            text: this.title,
            textStyle: {
              color: defaultFontColor,
              lineHeight: 5,
              fontSize: defaultFontSize + 1,
              fontWeight: defaultFontWeight
            },
            x: "47%",
            y: "80%",
            textAlign: "center",
            subtext: this.aimConditionNumber + "起"
          }
        ],
        series: [
          {
            type: "pie",
            radius: this.charSetting.radius,
            hoverAnimation: true,
            itemStyle: {
              borderColor: this.themeColor
            },
            data: [
              {
                name: "aim",
                value: (this.aimConditionNumber / this.conditionNumber) * 100,
                itemStyle: {
                  color: this.themeColor
                }
              },
              {
                name: "other",
                value:
                  100 - (this.aimConditionNumber / this.conditionNumber) * 100,
                itemStyle: {
                  color: "#ffffff"
                }
              }
            ],
            label: {
              formatter: params => {
                if (params.name === "aim") {
                  return params.percent + "%";
                } else {
                  return "";
                }
              },
              position: "center",
              bleedMargin: 10,
              color: "#ffffff",
              fontSize: defaultFontSize
            }
          }
        ]
      }
    };
  },
  mounted() {
    chartArea = echarts.init(this.$refs.chartContainer);
    chartArea.setOption(this.options);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
@import "~@/assets/css/mixin/base";
.chartContainer {
  .mixin-width-height();
}
</style>

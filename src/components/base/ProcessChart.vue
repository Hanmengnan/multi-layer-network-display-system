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
} from "@/assets/css/variable.js";

let chartArea;

export default {
  name: "process-chart",
  props: {
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
      type: Number,
      required: true
    },
    conditionNumber: {
      type: Number,
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
        silent: true,
        clockwise: true,
        title: [
          {
            text: this.title,
            textStyle: {
              color: defaultFontColor,
              lineHeight: 5,
              fontSize: defaultFontSize - 2,
              fontWeight: defaultFontWeight
            },
            x: "45%",
            y: "85%",
            textAlign: "center"
          }
        ],
        series: [
          {
            type: "pie",
            radius: ["0%", "80%"],

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
                  color: "#001428"
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
          },
          {
            type: "pie",
            radius: ["0%", "60%"],

            itemStyle: {
              borderColor: "#001428"
            },

            data: [
              {
                name: "aim",
                value: (this.aimConditionNumber / this.conditionNumber) * 100,
                itemStyle: {
                  color: "#001428"
                }
              }
            ],
            label: {
              show: false
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

<style lang="less">
@import "~@/assets/css/variable";
.chartContainer:hover {
  border-bottom: @themeColorLight 3px solid;
  border-image: linear-gradient(
      to right; #00000002 0%,
      @themeColorLight 50%,
      #00000002 100%
    )
    1 10;
  cursor: pointer;
}
</style>

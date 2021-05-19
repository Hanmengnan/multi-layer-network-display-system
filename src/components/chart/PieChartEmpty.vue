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
          radius: ["60%", "80%"]
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
      chart: null,
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
                value: this.percent(
                  this.aimConditionNumber,
                  this.conditionNumber
                ),
                itemStyle: {
                  color: this.themeColor
                }
              },
              {
                name: "other",
                value:
                  100 -
                  this.percent(this.aimConditionNumber, this.conditionNumber),
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
  methods: {
    percent: function(aim, total) {
      return (aim / total) * 100;
    },
    updateChart: function() {
      this.options.series[0].data[0].value = this.percent(
        this.aimConditionNumber,
        this.conditionNumber
      );
      this.options.series[0].data[1].value =
        100 - this.percent(this.aimConditionNumber, this.conditionNumber);
      this.chart.setOption(this.options);
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chartContainer);
    this.chart.setOption(this.options);
  },
  watch: {
    aimConditionNumber() {
      this.updateChart();
    },
    conditionNumber() {
      this.updateChart();
    }
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

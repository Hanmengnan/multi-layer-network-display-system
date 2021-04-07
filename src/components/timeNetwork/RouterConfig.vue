<template>
  <div id="router-config">
    <div class="selector">
      <div class="start">
        <SelectDown
          :title="start === '' ? '起点选择' : `起点: ${start}`"
          v-model="start"
          :selectList="['北京', '天津', '天津']"
        />
      </div>
      <div class="end">
        <SelectDown
          :title="end === '' ? '终点选择' : `终点: ${end}`"
          v-model="end"
          :selectList="['杭州']"
          v-show="start !== ''"
        />
      </div>
      <div class="router">
        <SelectDown
          :title="pathId === '' ? '路径选择' : pathId"
          v-model="pathId"
          :selectList="['路径1', '路径2']"
          v-show="end !== ''"
        />
      </div>
    </div>
    <div id="topography"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import SelectDown from "@/components/base/SelectDown";

export default {
  name: "Topography",
  components: {
    SelectDown
  },
  data() {
    return {
      start: "北京",
      end: "杭州",
      pathId: "路径1"
    };
  },
  methods: {
    draw() {
      const myChart = echarts.init(document.getElementById("topography"));
      const option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            width: "60%",
            height: "65%",
            symbolSize: 50,
            roam: false,
            label: {
              show: true
            },
            edgeSymbol: ["circle"],
            edgeSymbolSize: [4, 10],
            data: [
              {
                name: "武汉",
                x: 300,
                y: 300
              },
              {
                name: "上海",
                x: 800,
                y: 300
              },
              {
                name: "北京",
                x: 550,
                y: 100
              },
              {
                name: "南京",
                x: 400,
                y: 500
              },
              {
                name: "杭州",
                x: 650,
                y: 530
              }
            ],
            links: [
              {
                source: "北京",
                target: "武汉",
                label: {
                  show: false
                },
                lineStyle: {
                  curveness: 0,
                  width: 4,
                  color: this.pathId === "路径2" ? "#005f00" : "grey"
                }
              },
              {
                source: "武汉",
                target: "南京",
                lineStyle: {
                  color: this.pathId === "路径2" ? "#005f00" : "grey",
                  width: 4
                }
              },
              {
                source: "杭州",
                target: "南京",
                lineStyle: {
                  color: this.pathId === "路径2" ? "#005f00" : "grey",
                  width: 4
                }
              },
              {
                source: "杭州",
                target: "上海",
                lineStyle: {
                  color: this.pathId === "路径1" ? "#005f00" : "grey",
                  width: 4
                }
              },
              {
                source: "北京",
                target: "上海",
                lineStyle: {
                  color: this.pathId === "路径1" ? "#005f00" : "grey",
                  width: 4
                }
              }
            ],
            lineStyle: {
              opacity: 1,
              width: 2,
              curveness: 0
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.draw();
  },
  watch: {
    pathId() {
      this.draw();
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
@import "~@/assets/css/common.less";

#router-config {
  .mixin-width-height();
  .mixin-flex(@flex-direction: column);

  .selector {
    .mixin-flex(@justify-content: space-around);
    .mixin-width-height(@height: 10%);
    z-index: 5;
    .start {
      .mixin-width-height(@height: auto);
      .defaultFontStyle();
      position: relative;
    }
    .end {
      .mixin-width-height(@height: auto);
      .defaultFontStyle();
      position: relative;
    }
    .router {
      .mixin-width-height(@height: auto);
      .defaultFontStyle();
      position: relative;
    }
  }
  #topography {
    z-index: 2;
    .mixin-width-height(@height: 90%);
  }
}
</style>

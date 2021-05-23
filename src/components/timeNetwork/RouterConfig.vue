<template>
  <div id="router-config">
    <div class="selector">
      <div class="start">
        <SelectDown
          :title="start === '' ? '起点选择' : `起点: ${start}`"
          v-model="start"
          :selectList="nodeList"
        />
      </div>
      <div class="end">
        <SelectDown
          :title="end === '' ? '终点选择' : `终点: ${end}`"
          v-model="end"
          :selectList="nodeList"
          v-show="start !== ''"
        />
      </div>
      <div class="router">
        <div
          style="display: inline"
          v-show="show"
          @click="queryFunc({ start, end })"
        >
          路径
        </div>
        <SelectDown
          :title="'路径' + pathId"
          v-model="pathId"
          :selectList="routes"
          v-show="!show"
        />
      </div>
    </div>
    <div class="" id="topography"></div>
  </div>
</template>

<script>
import { themeColor5 } from "@/assets/js/variable";
import echarts from "echarts";
import SelectDown from "@/components/base/SelectDown";

export default {
  name: "Topography",
  components: {
    SelectDown
  },
  props: {
    nodeList: {
      type: Array,
      required: true
    },
    stationList: {
      type: Array,
      require: false,
      default: () => []
    },
    routeList: {
      type: Array,
      require: false,
      default: () => []
    },
    queryFunc: {
      type: Function,
      required: false,
      default: () => function() {}
    }
  },
  data() {
    return {
      show: true,
      start: "未选择",
      end: "未选择",
      pathId: "未选择",
      station: [],
      routes: [],
      option: {}
    };
  },
  computed: {},
  methods: {
    routeSet: function() {
      let tmp = [];
      this.routeList.forEach(item => {
        item.forEach(link => {
          if (
            !tmp.some(i => {
              return (
                (link.source === i.source && link.target === i.target) ||
                (link.target === i.source && link.source === i.target)
              );
            })
          ) {
            tmp.push({
              lineStyle: {
                color: "grey",
                width: 4
              },
              source: link.source,
              target: link.target
            });
          }
        });
      });
      return tmp;
    },
    routeOption() {
      let res = this.routeSet();
      this.routeList.forEach((route, index) => {
        if ((index + 1).toString() === this.pathId) {
          route.forEach(item => {
            res.forEach((old, index) => {
              if (
                (item.source === old.source && item.target === old.target) ||
                (item.target === old.source && item.source === old.target)
              ) {
                res[index].lineStyle.color = themeColor5;
              }
            });
          });
        }
      });
      return res;
    },
    draw() {
      this.option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              edgeLength: 70,
              layoutAnimation: true,
              gravity: 0.1,
              repulsion: 200
            },
            symbolSize: 30,
            draggable: true,
            roam: false,
            label: {
              show: true
            },
            edgeSymbol: ["circle"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            data: this.stationList.map(item => {
              return { name: item };
            }),
            links: this.routeOption(),
            lineStyle: {
              opacity: 1,
              width: 2,
              curveness: 0
            }
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("topography"));
      myChart.setOption(this.option);
    }
  },
  mounted() {
    this.draw();
  },
  watch: {
    start() {
      this.show = true;
    },
    end() {
      this.show = true;
    },
    pathId() {
      this.draw();
    },
    routeList: {
      deep: true,
      handler: function() {
        this.routes = this.routeList.map((item, index) => {
          return { name: "路径" + (index + 1), id: index + 1 };
        });
        this.show = false;
      }
    },
    stationList: {
      deep: true,
      handler: function() {
        this.draw();
      }
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
    .mixin-width-height(@height: 90%);
  }
}
</style>

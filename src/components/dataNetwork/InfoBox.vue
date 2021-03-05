<template>
  <div class="container">
    <div class="container" v-if="switchState">
      <div class="header">
        <div class="border-left"></div>
        <div class="border-right"></div>
        <div class="header-title">链路负载情况</div>
        <div class="icon-display">
          <div class="iconfont" style="margin: 0 2px 0 2px">&#xe663;</div>
          <div>降序</div>
          <div class="iconfont" style="margin: 0 2px 0 2px">&#xe62b;</div>
          <div class="iconfont" style="margin: 0 2px 0 2px">&#xe62b;</div>
        </div>
      </div>
      <div style="width: 100%;height: 40%">
        <bar-chart
          :stack="true"
          :direction="true"
          :chart-name="nodeLinkLoad.chartName"
          :char-data="nodeLinkLoad.chartData"
          :char-axis-data="nodeLinkLoad.charAxisData"
          :tooltip="nodeLinkLoad.chartSetting.tooltip"
          :x-axis-pointer="nodeLinkLoad.chartSetting.xAxisPointer"
        ></bar-chart>
      </div>
      <div class="header">
        <div class="border-left"></div>
        <div class="border-right"></div>
        <div class="header-title">报文来源地信息</div>
        <div class="icon-display">
          <div class="iconfont" style="margin: 0 2px 0 2px">&#xe62a;</div>
          <div style="margin: 0 2px 0 2px">2020-9</div>
          <div class="iconfont" style="margin: 0 2px 0 2px">&#xe663;</div>
          <div style="margin: 0 2px 0 2px">降序</div>
          <div class="iconfont" style="margin: 0 2px 0 2px">&#xe62b;</div>
        </div>
      </div>
      <div style="width: 100%;height: 40%">
        <bar-chart
          :stack="true"
          :direction="false"
          :chart-name="messageSource.chartName"
          :char-data="messageSource.chartData"
          :char-axis-data="messageSource.charAxisData"
        ></bar-chart>
      </div>
    </div>
    <div class="container" v-if="!switchState">
      <div class="link-name-area">
        <div v-text="linkInfo.start"></div>
        <div class="iconfont">&#xe602;</div>
        <div v-text="linkInfo.end"></div>
      </div>
      <div class="link-info-area">
        <div
          v-for="(item, index) in linkInfo.infoData"
          :key="index"
          class="info-card"
          :class="[
            { 'info-card-1': index % 2 !== 0 },
            { 'info-card-2': index > 1 }
          ]"
        >
          <div>
            {{ item.title }}
          </div>
          <div class="info-num">
            {{ item.num }}
            <span v-if="index === 1">Gbps</span>
            <span v-if="index === 2">ms</span>
            <span v-if="index === 3">%</span>
          </div>
        </div>
      </div>
      <div class="line-chart-area">
        <line-chart
          :char-axis-data="linkInfo.charAxisData"
          :char-data="linkInfo.chartData"
          :chart-name="linkInfo.chartName"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/chart/BarChart";
import LineChart from "@/components/chart/LineChart";
export default {
  name: "InfoBox",
  props: {
    switchState: {
      type: Boolean,
      required: true
    }
  },
  components: {
    LineChart,
    BarChart
  },
  data() {
    return {
      linkInfo: {
        chartSetting: {},
        start: "北京",
        end: "石家庄",
        infoData: [
          { title: "运行状态", num: "正常" },
          { title: "带宽", num: 100 },
          { title: "时延", num: 10 },
          { title: "丢包率", num: 1.2 }
        ],
        charAxisData: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24"
        ],
        chartData: [
          [
            1.2,
            2.2,
            1.9,
            2.3,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            1.9,
            2.3,
            1.34
          ],
          [
            12.0,
            21.0,
            32.9,
            33.3,
            24.3,
            16.0,
            29.9,
            32.3,
            24.3,
            15.0,
            25.9,
            35.3,
            22.3,
            16.0,
            25.9,
            36.3,
            22.3,
            17.0,
            27.9,
            13.3,
            22.3,
            15.0,
            12.9,
            23.3,
            12.3
          ]
        ],
        chartName: ["丢包率", "利用率"]
      },
      nodeLinkLoad: {
        charAxisData: [
          "北京-沈阳",
          "北京-呼和浩特",
          "北京-石家庄",
          "北京-太原",
          "北京-济南"
        ],
        chartData: [
          [11, 21, 23, 14, 21, 12],
          [11, 12, 13, 14, 12, 12]
        ],
        chartName: ["信息报文", "普通预警", "橙色预警"],
        chartSetting: {
          tooltip: {
            trigger: "item"
          },
          xAxisPointer: {
            show: false,
            type: "none"
          }
        }
      },
      messageSource: {
        charAxisData: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        chartData: [
          [
            11,
            21,
            23,
            14,
            21,
            12,
            14,
            42,
            21,
            15,
            12,
            12,
            13,
            14,
            12,
            23,
            15,
            32,
            13,
            21,
            23,
            24,
            23,
            14,
            14,
            31,
            21,
            28,
            24,
            11
          ],
          [
            11,
            12,
            13,
            14,
            12,
            12,
            14,
            14,
            21,
            15,
            12,
            12,
            13,
            24,
            14,
            23,
            15,
            12,
            13,
            12,
            23,
            21,
            32,
            42,
            14,
            12,
            22,
            18,
            23,
            11
          ],
          [
            1,
            2,
            3,
            4,
            2,
            2,
            4,
            4,
            21,
            5,
            12,
            2,
            3,
            4,
            1,
            23,
            5,
            2,
            3,
            2,
            23,
            2,
            3,
            4,
            1,
            1,
            2,
            8,
            2,
            11
          ]
        ],
        chartName: ["信息报文", "普通预警", "橙色预警"]
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
@import "~@/assets/css/variable";
.container {
  .mixin-width-height();
  .mixin-flex(@flex-direction: column);
  .header {
    .mixin-flex();
    position: relative;
    width: 100%;
    height: 4vh;
    background-color: rgba(0, 0, 0, 0.2);
    .header-title {
      margin-left: 40px;
      font-size: @defaultFontSize*1.3;
      color: @defaultFontColor;
    }
    .icon-display {
      .mixin-flex();
      color: white;
    }
    .border-left {
      position: absolute;
      top: 0;
      left: 0;
      border: 8px solid transparent;
      border-left: @themeColor3 solid 8px;
      border-top: @themeColor3 solid 8px;
    }
    .border-right {
      position: absolute;
      top: 0;
      right: 0;
      height: 3vh;
      border-left: 2vh solid @themeColor1;
      border-bottom: 1vh solid transparent;
    }
  }
  .link-name-area {
    .mixin-width-height(@height: 10%);
    .mixin-flex(@justify-content: space-around);
    box-sizing: border-box;
    font-size: @titleFontSize;
    color: @defaultFontColor;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .link-info-area {
    .mixin-width-height(@height: 30%);
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    .info-card {
      .mixin-flex(@flex-direction: column, @justify-content: space-around);
      border: @themeColor1 solid 2px;
      border-left-style: none;
      font-size: @defaultFontSize;
      color: @defaultFontColor;
      .info-num {
        font-size: @titleFontSize;
      }
    }
    .info-card-1 {
      border-right-style: none;
    }
    .info-card-2 {
      border-top-style: none;
    }
  }
  .line-chart-area {
    .mixin-width-height(@height: 60%);
    box-sizing: border-box;
    margin-top: 10px;
  }
}
</style>

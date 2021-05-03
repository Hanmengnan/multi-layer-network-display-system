<template>
  <div class="container">
    <component-box title-name="节点基本信息">
      <template slot="body">
        <div class="basic-info">
          <div
            v-for="(item, index) in nodeInfo.basicInfo"
            :key="index"
            class="info-card"
            :class="[
              { 'info-card-1': index % 2 !== 0 },
              { 'info-card-2': index > 1 }
            ]"
          >
            <div class="info-num">{{ item.title }}</div>
            <div class="info-num">{{ item.value }}</div>
          </div>
        </div>
      </template>
    </component-box>
    <component-box title-name="节点相关链路情况">
      <template slot="body">
        <bar-chart
          :stack="true"
          :direction="true"
          :chart-name="nodeInfo.link.chartName"
          :chart-data="nodeInfo.link.chartData"
          :chart-axis-data="nodeInfo.link.chartAxisData"
          :tooltip="chartSetting.tooltip"
          :x-axis-pointer="chartSetting.xAxisPointer"
        ></bar-chart>
      </template>
    </component-box>
    <component-box title-name="节点接收报文情况">
      <template slot="body">
        <bar-chart
          :stack="true"
          :direction="false"
          :chart-name="nodeInfo.date.chartName"
          :chart-data="nodeInfo.date.chartData"
          :chart-axis-data="nodeInfo.date.chartAxisData"
        ></bar-chart>
      </template>
    </component-box>
    <component-box title-name="报文来源地理信息统计">
      <template slot="body">
        <message-statistic :statisticData="nodeInfo.origin"></message-statistic>
      </template>
    </component-box>
    <div class="iconfont back-btn" @click="clickEvent">&#xe6fc;</div>
  </div>
</template>

<script>
import ComponentBox from "../base/ComponentBox";
import BarChart from "../chart/BarChart";
import MessageStatistic from "@/components/dataNetwork/MessageStatistic";

export default {
  name: "NodeInfo",
  props: {
    clickEvent: {
      type: Function,
      required: true,
      default: () => {}
    },
    nodeInfo: {
      type: Object,
      required: true
    }
  },
  components: {
    MessageStatistic,
    ComponentBox,
    BarChart
  },
  data() {
    return {
      chartSetting: {
        tooltip: {
          trigger: "item"
        },
        xAxisPointer: {
          show: false,
          type: "none"
        }
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

  .basic-info {
    .mixin-width-height(@height: 95%);
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    padding: 10px;
    font-size: @defaultFontSize;
    color: @defaultFontColor;

    .info-card {
      .mixin-flex(@flex-direction: column, @justify-content: space-around);
      border: @themeColor1 solid 2px;
      border-left-style: none;

      .info-num {
        font-size: @defaultFontSize;
      }
    }

    .info-card-1 {
      border-right-style: none;
    }

    .info-card-2 {
      border-top-style: none;
    }
  }

  .back-btn {
    width: 100%;
    font-size: @titleFontSize;
    font-weight: @titleFontWeight;
    color: @defaultFontColor;
    background-color: @backgroundColor;
  }
}
</style>

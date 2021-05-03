<template>
  <div class="container">
    <component-box style="flex: 2" title-name="链路状态">
      <template slot="body">
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
              <span v-if="index === 2">ns</span>
              <span v-if="index === 3">%</span>
            </div>
          </div>
        </div>
        <div class="line-chart-area">
          <line-chart
            :char-axis-data="linkInfo.charAxisData || []"
            :char-data="linkInfo.chartData || []"
            :chart-name="linkInfo.chartName || []"
            legend
          ></line-chart>
        </div>
      </template>
    </component-box>
    <component-box style="flex: 1" title-name="报文来源地理信息统计">
      <template slot="body">
        <message-statistic
          :statisticData="linkInfo.originStatistics"
        ></message-statistic>
      </template>
    </component-box>
    <div class="iconfont back-btn" @click="clickEvent">&#xe6fc;</div>
  </div>
</template>

<script>
import ComponentBox from "../base/ComponentBox";
import LineChart from "../chart/LineChart";
import MessageStatistic from "@/components/dataNetwork/MessageStatistic";

export default {
  name: "LinkInfo",
  props: {
    clickEvent: {
      type: Function,
      require: true,
      default: () => {}
    },
    linkInfo: {
      type: Object,
      required: true
    }
  },
  components: {
    ComponentBox,
    LineChart,
    MessageStatistic
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
@import "~@/assets/css/variable";

.container {
  .mixin-width-height();
  .mixin-flex(@flex-direction: column);

  .link-name-area {
    .mixin-width-height(@height: 10%);
    .mixin-flex(@justify-content: space-around);
    box-sizing: border-box;
    font-size: @titleFontSize;
    font-weight: @defaultFontWeight;
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
    .mixin-width-height(@height: 65%);
    box-sizing: border-box;
    margin-top: 10px;
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

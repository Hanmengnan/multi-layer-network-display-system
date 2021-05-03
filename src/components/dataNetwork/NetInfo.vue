<template>
  <div class="container">
    <div class="bandwidth-info">
      <div class="num-area">
        <div class="title">当前利用带宽</div>
        <div class="num">
          <div class="used">{{ netInfo.bandUsed || "" }}</div>
          <div style="margin:0 10px 0 10px;">/</div>
          <div class="total">{{ netInfo.bandTotal || "" }}</div>
        </div>
      </div>
      <div class="chart-area">
        <pie-chart-empty
          title="带宽利用率"
          :aim-condition-number="netInfo.bandUsed || 0"
          :condition-number="netInfo.bandTotal || 0"
          :char-setting="chartSetting"
        ></pie-chart-empty>
      </div>
    </div>
    <div class="other-info">
      <div
        v-for="(item, index) in netInfo.parameter || []"
        :key="index"
        class="info-card"
        :class="[
          { 'info-card-1': index % 2 !== 0 },
          { 'info-card-2': index > 1 }
        ]"
      >
        <div class="info-title">{{ item.title }}</div>
        <div class="info-num">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChartEmpty from "../chart/PieChartEmpty";
export default {
  name: "NetInfo",
  components: {
    PieChartEmpty
  },
  props: {
    netInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartSetting: {
        legendShow: false,
        titleShow: false,
        radius: ["70%", "90%"]
      }
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
@import "~@/assets/css/variable";
.bandwidth-info {
  .mixin-flex();
  .mixin-width-height(@height: 30%);
  box-sizing: border-box;
  padding: 0 10px 0 10px;

  .num-area {
    .mixin-flex(
      @flex-direction: column,
      @justify-content: space-around,
      @align-items: flex-start
    );
    .mixin-width-height(@width: 60%);
    font-size: @defaultFontSize;
    color: @defaultFontColor;
    font-weight: @defaultFontWeight;

    .title {
      padding: 2px;
      border-left: solid 4px @themeColor1;
    }

    .num {
      .mixin-flex(@justify-content: space-around);
      font-size: @titleFontSize*1.5;

      .used {
        color: @themeColor3;
      }

      .total {
        color: @themeColor1;
      }
    }
  }

  .chart-area {
    .mixin-width-height(@width: 40%);
  }
}

.other-info {
  .mixin-width-height(@height: 65%);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  padding: 5px;

  .info-card {
    .mixin-flex(@flex-direction: column, @justify-content: space-around);
    border: @defaultFontColor solid 2px;
    border-left-style: none;
    font-size: @defaultFontSize*1.2;
    color: @defaultFontColor;

    .info-title {
      font-size: @defaultFontSize;
      font-weight: @defaultFontWeight;
    }
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
</style>

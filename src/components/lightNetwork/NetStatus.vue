<template>
  <div class="main-area">
    <div class="card-area">
      <div class="card" v-for="card in cards" :key="card.name">
        <div class="title">{{ card.name }}</div>
        <div :class="`iconfont ${card.className}`">{{ card.iconCode }}</div>
        <div class="text">
          <span class="value">{{ card.value }}</span>
          <span class="status">{{ card.status }}</span>
          <span class="bfb">{{ card.baifenbi }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lightNetwork-NetStatus",
  data() {
    return {
      cards: [
        {
          name: "业务上下站",
          iconCode: "\ue95c",
          value: 40,
          status: "状态正常",
          baifenbi: "100%",
          className: "bussiness"
        },
        {
          name: "电中继站",
          iconCode: "\ue612",
          value: 40,
          status: "状态正常",
          baifenbi: "100%",
          className: "elc"
        },
        {
          name: "光中继站",
          iconCode: "\ue612",
          value: 40,
          status: "状态正常",
          baifenbi: "100%",
          className: "light"
        },
        {
          name: "故障节点",
          iconCode: "\ue730",
          value: 0,
          status: "状态正常",
          baifenbi: "0%",
          className: "error"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
@import "~@/assets/css/mixin/base";
.main-area {
  .mixin-flex(@flex-direction: column, @justify-content: center);
  .mixin-width-height();
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @titleFontWeight;

  .card-area {
    .mixin-flex();
    .mixin-width-height(@height: 80%);
    position: relative;
    font-weight: @defaultFontWeight;

    .card {
      .mixin-flex(@flex-direction: column);
      height: 100%;
      margin: 5px;
      justify-content: space-between;
      padding: 20px 5px;

      .title {
        font-size: @defaultFontSize*1.1;
      }

      .text {
        display: flex;
        flex-direction: column;
        font-size: @defaultFontSize;

        .value {
          color: green;
        }

        .bfb,
        .status {
          color: @themeColor1;
        }
      }

      .iconfont {
        font-size: @titleFontSize;

        &.bussiness {
          color: @themeColor1;
        }

        &.elc {
          color: @themeColor3;
        }

        &.light {
          color: @themeColor4;
        }

        &.error {
          color: @themeColor10;
        }
      }
    }
  }
}
</style>

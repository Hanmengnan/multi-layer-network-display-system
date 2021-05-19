<template>
  <div class="link-status">
    <div class="node start">
      <div class="iconfont location">&#xe9d8;</div>
      <div class="iconfont city">&#xe9d7;</div>
      <div>
        <div class="node-name">{{ linkInfo.startName }}</div>
        <div class="node-type">{{ linkInfo.startType }}</div>
      </div>
    </div>
    <div class="link">
      <div>{{ linkInfo.linkType }}</div>
      <div class="iconfont error" v-if="linkInfo.linkStatus === '阻塞'">
        &#xe647;
      </div>
      <div class="iconfont work" v-else>
        &#xe728;
      </div>
      <div>
        <div>
          <span class="value">{{ linkInfo.linkNum }}</span
          >个
        </div>
        <div>状态{{ linkInfo.linkStatus }}</div>
      </div>
    </div>
    <div class="node end">
      <div class="iconfont location">&#xe9d8;</div>
      <div class="iconfont city">&#xe9d7;</div>
      <div>
        <div class="node-name">{{ linkInfo.endName }}</div>
        <div class="node-type">{{ linkInfo.endType }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "link-status",
  props: {
    linkInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
@import "~@/assets/css/mixin/base";

.link-status {
  .mixin-flex();
  .mixin-width-height();
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;

  .link {
    .mixin-flex(@flex-direction: column, @justify-content: center);
    flex: 1;

    & > div {
      margin-bottom: 10px;
    }

    .iconfont {
      font-size: @titleFontSize*1.5;
      font-weight: @titleFontWeight;

      &.work {
        color: @themeColor5;
      }

      &.error {
        color: @themeColor10;
      }
    }
  }

  .node {
    .mixin-flex(@flex-direction: column, @justify-content: center);
    flex: 1;

    .iconfont {
      color: @themeColor1;
      font-size: @titleFontSize*2;
      font-weight: @titleFontWeight;

      &.city {
        color: @themeColor1;
        margin-bottom: 10px;
      }

      &.location {
        color: @themeColor8;
      }
    }

    .node-name {
      color: @themeColor10;
      font-size: @titleFontSize*0.8;
      font-weight: @titleFontWeight;
    }

    .node-type {
      font-weight: @titleFontWeight;
    }
  }
}
</style>

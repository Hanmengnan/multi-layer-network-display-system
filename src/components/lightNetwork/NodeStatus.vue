<template>
  <div class="node-status">
    <div class="left">
      <div class="iconfont location">&#xe9d8;</div>
      <div class="iconfont city">&#xe9d7;</div>
      <div class="city-name">{{ this.nodeCity }}</div>
      <div>业务上下站</div>
    </div>
    <div class="right">
      <div class="node-status-data">
        <div
          v-for="(detailItem, detailIndex) in nodeDetailData"
          :key="detailIndex"
        >
          <span v-text="detailItem.label + ':  '"> </span>
          <span
            :class="{ 'node-level': detailItem.label === '等级' }"
            v-text="detailItem.data"
          ></span>
        </div>
      </div>
      <div class="node-contact-data">
        <div
          v-for="(contactItem, contactIndex) in nodeContactData"
          :key="contactIndex"
        >
          <span v-text="contactItem.label + ':  ' + contactItem.data"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NodeStatus",
  props: {
    nodeCity: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // nodeCity: "北京",
      nodeDetailData: [
        {
          label: "等级",
          data: "Ⅰ级"
        },
        {
          label: "守时时钟",
          data: "13:57:48:145"
        },
        {
          label: "节点出/入度",
          data: "4"
        },
        {
          label: "色散补偿",
          data: "xyz-a"
        },
        {
          label: "核心路由器",
          data: "rexx"
        }
      ],
      nodeContactData: [
        {
          label: "节点运维负责人",
          data: "张三"
        },
        {
          label: "节点联系方式",
          data: "010-29292902"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
@import "~@/assets/css/mixin/base";

.node-status {
  .mixin-flex();
  .mixin-width-height();
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @titleFontWeight;

  .left {
    .mixin-flex(@flex-direction: column);
    .mixin-width-height(@width: 35%, @height: 80%);

    .iconfont {
      font-size: @titleFontSize*1.5;

      &.city {
        color: @themeColor1;
        margin-bottom: 10px;
      }

      &.location {
        color: @themeColor8;
      }
    }

    .city-name {
      color: @themeColor8;
      margin-bottom: 10px;
    }
  }

  .right {
    .mixin-flex(@flex-direction: column);
    .mixin-width-height(@width: 55%, @height: 80%);

    .node-status-data {
      .mixin-flex(@flex-direction: column, @align-items: flex-start);
      .mixin-width-height(@height: 65%);

      .node-level {
        font-size: @titleFontSize;
        color: @themeColor5;
      }
    }

    .node-contact-data {
      .mixin-flex(@flex-direction: column, @align-items: flex-start);
      .mixin-width-height(@height: 20%);
    }

    .content {
      font-size: @defaultFontSize*1.3;
    }
  }
}
</style>

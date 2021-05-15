<template>
  <div class="error-alarm">
    <div class="table-header">
      <div>&nbsp;</div>
      <div>链路名称</div>
      <div>预警状态</div>
      <div>&nbsp;</div>
    </div>
    <div class="table-body" v-for="(item, index) in errorList" :key="index">
      <div>{{ index + 1 }}</div>
      <div
        :class="[
          { 'orange-alarm': item.type === 'busy' },
          { 'red-alarm': item.type === 'error' }
        ]"
      >
        {{ `${item.node1Name}-${item.node2Name}` }}
      </div>
      <div>
        {{
          item.type === "busy"
            ? "繁忙"
            : item.type === "error"
            ? "拥塞"
            : "正常"
        }}
      </div>
      <div @click="linkDetailShow" style="cursor: pointer;">详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorAlarm",
  props: {
    errorList: {
      type: Array,
      required: true
    },
    linkDetailShow: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";

.error-alarm {
  width: 99%;
  height: 99%;
  overflow: scroll;
  background: rgba(12, 71, 210, 0.2);

  .table-header,
  .table-body {
    display: grid;
    grid-template-columns: 10% 50% 30% 10%;
    justify-items: center;
  }

  .table-header {
    width: 100%;
    height: 12%;
    font-size: @defaultFontSize*1.2;
    color: @defaultFontColor;
    border-bottom: 2px solid @themeColor3;
    margin-bottom: 3%;
  }

  .table-body {
    width: 100%;
    height: 12%;
    font-size: @defaultFontSize;
    color: @defaultFontColor;
    border-bottom: 2px solid white;
    margin-bottom: 3%;

    .orange-alarm {
      color: #ca8622;
    }

    .red-alarm {
      color: #ef1763;
    }
  }
}
</style>

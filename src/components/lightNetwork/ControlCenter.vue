<template>
  <div class="control-center">
    <div class="screen">
      <div class="dialog node">
        <div class="text">XXXXX-YYYYY-ZZZ-AAA</div>
      </div>
      <div class="dialog center">
        <div class="text">启用AAA-CCC</div>
      </div>
    </div>
    <div class="instruction-area"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";

.control-center {
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;
  display: flex;
  flex-direction: column;
  height: 100%;

  .screen {
    flex: 3;
    overflow: scroll;
    display: flex;
    flex-direction: column;

    .dialog {
      display: flex;
      align-items: center;
      margin: 5px 0;

      .text {
        padding: 5px 10px;
        background-color: @themeColor1;
        border-radius: 20px;
      }
    }

    .center {
      justify-content: flex-end;
    }

    .center::after {
      content: "控制中心";
      display: inline-block;
      background-color: @borderColor;
      border-radius: 20px;
      padding: 5px 5px;
      margin-left: 10px;
      font-weight: @titleFontWeight;
    }

    .node {
      justify-content: flex-start;
    }

    .node::before {
      content: "节点";
      display: inline-block;
      background-color: @borderColor;
      border-radius: 20px;
      padding: 5px 5px;
      margin-right: 10px;
      font-weight: @titleFontWeight;
    }
  }

  .instruction-area {
    background-color: fade(@borderColor, 50%);
    flex: 1;
  }
}
</style>

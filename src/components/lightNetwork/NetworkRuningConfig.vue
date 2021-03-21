<template>
  <div class="main-area">
    <div v-for="setting in settings" :key="setting.name" class="setting">
      <div class="iconfont" style="margin-left: 15px;">&#xe7dc;</div>
      <div class="text">{{ setting.name }}</div>
      <div class="input-area">
        <label>
          <input type="text" v-model="setting.start" class="input" />
        </label>
        ~
        <label>
          <input type="text" v-model="setting.end" class="input" />
        </label>
      </div>
    </div>
    <div class="apply">
      <button class="btn">应用</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "network-runing-config",
  data() {
    return {
      settings: [
        {
          name: "时频信号传输波段",
          start: "MD01",
          end: "MD02"
        },
        {
          name: "数据信号传输波段",
          start: "MD03",
          end: "MD08"
        },
        {
          name: "应急预留光纤波段",
          start: "MD09",
          end: "MD18"
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
  .mixin-flex(@flex-direction: column);
  .mixin-width-height();
}

.setting {
  .mixin-flex();
  flex: 1;
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @titleFontWeight;

  .text {
    flex: 1;
  }

  .input-area {
    flex: 1;

    .input {
      width: 30%;
      color: white;
      background-color: @themeColor9;
      outline: 0;
      font-size: 2px;
      font-weight: @defaultFontWeight;
      vertical-align: middle;
      text-align: center;
      border: 2px solid @themeColor1;
      cursor: pointer;
    }

    .input:hover {
      font-weight: @titleFontWeight;
    }
  }
}

.apply {
  .mixin-flex(@justify-content: center);
  flex: 1;
  width: 100%;

  .btn {
    .mixin-width-height(@width: 25%, @height: 50%);
    color: white;
    background-color: @backgroundColor;
    font-weight: @defaultFontWeight;
    font-size: @defaultFontSize;
    outline: 0;
    cursor: pointer;
    border: 2px @themeColor1 solid;
    border-radius: 5px;
  }

  .btn:active {
    font-size: @defaultFontSize*1.2;
  }
}
</style>

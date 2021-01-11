<template>
  <div class="system-info">
    <div class="info-background">
      <div class="info-area">
        <div
          class="info-item"
          v-for="(item, index) in systemInfoList"
          :key="index"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div>
    <div class="info-background">
      <div class="state-area">
        <div
          class="state-item"
          v-for="(item, index) in stateInfoList"
          :key="index"
        >
          <span>{{ item.name }}</span>
          <div
            :class="`iconfont status ${item.status}`"
            v-html="statusIcon(item.status)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemInfo",
  props: {
    systemInfoList: {
      type: Array,
      required: true
    },
    stateInfoList: {
      type: Array,
      required: true
    }
  },
  methods: {
    statusIcon(status) {
      switch (status) {
        case "health":
          return "&#xe72e;";
        case "wrong":
          return "&#xe730;";
        case "error":
          return "&#xe72f;";
        default:
          return "&#xe731;";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";
.system-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85%;
  color: @defaultFontColor;
  .info-background {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
    background: rgba(255, 255, 255, 0.1);
  }
  .info-area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    .info-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  .state-area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    .state-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .health {
        color: #1ae76c;
      }

      .wrong {
        color: #f3b906;
      }

      .error {
        color: #e71229;
      }

      .unknow {
        color: grey;
      }
    }
  }
}
</style>

<template>
  <div class="container" ref="container">
    <div class="scrollContent" ref="scrollContent">
      <div
        v-for="(val, idx) in message"
        :key="`${val}/${idx}`"
        class="scrollItem"
      >
        <span v-if="val.city"
          >{{ val.msg.split(val.city)[0]
          }}<em :style="`color: ${coutColor(val.status)}`">{{ val.city }} </em
          >{{ val.msg.split(val.city)[1] }}</span
        >
        <span v-else>{{ val.msg }}</span>
      </div>
    </div>
  </div>
</template>

<script>
let timer;
import {
  themeColor3,
  themeColor5,
  themeColor8,
  themeColor9
} from "@/assets/js/variable";

export default {
  name: "message-box",
  props: {
    message: {
      type: Array,
      default: () => {
        return [
          {
            msg: "暂无新消息"
          }
        ];
      }
    }
  },
  methods: {
    coutColor(status) {
      switch (status) {
        case "正常":
          return themeColor5;
        case "拥塞":
          return themeColor8;
        case "繁忙":
          return themeColor3;
        default:
          return themeColor9;
      }
    }
  },
  mounted() {
    let bias = 0;
    const innerHeight = this.$refs.scrollContent.offsetHeight;
    const outterHeight = this.$refs.container.offsetHeight;
    const width = 3;
    timer = setInterval(() => {
      if (bias <= innerHeight - outterHeight + width) bias += width;
      else bias = 0;
      this.$refs.scrollContent.style.top = `-${bias}px`;
    }, 200);
  },
  beforeDestroy() {
    clearInterval(timer);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";

.container {
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;
  overflow-y: hidden;
  height: 80%;
  margin: 20px;
  .scrollContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    transition: top 0.3s;
    .scrollItem {
      overflow: visible;
      margin-top: 20px;
    }
  }
}
</style>

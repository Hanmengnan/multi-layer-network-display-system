<template>
  <div class="container" ref="container">
    <div class="scrollContent" ref="scrollContent">
      <div
        v-for="(val, idx) in message"
        :key="`${val}/${idx}`"
        class="scrollItem"
      >
        <span>
          <span
            :style="`color: ${coutColor(val.state)}`"
            @mouseenter="changeForce(val.city)"
            @mouseleave="changeForce('')"
            >{{ val.name }} </span
          >节点系统
          <span :style="`color: ${coutColor(val.state)}`">{{ val.state }}</span>
        </span>
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
  themeColor10
} from "@/assets/js/variable";

export default {
  name: "message-box",
  props: {
    nodeList: {
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
  computed: {
    message() {
      return this.nodeList.map(val => {
        return {
          msg: `${val.name}节点系统${val.state}`,
          city: val.city,
          name: val.name,
          state: val.state
        };
      });
    }
  },
  methods: {
    changeForce(name) {
      this.$store.commit("changeForce", name);
    },
    coutColor(state) {
      switch (state) {
        case "正常":
          return themeColor5;
        case "拥塞":
          return themeColor8;
        case "繁忙":
          return themeColor3;
        default:
          return themeColor10;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      let bias = 0;
      const innerHeight = this.$refs.scrollContent.offsetHeight;
      const outterHeight = this.$refs.container.offsetHeight;
      const width = 3;

      timer = setInterval(() => {
        if (bias <= innerHeight - outterHeight + width) bias += width;
        else bias = 0;
        this.$refs.scrollContent.style.top = `-${bias}px`;
      }, 200);
    }, 1000);
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

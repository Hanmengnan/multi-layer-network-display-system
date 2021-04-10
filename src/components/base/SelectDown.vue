<template>
  <div
    class="select-down"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <div class="title" @click="isShow = !isShow">
      <span>{{ title }}</span>
    </div>
    <div
      class="selector"
      v-if="isShow"
      :style="`background-color: ${themeColor}`"
    >
      <div
        :class="`selector-item ${item === selectVal ? 'selected' : ''}`"
        v-for="item in selectList"
        :key="`${item.key}:${item}`"
        @click="selectVal = item"
      >
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-down",
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      required: false,
      default: "rgba(0,0,0,0.2)"
    },
    selectList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectVal: "",
      isShow: false
    };
  },
  watch: {
    value(newVal) {
      this.selectVal = newVal;
    },
    selectVal(newVal) {
      this.$emit("input", newVal);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";

.select-down {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
  }

  .selector {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 300%;
    left: 0;
    top: 100%;
    padding: 5px 0;
    border-radius: 5%;
    overflow: scroll;

    .selector-item {
      border-left: 2px transparent solid;

      &:hover {
        border-left: 2px @themeColor4 solid;
      }

      &:active {
        color: fade(@titleFontColor, 30%);
      }

      &.selected {
        border-left: 2px @themeColor4 solid;
      }
    }
  }
}
</style>

<template>
  <!-- <transition> -->
  <div class="model-area" v-if="isShow" @click="clickClose">
    <div class="container" @click.stop>
      <div class="banner">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="iconfont cancel" @click="clickClose">&#xe600;</div>
      </div>
      <div class="slot-area">
        <slot></slot>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "modal",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  watch: {
    value(val) {
      this.isShow = val;
    },
    // eslint-disable-next-line no-unused-vars
    isShow(val) {
      this.$emit("input", this.isShow);
    }
  },
  methods: {
    clickClose() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";
.model-area {
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;
  color: @defaultFontColor;
  z-index: 32767;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.349);
  .container {
    background: @backgroundColor;
    border: 2px solid transparent;
    border-image: linear-gradient(
        45deg,
        #21def4,
        #00000002 20%,
        #00000002 80%,
        #21def4 100%
      )
      1 10;
    border-radius: 1%;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    .banner {
      font-size: @titleFontSize;
      font-weight: @titleFontWeight;
      display: flex;
      justify-content: space-between;
      margin: 20px;
      flex: 1;
      .title > span {
        display: inline-block;
        border-left: @borderWidth solid @titleFontColor;
        padding: 5px;
      }
      .cancel {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .cancel:hover {
        font-size: @titleFontSize;
        cursor: pointer;
      }
    }
    .slot-area {
      flex: 14;
      margin: 10px;
    }
  }
}
</style>

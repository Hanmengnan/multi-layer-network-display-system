<template>
  <div class="people-area">
    <div class="people-name">
      <div>今日值班:</div>
      <div>
        <i class="iconfont" style="padding-right: 5px">&#xe62f;</i
        >{{ people.duty.name }}
      </div>
    </div>
    <img :src="people.duty.pic" alt="duty" />
    <div class="people-name">
      <div>负责人:</div>
      <div>
        <i class="iconfont" style="padding-right: 5px">&#xe62f;</i
        >{{ people.principal.name }}
      </div>
    </div>
    <img :src="people.principal.pic" alt="owner" />
  </div>
</template>

<script>
export default {
  name: "people-box",
  props: {
    people: {
      type: Object,
      require: false,
      default: () => {
        return {
          duty: {},
          principal: {}
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/common";
@import "~@/assets/css/mixin/base";

.people-area {
  .mixin-flex(@justify-content: space-around);
  .mixin-width-height(@height: 80%);
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;

  .people-name {
    .mixin-flex(
      @flex-direction: column,
      @justify-content: space-around,
      @align-items: flex-start
    );
  }

  img {
    .mixin-width-height(@width: 14%, @height: 100%);
  }
}
</style>

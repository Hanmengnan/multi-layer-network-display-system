<template>
  <div class="people-area">
    <div class="people-name">
      <div>今日值班:</div>
      <div>
        <i class="iconfont" style="padding-right: 5px">&#xe62f;</i
        >{{ duty.name }}
      </div>
    </div>
    <img :src="duty.pic" alt="duty" />
    <div class="people-name">
      <div>负责人:</div>
      <div>
        <i class="iconfont" style="padding-right: 5px">&#xe62f;</i
        >{{ duty.name }}
      </div>
    </div>
    <img :src="owner.pic" alt="owner" />
  </div>
</template>

<script>
export default {
  name: "people-box",
  props: {
    duty: {
      type: Object,
      default: () => {
        return {
          name: "张三",
          pic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2561659095,299912888&fm=26&gp=0.jpg"
        };
      }
    },
    owner: {
      type: Object,
      default: () => {
        return {
          name: "牛猛",
          pic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2561659095,299912888&fm=26&gp=0.jpg"
        };
      }
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/css/common";

.people-area {
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 80%;

  .people-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }

  img {
    width: 14%;
    height: 100%;
  }
}
</style>

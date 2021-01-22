<template>
  <List is-scroll="hidden" />
</template>

<script>
import List from "@/components/base/List.vue";
export default {
  name: "node-list",
  components: {
    List
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";
.list-area {
  .mixin-width-height(@height: 90%);
}
</style>

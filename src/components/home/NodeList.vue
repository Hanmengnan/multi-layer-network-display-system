<template>
  <List :is-scroll="false" />
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
.list-area {
  width: 100%;
  height: 90%;
  max-height: 90%;
}
</style>

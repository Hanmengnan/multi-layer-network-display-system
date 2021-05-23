<template>
  <div class="main-area">
    <List
      :handleMouseIn="mouseMoveEvent"
      :handleMouseOut="mouseMoveEvent"
      :header="headerList"
      :body="showList"
      :is-scroll="true"
    />
  </div>
</template>

<script>
import List from "@/components/base/List.vue";
import { getProvince } from "@/api/mock/nodeAndLink";

const headerList = [
  { value: "编号" },
  { value: "节点名称" },
  { value: "节点类型" }
];
export default {
  name: "node-list",
  components: {
    List
  },
  props: {
    nodeList: {
      type: Array,
      required: true
    }
  },
  data() {
    this.headerList = headerList;
    return {};
  },
  computed: {
    showList() {
      return this.nodeList.map(val => {
        let color = "";
        if (val.state === "正常") color = "green";
        if (val.state === "繁忙") color = "yellow";
        if (val.state === "拥塞") color = "red";
        if (val.state === "故障") color = "grey";
        return {
          id: val.id,
          value: val.name,
          state: val.state,
          color
        };
      });
    }
  },
  methods: {
    mouseMoveEvent(val) {
      val = getProvince(val.split("站")[0]);
      this.$store.commit("changeForce", val);
    }
  }
};
</script>

<style lang="less" scoped>
.main-area {
  height: 90%;
  max-height: 90%;
}
</style>

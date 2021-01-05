<template>
  <div class="chart-container">
    <situation-chart-container
      v-for="(tip, key) in tips"
      :key="key"
      :title="tip.name"
      :themeColor="tip.themeColor"
      :aimConditionNumber="tip.value"
      :clickEvent="showModal"
      :conditionNumber="tips.reduce((pre, val) => pre + val.value, 0)"
      :index="markIndex(key, tips.length)"
    />
    <div v-for="tip in tips" :key="tip.id">
      <modal v-model="tip.isShow">
        <template v-slot:title>
          <span>{{ tip.name }}事件一览</span>
        </template>
        <List :header="titleList" :body="eventList[0]" />
      </modal>
    </div>
  </div>
</template>

<script>
import SituationChartContainer from "@/components/home/Situation/SituationChartContainer";
import Modal from "@/components/base/Modal.vue";
import List from "@/components/base/List.vue";

const conditionData = [
  { name: "已处理", value: 330, themeColor: "#1772e9", isShow: false },
  { name: "处理中", value: 100, themeColor: "#12f067", isShow: false },
  { name: "未处理", value: 110, themeColor: "#ca8622", isShow: false }
];

export default {
  components: {
    SituationChartContainer,
    Modal,
    List
  },
  data() {
    return {
      tips: conditionData,
      titleList: [
        { value: "序号" },
        { value: "事件类型" },
        { value: "处理人" },
        { value: "处理时间" },
        { value: "处理状态" },
        { value: "来源" },
        { value: "简报" }
      ],
      eventList: [
        [
          {
            id: 3212,
            type: "北京第三节点",
            owner: "张三",
            time: "2020/9/10",
            status: "处理中",
            orign: "系统",
            log: "正在处理..."
          },
          {
            id: 3213,
            type: "北京第四节点",
            owner: "李四",
            time: "2020/9/10",
            status: "处理中",
            orign: "系统",
            log: "正在处理..."
          },
          {
            id: 3214,
            type: "北京第五节点",
            owner: "王五",
            time: "2020/9/10",
            status: "处理中",
            orign: "系统",
            log: "正在处理..."
          },
          {
            id: 3215,
            type: "北京第六节点",
            owner: "赵六",
            time: "2020/9/10",
            status: "处理中",
            orign: "系统",
            log: "正在处理..."
          }
        ],
        [],
        []
      ]
    };
  },
  methods: {
    showModal(name) {
      this.tips.forEach(tip => {
        if (tip.name === name) tip.isShow = true;
      });
    },
    markIndex(id, num) {
      if (String(id) === "0") {
        return "0";
      } else if (String(id) === String(num - 1)) {
        return "1";
      } else {
        return "2";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";

.chart-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

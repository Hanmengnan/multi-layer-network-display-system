<template>
  <div class="chart-container">
    <situation-chart-container
      v-for="(tip, key) in conditionData"
      :key="key"
      :title="tip.name"
      :themeColor="tip.themeColor"
      :aimConditionNumber="tip.value"
      :clickEvent="showModal"
      :conditionNumber="conditionData.reduce((pre, val) => pre + val.value, 0)"
      :index="markIndex(key, conditionData.length)"
    />
    <div v-for="tip in showSwitch" :key="tip.id">
      <modal v-model="tip.isShow">
        <template v-slot:title>
          <span>{{ tip.name }}事件一览</span>
        </template>
        <List
          :header="titleList"
          :body="eventMap[tip.label]"
          is-scroll="scroll"
        />
      </modal>
    </div>
  </div>
</template>

<script>
import SituationChartContainer from "@/components/home/Situation/SituationChartContainer";
import Modal from "@/components/base/Modal.vue";
import List from "@/components/base/List.vue";

export default {
  components: {
    SituationChartContainer,
    Modal,
    List
  },
  props: {
    eventMap: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
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
      ],
      showSwitch: [
        { name: "未处理", isShow: false, label: "unhandled" },
        { name: "处理中", isShow: false, label: "handling" },
        { name: "已处理", isShow: false, label: "handled" }
      ]
    };
  },
  computed: {
    conditionData: function() {
      return [
        {
          name: "已处理",
          value: this.eventMap.handled.length,
          themeColor: "#1795e9"
        },
        {
          name: "处理中",
          value: this.eventMap.handling.length,
          themeColor: "#11e0e0"
        },
        {
          name: "未处理",
          value: this.eventMap.unhandled.length,
          themeColor: "#e26f0d"
        }
      ];
    }
  },
  methods: {
    showModal(name) {
      this.showSwitch.forEach(condition => {
        if (condition.name === name) condition.isShow = true;
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
@import "~@/assets/css/mixin/base";

.chart-container {
  .mixin-width-height();
  .mixin-flex();
}
</style>

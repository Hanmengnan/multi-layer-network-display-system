<template>
  <line-chart :title="title" :list-data="getData"></line-chart>
</template>

<script>
import LineChart from "@/components/chart/LineChart";

const oneDay = 24 * 3600 * 1000;

export default {
  name: "FlowChart",
  components: {
    LineChart
  },
  data() {
    return {
      title: "日流量环比增长",
      data: []
    };
  },
  computed: {
    getData: function() {
      return this.data;
    }
  },
  methods: {
    randomData: function() {
      this.now = new Date(+this.now + oneDay);
      this.value = this.value + Math.random() * 20 - 10;
      return {
        name: this.now.toString(),
        value: [
          [
            this.now.getFullYear(),
            this.now.getMonth() + 1,
            this.now.getDate()
          ].join("/"),
          Math.round(Number(this.value))
        ]
      };
    },
    init: function() {
      this.now = +new Date(1997, 9, 3);
      this.value = Math.random() * 1000;
      for (let i = 0; i < 10; i++) {
        this.data.push(this.randomData());
      }
    },
    updateData: function() {
      this.data.shift();
      for (let i = 0; i < 5; i++) {
        this.data.push(this.randomData());
      }
    }
  },
  mounted: function() {
    this.init();
    setInterval(this.updateData, 1000);
  }
};
</script>

<style scoped></style>

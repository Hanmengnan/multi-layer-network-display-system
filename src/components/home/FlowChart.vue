<template>
  <line-chart title="日流量环比增长" :list-data="getData"></line-chart>
</template>

<script>
import LineChart from "@/components/base/LineChart";

const oneDay = 24 * 3600 * 1000;

export default {
  name: "FlowChart",
  components: {
    LineChart
  },
  data() {
    return {
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
      for (let i = 0; i < 1000; i++) {
        this.data.push(this.randomData());
      }
    },
    updateData: function() {
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }
    }
  },
  mounted: function() {
    console.log(this);
    this.init();
    setInterval(this.updateData, 1000);
  }
};
</script>

<style scoped></style>

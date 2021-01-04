<template>
  <div class="home">
    <div class="head-area">
      <div class="head-network-switch">
        <Button label="光网络"></Button>
        <Button label="时频网络"></Button>
        <Button label="数据网络"></Button>
      </div>
      <div class="head-logo">
        <span>多层网络性能展示系统</span>
      </div>
      <div class="head-weather">
        <weather v-show="showWeather"></weather>
        <people-container v-show="!showWeather"></people-container>
      </div>
    </div>
    <div class="body-area">
      <div class="side-row">
        <div class="box-small"></div>
        <div class="box-small"></div>
        <div class="box-small"></div>
      </div>
      <div class="mid-row"></div>
      <div class="side-row">
        <div class="box-small"></div>
        <div class="box-small">
          <flow-chart></flow-chart>
        </div>
        <div class="box-small"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from "@/components/base/Weather";
import Button from "@/components/base/Button";
import PeopleContainer from "@/components/home/PeopleContainer";
import FlowChart from "@/components/home/FlowChart";

export default {
  name: "Home",
  data() {
    return {
      showWeather: true
    };
  },
  components: {
    Button,
    Weather,
    PeopleContainer,
    FlowChart
  },
  methods: {
    showLogo: function() {
      let delay = 0.3;
      let revealText = document.querySelector(".head-logo");
      let letters = revealText.textContent.split("");
      revealText.textContent = "";
      let middle = letters.filter(e => e !== " ").length / 2;
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    },
    switchComponent: function() {
      this.timer = setInterval(() => {
        this.showWeather = !this.showWeather;
      }, 10000);
    }
  },
  mounted() {
    this.showLogo();
    this.switchComponent();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="less">
@import "~@/assets/css/home.less";
</style>

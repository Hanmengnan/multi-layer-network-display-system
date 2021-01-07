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
      <div ref="sideLeft" class="side-row magictime slideLeftReturn">
        <div class="box box-1">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
        </div>
        <div class="box box-2">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
        </div>
        <div class="box box-3">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
        </div>
      </div>
      <div class="mid-row"></div>
      <div ref="sideRight" class="side-row magictime slideRightReturn">
        <div class="box box-4">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
        </div>
        <div class="box-5">
          <situation-handle></situation-handle>
        </div>
        <div class="box box-6">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <flow-chart></flow-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from "@/components/base/Weather";
import Button from "@/components/base/Button";
import PeopleContainer from "@/components/home/PeopleContainer";
import SituationHandle from "@/components/home/Situation/SituationHandle";
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
    SituationHandle,
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
    },
    removeSideRowAnimation: function() {
      this.$refs.sideRight.classList.remove("magictime");
      this.$refs.sideLeft.classList.remove("magictime");
    }
  },
  mounted: function() {
    setTimeout(this.removeSideRowAnimation, 2000);
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
@import "~@/assets/css/other/magic.css";
</style>

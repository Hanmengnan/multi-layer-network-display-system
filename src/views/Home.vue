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
        <weather></weather>
      </div>
    </div>
    <div class="body-area"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from "@/components/base/Weather";
import Button from "@/components/base/Button";

export default {
  name: "Home",
  components: {
    Button,
    Weather
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
    }
  },
  mounted() {
    this.showLogo();
  }
};
</script>
<style lang="less">
@import "~@/assets/css/home.less";
</style>

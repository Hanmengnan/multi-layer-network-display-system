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
      <div class="mid-bottom magictime slideDownReturn">
        <div class="list-area">
          <div class="box list-container-1 ">
            <node-list></node-list>
          </div>
          <div class="box list-container-2">
            <message-box
              :message="[
                { msg: '北京节点恢复正常', city: '北京', status: '正常' },
                { msg: '上海节点系统繁忙', city: '上海', status: '繁忙' },
                { msg: '云南节点发生故障', city: '云南', status: '故障' },
                { msg: '广州节点发生拥塞', city: '广州', status: '拥塞' },
                { msg: '新疆节点发生故障', city: '新疆', status: '故障' },
                { msg: '贵州节点发生故障', city: '贵州', status: '故障' },
                { msg: '青海节点发生故障', city: '青海', status: '故障' }
              ]"
            ></message-box>
          </div>
        </div>
      </div>
      <div ref="sideRight" class="side-row magictime slideRightReturn">
        <div class="box box-4">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <location-distribution></location-distribution>
        </div>
        <div class="box box-4">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <type-distribution></type-distribution>
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
      <div class="map-background">
        <china3d-map
          className="first"
          style="width: 100%; height: 100%"
        ></china3d-map>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/base/Button";
import Weather from "@/components/base/Weather";
import PeopleContainer from "@/components/home/PeopleContainer";

import China3dMap from "@/components/China3dMap";
import MessageBox from "@/components/home/MessageBox";
import NodeList from "@/components/home/NodeList";
import LocationDistribution from "@/components/home/NodeDistribution/LocationDistribution";
import TypeDistribution from "@/components/home/NodeDistribution/TypeDistribution";
import SituationHandle from "@/components/home/Situation/SituationHandle";
import FlowChart from "@/components/home/FlowChange";

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
    China3dMap,
    NodeList,
    MessageBox,
    PeopleContainer,
    SituationHandle,
    FlowChart,
    LocationDistribution,
    TypeDistribution
  },
  methods: {
    showTitle: function() {
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
    // ugly 的 代码 ，为了解决 css 中 position : fixed 与 animation 不兼容的问题所采取的不得已办法
    setTimeout(this.removeSideRowAnimation, 2000);
    this.showTitle();
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

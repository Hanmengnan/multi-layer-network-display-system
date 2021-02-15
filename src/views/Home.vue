<template>
  <div class="home">
    <div class="head-area">
      <div class="head-network-switch">
        <Button label="光网络" link="/light"></Button>
        <Button label="时频网络" link="/time"></Button>
        <Button label="数据网络" link="/data"></Button>
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
          <Legend class="legend-area" title-name="系统信息">
            <template v-slot:right>
              <div class="iconfont">&#xe6c8;</div>
            </template>
          </Legend>
          <system-info
            class="content-area"
            :system-info-list="systemInfoList"
            :state-info-list="stateInfoList"
          ></system-info>
        </div>
        <div class="box box-2">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <Legend class="legend-area" title-name="节点类型分布"></Legend>
          <type-distribution class="content-area"></type-distribution>
        </div>
        <div class="box box-3">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <Legend class="legend-area" title-name="节点地区分布"></Legend>
          <location-distribution class="content-area"></location-distribution>
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
                { msg: '青海节点发生故障', city: '青海', status: '故障' },
                { msg: '青海节点发生故障', city: '青海', status: '故障' },
                { msg: '青海节点发生故障', city: '青海', status: '故障' },
                { msg: '青海节点发生故障', city: '青海', status: '故障' },
                { msg: '青海节点发生故障', city: '青海', status: '故障' },
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
          <Legend class="legend-area" title-name="性能参数"></Legend>
          <GaugeChart
            class="content-area"
            :parameter-list="parameterList"
          ></GaugeChart>
        </div>
        <div class="box box-5">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <Legend class="legend-area" title-name="情况处理"></Legend>
          <situation-handle class="content-area"></situation-handle>
        </div>
        <div class="box box-6">
          <div class="box-border-1"></div>
          <div class="box-border-2"></div>
          <Legend class="legend-area" title-name="日流量环比增长"></Legend>
          <flow-chart class="content-area"></flow-chart>
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
import Legend from "@/components/base/Legend";
import Button from "@/components/base/Button";
import Weather from "@/components/base/Weather";
import PeopleContainer from "@/components/home/PeopleContainer";

import SystemInfo from "@/components/home/SystemInfo";
import GaugeChart from "@/components/chart/GaugeChart";
import China3dMap from "@/components/China3dMap";
import MessageBox from "@/components/home/MessageBox";
import NodeList from "@/components/home/NodeList";
import TypeDistribution from "@/components/home/NodeDistribution/TypeDistribution";
import LocationDistribution from "@/components/home/NodeDistribution/LocationDistribution";
import SituationHandle from "@/components/home/Situation/SituationHandle";
import FlowChart from "@/components/home/FlowChange";

export default {
  name: "Home",
  data() {
    return {
      showWeather: true,
      systemInfoList: [
        {
          name: "系统名称",
          value: "时空网络管理系统"
        },
        {
          name: "系统版本",
          value: "v2.1"
        },
        {
          name: "系统运行时间",
          value: "1d2h3m"
        },
        {
          name: "系统代号",
          value: "code71233"
        }
      ],
      stateInfoList: [
        {
          name: "数据库",
          status: "health"
        },
        {
          name: "网络",
          status: "health"
        },
        {
          name: "数据服务集群",
          status: "wrong"
        }
      ],
      parameterList: [
        {
          name: "丢包率",
          value: "12"
        },
        {
          name: "时延",
          value: "20"
        },
        {
          name: "速率",
          value: "1000"
        }
      ]
    };
  },
  components: {
    Legend,
    Button,
    Weather,
    SystemInfo,
    GaugeChart,
    China3dMap,
    NodeList,
    MessageBox,
    PeopleContainer,
    SituationHandle,
    FlowChart,
    TypeDistribution,
    LocationDistribution
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

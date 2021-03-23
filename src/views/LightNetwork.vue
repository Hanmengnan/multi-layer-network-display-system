<template>
  <div class="home">
    <div class="side">
      <div class="box-1">
        <component-box title-name="光网络节点设备状态">
          <template slot="body">
            <node-status
              :node-city="nodeCity"
              v-if="viewStatus === 'node'"
            ></node-status>
            <link-status
              :linkInfo="linkInfo"
              v-if="viewStatus === 'link'"
            ></link-status>
            <net-status v-if="viewStatus === 'net'"></net-status>
          </template>
        </component-box>
      </div>
      <div class="box-2">
        <component-box title-name="光纤各波段监控">
          <template slot="body">
            <band-monitor
              v-if="viewStatus === 'net' || viewStatus === 'link'"
            ></band-monitor>
            <load-monitor v-if="viewStatus === 'node'"></load-monitor>
          </template>
        </component-box>
      </div>
      <div class="box-3">
        <component-box title-name="网络运行配置">
          <template slot="body">
            <network-running-config
              v-if="viewStatus === 'net' || viewStatus === 'link'"
            ></network-running-config>
            <control-center v-if="viewStatus === 'node'"></control-center>
          </template>
        </component-box>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="title">光网络视图</div>
        <div class="weather">
          <weather></weather>
        </div>
      </div>
      <div class="sub-header">
        <div @click="selector = 'node'">
          <div></div>
          <select-down
            v-model="selector"
            title="节点查询"
            :select-list="cities"
          ></select-down>
        </div>
        <div @click="selector = '-'">
          <div></div>
          <select-down
            v-model="selector"
            title="链路查询"
            :select-list="links"
          ></select-down>
        </div>
        <div>
          <div></div>
          <div @click="selector = ''">网络总览</div>
        </div>
        <div>
          <div></div>
          <div @click="$router.push('/')">返回主视图</div>
        </div>
      </div>
      <div class="body">
        <div class="map-area">
          <div
            class="item one"
            style="transform: translate(35.5%,33.5%) scale(0.42)"
            @dblclick="clickChart('1')"
          >
            <EchartsMap v-model="selector" />
          </div>
          <div
            class="item two active"
            @dblclick="clickChart('2')"
            style="transform: translate(0,0) scale(1)"
          >
            <Map :status="selector" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentBox from "@/components/base/ComponentBox";
import Weather from "@/components/base/Weather";
import LinkStatus from "@/components/lightNetwork/LinkStatus";
import BandMonitor from "@/components/lightNetwork/BandMonitor";
import ControlCenter from "@/components/lightNetwork/ControlCenter";
import NodeStatus from "@/components/lightNetwork/NodeStatus";
import LoadMonitor from "@/components/lightNetwork/LoadMonitor";
import NetworkRunningConfig from "@/components/lightNetwork/NetworkRuningConfig";
import NetStatus from "@/components/lightNetwork/NetStatus";
import SelectDown from "@/components/base/SelectDown";
import EchartsMap from "@/components/lightNetwork/EchartsMap";
import Map from "@/components/lightNetwork/Map";

import { CITYMAP, LINKMAP } from "@/util";

export default {
  name: "LightNetwork",
  components: {
    ComponentBox,
    NodeStatus,
    LinkStatus,
    NetStatus,
    NetworkRunningConfig,
    LoadMonitor,
    SelectDown,
    ControlCenter,
    BandMonitor,
    EchartsMap,
    Map,
    Weather
  },
  data() {
    return {
      selector: "",
      linkInfo: {
        startName: "北京",
        startType: "业务上下站",
        endName: "天津",
        endType: "业务上下站",
        linkType: "OTN光中继站",
        linkNum: 8,
        linkStatus: "正常"
      },
      nodeCity: "北京",
      nodeInfo: {
        name: "北京",
        type: "上下业务站",
        level: "1",
        timer: "13:57:48.145",
        deep: 4,
        color: "xyz-a",
        router: "NetEngine5000E",
        owner: "张三",
        tel: "010-1234567"
      }
    };
  },
  computed: {
    viewStatus() {
      if (this.selector === "") return "net";
      if (this.selector.includes("-")) return "link";
      return "node";
    },
    cities: function() {
      return Object.values(CITYMAP);
    },
    links: function() {
      return LINKMAP.map(link => {
        return `${CITYMAP[link[0]]}-${CITYMAP[link[1]]}`;
      });
    }
  },
  methods: {
    init() {
      this.items = document.querySelectorAll(".item");
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
    },
    clickChart(clickIndex) {
      let activeItem = document.querySelector(".active");
      let activeIndex = activeItem.dataset.order;
      let clickItem = this.items[clickIndex - 1];
      if (activeIndex === clickIndex) {
        return;
      }
      activeItem.classList.remove("active");
      clickItem.classList.add("active");
      this.setStyle(clickItem, activeItem);
    },
    setStyle(el1, el2) {
      let transform1 = el1.style.transform;
      let transform2 = el2.style.transform;
      el1.style.transform = transform2;
      el2.style.transform = transform1;
      el1.style.zIndex = 1;
      el2.style.zIndex = 2;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/lightNetwork";
</style>

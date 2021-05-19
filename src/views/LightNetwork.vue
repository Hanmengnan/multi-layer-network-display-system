<template>
  <div class="home">
    <div class="side">
      <div class="box-1">
        <component-box title-name="光网络节点设备状态">
          <template slot="body">
            <node-status
              :node-info="nodeInfo"
              :node-city="selector"
              v-if="viewStatus === 'node'"
            ></node-status>
            <link-status
              :linkInfo="linkInfo"
              v-if="viewStatus === 'link'"
            ></link-status>
            <net-status
              :nodeStatistics="nodeStatistics"
              v-if="viewStatus === 'net'"
            ></net-status>
          </template>
        </component-box>
      </div>
      <div class="box-2">
        <component-box title-name="光纤各波段监控">
          <template slot="body">
            <band-monitor
              v-if="viewStatus === 'net' || viewStatus === 'link'"
            ></band-monitor>
            <load-monitor
              :overload="bandInfo"
              v-if="viewStatus === 'node'"
            ></load-monitor>
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
        <div class="info-card info-card-even">
          <SelectDown
            title="链路查询"
            v-model="selector"
            :selectList="linkList"
          />
        </div>
        <div class="info-card info-card-odd">
          <SelectDown
            title="节点查询"
            v-model="selector"
            :selectList="nodeList"
          />
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
            <Map :status="selector" :nodes="nodeList" :links="linkList" />
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

import {
  UPDATE_NETINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_LINKINFO_ACTION,
  // UPDATE_BANDINFO_ACTION,
  UPDATE_NODEBAND_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_LINKLIST_ACTION
} from "../store/module/light/constant";

import { CITYMAP } from "@/util";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("light");

let timer;
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
      items: [],
      coordinates: [116.155512, 39.905093],
      citys: Object.values(CITYMAP)
      // links: LINKMAP.map(link => {
      //   return `${CITYMAP[link[0]]}-${CITYMAP[link[1]]}`
      // })
    };
  },
  computed: {
    viewStatus() {
      if (this.selector === "乌鲁木齐") return "net";
      if (this.selector === "哈密-乌鲁木齐") return "net";
      if (this.selector === "") return "net";
      if (this.selector.includes("-")) return "link";
      return "node";
    },
    ...mapState({
      nodeStatistics: state => state.nodeStatistics,
      nodeInfo: state => state.nodeInfo,
      linkInfo: state => state.linkInfo,
      bandInfo: state => state.bandInfo,
      nodeband: state => state.nodeband,
      linkList: state => state.linkList,
      nodeList: state => state.nodeList
    })
  },
  mounted() {
    this.init();
    this.getNodeStatistics();
    // this.getBandInfo("");
    this.getNodes();
    this.getLinks();
    // timer = setInterval(() => {
    //   this.getBandInfo("");
    // }, 3000);
  },
  methods: {
    init() {
      this.items = document.querySelectorAll(".mapArea .item");
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
    },
    clickChart(clickIndex) {
      let activeItem = document.querySelector(".mapArea .active");
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
    },
    ...mapActions({
      getNodeStatistics: UPDATE_NETINFO_ACTION,
      getNodeInfo: UPDATE_NODEINFO_ACTION,
      getLinkInfo: UPDATE_LINKINFO_ACTION,
      // getBandInfo: UPDATE_NODEBAND_ACTION,
      getNodeBand: UPDATE_NODEBAND_ACTION,
      getNodes: UPDATE_NODELIST_ACTION,
      getLinks: UPDATE_LINKLIST_ACTION
    })
  },
  watch: {
    selector: {
      deep: true,
      handler(newval) {
        if (newval.includes("-")) {
          timer && clearInterval(timer);
          this.getLinkInfo(newval);
          // this.getBandInfo(newval);
          // timer = setInterval(() => {
          //   this.getBandInfo(newval);
          // }, 3000);
        } else if (newval === "") {
          timer && clearInterval(timer);
          // this.getBandInfo(newval);
          // timer = setInterval(() => {
          //   this.getBandInfo(newval);
          // }, 3000);
        } else {
          timer && clearInterval(timer);
          this.getNodeInfo(newval);
          this.getNodeBand(newval);
          // timer = setInterval(() => {
          //   this.getNodeBand(newval);
          // }, 3000);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/lightNetwork";
</style>

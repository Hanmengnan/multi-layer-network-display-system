<template>
  <div class="home">
    <div class="head-area">
      <div class="head-network-switch">
        <Button
          label="时频网络"
          :clickEvent="toHref.bind(this, '/time')"
        ></Button>
        <Button
          label="光网络"
          :clickEvent="toHref.bind(this, '/light')"
        ></Button>
        <Button
          label="数据网络"
          :clickEvent="toHref.bind(this, '/data')"
        ></Button>
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
            :system-info-list="this.sysInfo.infoList"
            :state-info-list="this.sysInfo.stateList"
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
            <message-box :node-list="this.nodeList"></message-box>
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
          <line-chart
            class="content-area"
            :char-data="flowChange.chartData"
            :char-axis-data="flowChange.charAxisData"
            :chart-name="flowChange.chartName"
          ></line-chart>
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
import LineChart from "@/components/chart/LineChart";

import { createNamespacedHelpers } from "vuex";
import {
  UPDATE_SYSINFO_ACTION,
  UPDATE_EVENTLIST_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_NETINFO_ACTION,
  UPDATE_FLWOINFO_ACTION,
  UPDATE_LINKLIST_ACTION
} from "@/store/module/home/constant";

const { mapState, mapActions } = createNamespacedHelpers("home");

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
      ],
      flowChange: {
        chartSetting: {},
        charAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        chartData: [[820, 820, 1290, 1330, 934]],
        chartName: ["流量"]
      }
    };
  },
  components: {
    LineChart,
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
    TypeDistribution,
    LocationDistribution
  },
  computed: {
    ...mapState({
      sysInfo: state => state.sysinfo,
      eventList: state => state.eventList,
      nodeList: state => state.nodeList,
      basicInfo: state => state.basicInfo,
      flowInfo: state => state.flowInfo,
      linkList: state => state.linkList
    })
  },
  methods: {
    toHref: function(link) {
      this.$router.push(link);
    },
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
    },
    ...mapActions({
      getSysInfo: UPDATE_SYSINFO_ACTION,
      getEventList: UPDATE_EVENTLIST_ACTION,
      getNodeList: UPDATE_NODELIST_ACTION,
      getBasicInfo: UPDATE_NETINFO_ACTION,
      getFlowInfo: UPDATE_FLWOINFO_ACTION,
      getLinkList: UPDATE_LINKLIST_ACTION
    }),
    async initData() {
      this.getSysInfo();
      this.getEventList();
      this.getNodeList();
      this.getBasicInfo();
      this.getFlowInfo();
      this.getLinkList();
    }
  },
  mounted: function() {
    this.initData();
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

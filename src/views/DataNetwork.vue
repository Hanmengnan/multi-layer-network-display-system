<template>
  <div class="home">
    <div class="page-header">
      <div class="switch-page">
        <Button label="主视图" :clickEvent="toHref.bind(this, '/')"></Button>
        <Button
          label="光网络"
          :clickEvent="toHref.bind(this, '/light')"
        ></Button>
        <Button
          label="时频网络"
          :clickEvent="toHref.bind(this, '/time')"
        ></Button>
      </div>
      <div class="title">
        <span>数据传输网络</span>
      </div>
      <div class="weather-box">
        <div class="button-area">
          <Button
            :label="showStatus === 'normal' ? '常规视图' : '承载视图'"
            :clickEvent="
              () => {
                showStatus === 'normal'
                  ? (showStatus = 'support')
                  : (showStatus = 'normal');
              }
            "
          ></Button>
        </div>
        <div class="weather-area">
          <Weather></Weather>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="side side-left">
        <div class="side-body">
          <div class="box-1">
            <ComponentBox title-name="数据网络总览">
              <template slot="body">
                <net-info :netInfo="netInfo"></net-info>
              </template>
            </ComponentBox>
          </div>
          <div class="box-2">
            <ComponentBox title-name="流量变化">
              <template slot="header-button"> </template>
              <template slot="body">
                <div class="granularity-switch">
                  <Button
                    label="日"
                    :clickEvent="changeGranularity.bind(this, 'day')"
                  ></Button>
                  <Button
                    label="周"
                    :clickEvent="changeGranularity.bind(this, 'week')"
                  ></Button>
                  <Button
                    label="月"
                    :clickEvent="changeGranularity.bind(this, 'month')"
                  ></Button>
                </div>
                <div style="width: 100%;height: 90%">
                  <LineChart
                    :char-data="
                      flowInfo.chartData
                        ? flowInfo.chartData[granularity]
                        : [[]]
                    "
                    :char-axis-data="
                      flowInfo.charAxisData
                        ? flowInfo.charAxisData[granularity]
                        : []
                    "
                    :chart-name="['流量']"
                  ></LineChart>
                </div>
              </template>
            </ComponentBox>
          </div>
          <div class="box-3">
            <ComponentBox title-name="错误预警">
              <template slot="header-button"> </template>
              <template slot="body">
                <error-alarm
                  :error-list="lines"
                  :linkDetailShow="changeState.bind(this, '-')"
                ></error-alarm>
              </template>
            </ComponentBox>
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="map-area">
          <MapGISL7
            :nodes="nodeList"
            :links="linkList"
            :pointClickEvent="changeState.bind(this)"
            :lineClickEvent="changeState.bind(this)"
            :showType="showStatus"
          >
          </MapGISL7>
        </div>
        <transition name="slide">
          <div class="info-area" v-if="switchState === 'link'" key="link">
            <link-info
              :clickEvent="changeState.bind(this, '')"
              :linkInfo="linkInfo"
            ></link-info>
          </div>
          <div class="info-area" v-if="switchState === 'node'" key="node">
            <node-info
              :clickEvent="changeState.bind(this, '')"
              :nodeInfo="nodeInfo"
            ></node-info>
          </div>
        </transition>
        <transition name="slideBottom" mode="out-in">
          <div class="tooltip" v-if="showStatus !== 'support'">
            <div>
              <div>正常:</div>
              <div class="iconfont normal">&#xe605;</div>
            </div>
            <div>
              <div>繁忙:</div>
              <div class="iconfont busy">&#xe605;</div>
            </div>
            <div>
              <div>异常:</div>
              <div class="iconfont error">&#xe605;</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentBox from "@/components/base/ComponentBox";
import Weather from "@/components/base/Weather";
import Button from "@/components/base/Button";
import NetInfo from "@/components/dataNetwork/NetInfo";
import LinkInfo from "../components/dataNetwork/LinkInfo";
import NodeInfo from "../components/dataNetwork/NodeInfo";
import LineChart from "@/components/chart/LineChart";
import ErrorAlarm from "@/components/dataNetwork/ErrorAlarm";
import MapGISL7 from "@/components/MapGISL7Data";

import { createNamespacedHelpers } from "vuex";
import {
  UPDATE_NETINFO_ACTION,
  UPDATE_FLOWINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_LINKINFO_ACTION,
  UPDATE_LINKLIST_ACTION,
  UPDATE_NODELIST_ACTION
} from "../store/module/data/constant";

const { mapState, mapActions } = createNamespacedHelpers("data");

export default {
  name: "DataNetwork",
  components: {
    ErrorAlarm,
    LineChart,
    Weather,
    ComponentBox,
    NetInfo,
    LinkInfo,
    NodeInfo,
    Button,
    MapGISL7
  },
  data() {
    return {
      granularity: "month",
      switchState: "net",
      showStatus: "normal"
    };
  },
  computed: {
    ...mapState({
      netInfo: state => state.netInfo,
      flowInfo: state => state.flowInfo,
      nodeInfo: state => state.nodeInfo,
      linkInfo: state => state.linkInfo,
      linkList: state => state.linkList,
      nodeList: state => state.nodeList
    }),
    lines() {
      return this.linkList.map(el => {
        let typeNum = Math.random() * 10;
        let type;
        if (typeNum <= 5) type = "normal";
        if (typeNum > 5 && typeNum <= 8) type = "busy";
        if (typeNum > 8) type = "error";
        return {
          ...el,
          type
        };
      });
    }
  },
  methods: {
    toHref: function(link) {
      this.$router.push(link);
    },
    changeGranularity: function(granularity) {
      this.granularity = granularity;
    },
    changeState: function(state) {
      if (state === "") this.switchState = "net";
      else if (state.includes("-")) {
        this.getLinkInfo(state);
        this.switchState = "link";
      } else {
        this.getNodeInfo(state);
        this.switchState = "node";
      }
    },
    ...mapActions({
      getNetInfo: UPDATE_NETINFO_ACTION,
      getFlowData: UPDATE_FLOWINFO_ACTION,
      getNodeInfo: UPDATE_NODEINFO_ACTION,
      getLinkInfo: UPDATE_LINKINFO_ACTION,
      getLinks: UPDATE_LINKLIST_ACTION,
      getNodes: UPDATE_NODELIST_ACTION
    })
  },
  mounted() {
    this.getNetInfo();
    this.getFlowData();
    this.getLinks();
    this.getNodes();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/dataNetwork.less";
</style>

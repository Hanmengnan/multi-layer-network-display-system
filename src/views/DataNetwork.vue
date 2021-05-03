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
                      flowChange.chartData
                        ? flowChange.chartData[granularity]
                        : [[]]
                    "
                    :char-axis-data="
                      flowChange.charAxisData
                        ? flowChange.charAxisData[granularity]
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
                  :error-list="errorList"
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
  UPDATE_LINKINFO_ACTION
} from "@/store/module/data/constant";

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
      granularity: "week",
      switchState: "net",
      showStatus: "normal",
      networkInfo: {
        bandUsed: 100,
        bandTotal: 300,
        parameter: [
          { title: "链路数量", num: 9121 },
          { title: "节点数量", num: 1000 },
          { title: "当日流量/PB", num: 753 },
          { title: "当月流量/PB", num: 3541 }
        ]
      },
      // nodeInfo: {
      //   basicInfo: [
      //     { title: "节点名称", value: "北京" },
      //     { title: "吞吐量/PB", value: "1000" },
      //     { title: "转发率", value: "98.4%" },
      //     { title: "处理时延/NS", value: "11254" }
      //   ],
      //   nodeLinkLoad: {
      //     charAxisData: [
      //       "北京-沈阳",
      //       "北京-呼和浩特",
      //       "北京-石家庄",
      //       "北京-太原",
      //       "北京-济南"
      //     ],
      //     chartData: [
      //       [11, 21, 23, 14, 21, 12],
      //       [11, 12, 13, 14, 12, 12]
      //     ],
      //     chartName: ["信息报文", "普通预警", "橙色预警"]
      //   },
      //   messageSource: {
      //     charAxisData: [
      //       1,
      //       2,
      //       3,
      //       4,
      //       5,
      //       6,
      //       7,
      //       8,
      //       9,
      //       10,
      //       11,
      //       12,
      //       13,
      //       14,
      //       15,
      //       16,
      //       17,
      //       18,
      //       19,
      //       20,
      //       21,
      //       22,
      //       23,
      //       24,
      //       25,
      //       26,
      //       27,
      //       28,
      //       29
      //     ],
      //     chartData: [
      //       [
      //         11,
      //         21,
      //         23,
      //         14,
      //         21,
      //         12,
      //         14,
      //         42,
      //         21,
      //         15,
      //         12,
      //         12,
      //         13,
      //         14,
      //         12,
      //         23,
      //         15,
      //         32,
      //         13,
      //         21,
      //         23,
      //         24,
      //         23,
      //         14,
      //         14,
      //         31,
      //         21,
      //         28,
      //         24,
      //         11
      //       ],
      //       [
      //         11,
      //         12,
      //         13,
      //         14,
      //         12,
      //         12,
      //         14,
      //         14,
      //         21,
      //         15,
      //         12,
      //         12,
      //         13,
      //         24,
      //         14,
      //         23,
      //         15,
      //         12,
      //         13,
      //         12,
      //         23,
      //         21,
      //         32,
      //         42,
      //         14,
      //         12,
      //         22,
      //         18,
      //         23,
      //         11
      //       ],
      //       [
      //         1,
      //         2,
      //         3,
      //         4,
      //         2,
      //         2,
      //         4,
      //         4,
      //         21,
      //         5,
      //         12,
      //         2,
      //         3,
      //         4,
      //         1,
      //         23,
      //         5,
      //         2,
      //         3,
      //         2,
      //         23,
      //         2,
      //         3,
      //         4,
      //         1,
      //         1,
      //         2,
      //         8,
      //         2,
      //         11
      //       ]
      //     ],
      //     chartName: ["信息报文", "普通预警", "橙色预警"]
      //   },
      //   statisticData: {
      //     chartAxisData: [
      //       "北京",
      //       "上海",
      //       "广州",
      //       "深圳",
      //       "武汉",
      //       "甘肃",
      //       "新疆"
      //     ],
      //     chartName: ["报文统计"],
      //     chartData: [[30, 20, 40, 40, 50, 20, 30]]
      //   }
      // },
      // linkInfo: {
      //   start: "北京",
      //   end: "上海",
      //   infoData: [
      //     { title: "运行状态", num: "正常" },
      //     { title: "带宽", num: 100 },
      //     { title: "时延", num: 13243 },
      //     { title: "丢包率", num: 1.2 }
      //   ],
      //   charAxisData: [
      //     "1",
      //     "2",
      //     "3",
      //     "4",
      //     "5",
      //     "6",
      //     "7",
      //     "8",
      //     "9",
      //     "10",
      //     "11",
      //     "12",
      //     "13",
      //     "14",
      //     "15",
      //     "16",
      //     "17",
      //     "18",
      //     "19",
      //     "20",
      //     "21",
      //     "22",
      //     "23",
      //     "24"
      //   ],
      //   chartData: [
      //     [
      //       1.2,
      //       2.2,
      //       1.9,
      //       2.3,
      //       1.34,
      //       2.2,
      //       1.9,
      //       2.3,
      //       1.34,
      //       2.2,
      //       1.9,
      //       2.3,
      //       1.34,
      //       2.2,
      //       1.9,
      //       2.3,
      //       1.34,
      //       1.34,
      //       2.2,
      //       1.9,
      //       2.3,
      //       1.34,
      //       1.9,
      //       2.3,
      //       1.34
      //     ],
      //     [
      //       12.0,
      //       21.0,
      //       32.9,
      //       33.3,
      //       24.3,
      //       16.0,
      //       29.9,
      //       32.3,
      //       24.3,
      //       15.0,
      //       25.9,
      //       35.3,
      //       22.3,
      //       16.0,
      //       25.9,
      //       36.3,
      //       22.3,
      //       17.0,
      //       27.9,
      //       13.3,
      //       22.3,
      //       15.0,
      //       12.9,
      //       23.3,
      //       12.3
      //     ],
      //     [
      //       13221,
      //       15323,
      //       15232,
      //       12561,
      //       11231,
      //       16321,
      //       10012,
      //       14231,
      //       12352,
      //       11142,
      //       16511,
      //       13356,
      //       13421,
      //       14021,
      //       12911,
      //       13330,
      //       15321,
      //       17921,
      //       15901,
      //       18823,
      //       16821,
      //       12361,
      //       12341,
      //       19821,
      //       14021
      //     ]
      //   ],
      //   chartName: ["丢包率 (%)", "利用率 (%)", "时延 (ns)"],
      //   statisticData: {
      //     chartAxisData: [
      //       "北京",
      //       "上海",
      //       "广州",
      //       "深圳",
      //       "武汉",
      //       "甘肃",
      //       "新疆"
      //     ],
      //     chartName: ["报文统计"],
      //     chartData: [[30, 20, 40, 40, 50, 20, 30]]
      //   }
      // },
      flowChange: {
        chartSetting: {},
        charAxisData: {
          day: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ],
          week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        chartData: {
          day: [
            [
              820,
              820,
              1290,
              1330,
              934,
              820,
              820,
              1290,
              1330,
              934,
              1420,
              1900,
              820,
              820,
              1290,
              1330,
              934,
              820,
              820,
              1290,
              1330,
              934,
              1420,
              1900,
              820,
              820,
              1290,
              1330,
              934,
              1000
            ]
          ],
          week: [[820, 820, 1290, 1330, 934, 800, 1190]],
          month: [
            [820, 820, 1290, 1330, 934, 820, 820, 1290, 1330, 934, 1420, 1900]
          ]
        },
        chartName: ["流量"]
      },
      errorList: [
        {
          level: "橙色预警",
          data: "太原-西安 链路故障"
        },
        {
          level: "红色预警",
          data: "太原-西安 链路故障"
        },
        {
          level: "普通预警",
          data: "太原-西安 链路故障"
        },
        {
          level: "普通预警",
          data: "太原-西安 链路故障"
        },
        {
          level: "普通预警",
          data: "太原-西安 链路故障"
        },
        {
          level: "橙色预警",
          data: "太原-西安 链路故障"
        },
        {
          level: "普通预警",
          data: "太原-西安 链路故障"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      netInfo: state => state.netInfo,
      flowInfo: state => state.flowInfo,
      nodeInfo: state => state.nodeInfo,
      linkInfo: state => state.linkInfo
    })
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
      else if (state.includes("_")) {
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
      getLinkInfo: UPDATE_LINKINFO_ACTION
    })
  },
  mounted() {
    this.getNetInfo();
    this.getFlowData();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/dataNetwork.less";
</style>

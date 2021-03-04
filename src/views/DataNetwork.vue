<template>
  <div class="home">
    <div class="side side-left">
      <div class="side-header">
        <SideHeader title="网络概况"></SideHeader>
      </div>
      <div class="side-body">
        <div class="box-1">
          <ComponentBox title-name="数据网络总览">
            <template slot="body">
              <div class="container">
                <div class="bandwidth-info">
                  <div class="num-area">
                    <div>当前利用带宽</div>
                    <div class="num">
                      <div class="used">{{ networkInfo.data.used }}</div>
                      <div style="margin:0 10px 0 10px;">/</div>
                      <div class="total">{{ networkInfo.data.total }}</div>
                    </div>
                  </div>
                  <div class="chart-area">
                    <pie-chart-empty
                      title="带宽利用率"
                      :aim-condition-number="networkInfo.data.used"
                      :condition-number="networkInfo.data.total"
                      :char-setting="networkInfo.chartSetting"
                    ></pie-chart-empty>
                  </div>
                </div>
                <div class="other-info">
                  <div
                    v-for="(item, index) in networkInfo.data.info"
                    :key="index"
                    class="info-card"
                    :class="[
                      { 'info-card-1': index % 2 !== 0 },
                      { 'info-card-2': index > 1 }
                    ]"
                  >
                    <div>{{ item.title }}</div>
                    <div class="info-num">{{ item.num }}</div>
                  </div>
                </div>
              </div>
            </template>
          </ComponentBox>
        </div>
        <div class="box-2">
          <ComponentBox title-name="流量变化">
            <template slot="body">
              <LineChart
                :char-data="flowChange.chartData"
                :char-axis-data="flowChange.charAxisData"
                :chart-name="flowChange.chartName"
              ></LineChart>
            </template>
          </ComponentBox>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-header">
        数据传输网络
      </div>
      <div class="sub-header">
        <div class="weather-box">
          <Weather></Weather>
        </div>
        <div class="switch-page">
          <Button label="主视图" link="/"></Button>
          <Button label="光网络" link="/light"></Button>
          <Button label="时频网络" link="/time"></Button>
        </div>
      </div>
      <div class="mid-body">
        <China3dMap
          className="first"
          style="width: 100%; height: 100%"
        ></China3dMap>
      </div>
    </div>
    <div class="side side-right">
      <div class="side-header">
        <SideHeader title="链路概况"></SideHeader>
      </div>
      <div class="side-body">
        <div class="box-3">
          <ComponentBox title-name="数据链路状态">
            <template slot="body">
              <div class="link-name-area">
                <div v-text="linkInfo.start"></div>
                <div class="iconfont">&#xe602;</div>
                <div v-text="linkInfo.end"></div>
              </div>
              <div class="link-info-area">
                <div
                  v-for="(item, index) in linkInfo.infoData"
                  :key="index"
                  class="info-card"
                  :class="[
                    { 'info-card-1': index % 2 !== 0 },
                    { 'info-card-2': index > 1 }
                  ]"
                >
                  <div>
                    {{ item.title }}
                  </div>
                  <div class="info-num">
                    {{ item.num }}
                    <span v-if="index === 1">Gbps</span>
                    <span v-if="index === 2">ms</span>
                    <span v-if="index === 3">%</span>
                  </div>
                </div>
              </div>
              <div class="line-chart-area">
                <LineChart
                  :char-axis-data="linkInfo.charAxisData"
                  :char-data="linkInfo.chartData"
                  :chart-name="linkInfo.chartName"
                ></LineChart>
              </div>
            </template>
          </ComponentBox>
        </div>
        <div class="box-4">
          <ComponentBox title-name="错误预警">
            <template slot="body">
              <div class="log-container container">
                <List></List>
              </div>
            </template>
          </ComponentBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentBox from "@/components/lightNetwork/ComponentBox";
import SideHeader from "@/components/lightNetwork/SideHeader";
import Weather from "@/components/base/Weather";
import Button from "@/components/base/Button";
import China3dMap from "@/components/China3dMap";
import List from "@/components/base/List";
import PieChartEmpty from "@/components/chart/PieChartEmpty";
import LineChart from "@/components/chart/LineChart";

export default {
  name: "DataNetwork",
  components: {
    LineChart,
    PieChartEmpty,
    List,
    Weather,
    SideHeader,
    ComponentBox,
    Button,
    China3dMap
  },
  data() {
    return {
      networkInfo: {
        chartSetting: {
          legendShow: false,
          titleShow: false,
          radius: ["70%", "90%"]
        },
        data: {
          used: "100",
          total: "300",
          info: [
            { title: "链路数量", num: 9121 },
            { title: "节点数量", num: 1000 },
            { title: "当日流量/PB", num: 753 },
            { title: "当月流量/PB", num: 3541 }
          ]
        }
      },
      flowChange: {
        chartSetting: {},
        charAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        chartData: [[820, 820, 1290, 1330, 934]],
        chartName: ["流量"]
      },
      linkInfo: {
        chartSetting: {},
        start: "北京",
        end: "石家庄",
        infoData: [
          { title: "运行状态", num: "正常" },
          { title: "带宽", num: 100 },
          { title: "时延", num: 10 },
          { title: "丢包率", num: 1.2 }
        ],
        charAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        chartData: [
          [1.2, 2.2, 1.9, 2.3, 1.34],
          [2.0, 1.0, 2.9, 3.3, 2.3]
        ],
        chartName: ["丢包率", "带宽利用率"]
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/DataNetwork";
</style>

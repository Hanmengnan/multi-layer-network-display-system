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
            <template slot="header-button">
              <div class="icon-display">
                <div class="iconfont" style="margin: 0 2px 0 2px">&#xe663;</div>
                <div style="margin: 0 2px 0 2px">当日</div>
                <div class="iconfont" style="margin: 0 2px 0 2px">&#xe62b;</div>
              </div>
            </template>
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
      <div class="mid-header ">
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
          class="magictime puffIn"
          className="first"
          style="width: 100%; height: 100%"
        ></China3dMap>
      </div>
    </div>
    <div class="side side-right">
      <div class="side-header">
        <SideHeader
          :title="!switchState ? '链路情况' : '节点情况'"
        ></SideHeader>
      </div>
      <div class="side-body">
        <div class="box-3">
          <InfoBox :switch-state="switchState"></InfoBox>
        </div>
        <div class="box-4">
          <ComponentBox title-name="错误预警">
            <template slot="header-button">
              <div class="icon-display">
                <div class="iconfont" style="margin: 0 2px 0 2px">&#xe632;</div>
                <div style="margin: 0 2px 0 2px">开启</div>
                <div class="iconfont" style="margin: 0 2px 0 2px">&#xe62b;</div>
              </div>
            </template>
            <template slot="body">
              <div class="log-container container">
                <error-alarm :error-list="errorList"></error-alarm>
              </div>
            </template>
          </ComponentBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentBox from "@/components/base/ComponentBox";
import SideHeader from "@/components/dataNetwork/SideHeader";
import Weather from "@/components/base/Weather";
import Button from "@/components/base/Button";
import China3dMap from "@/components/China3dMap";
import PieChartEmpty from "@/components/chart/PieChartEmpty";
import LineChart from "@/components/chart/LineChart";
import InfoBox from "@/components/dataNetwork/InfoBox";
import ErrorAlarm from "@/components/dataNetwork/ErrorAlarm";

export default {
  name: "DataNetwork",
  components: {
    ErrorAlarm,
    InfoBox,
    LineChart,
    PieChartEmpty,
    Weather,
    SideHeader,
    ComponentBox,
    Button,
    China3dMap
  },
  data() {
    return {
      switchState: true,
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
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/dataNetwork.less";
</style>

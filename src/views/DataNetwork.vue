<template>
  <div class="home">
    <div class="side side-left">
      <div class="side-header">
        <SideHeader title="网络概况"></SideHeader>
      </div>
      <div class="side-body">
        <div class="box-1">
          <ComponentBox title-name="数据网络总览"></ComponentBox>
        </div>
        <div class="box-2">
          <ComponentBox title-name="流量变化">
            <template slot="body">
              <FlowChart></FlowChart>
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
          <ComponentBox title-name="数据链路状态"> </ComponentBox>
        </div>
        <div class="box-4">
          <ComponentBox title-name="错误预警"></ComponentBox>
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
import FlowChart from "@/components/home/FlowChange";

export default {
  name: "DataNetwork",
  components: {
    FlowChart,
    Weather,
    SideHeader,
    ComponentBox,
    Button,
    China3dMap
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/DataNetwork";
</style>

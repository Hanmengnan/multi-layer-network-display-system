<template>
  <div class="home">
    <div class="side">
      <weather class="weather-area"></weather>
      <div class="box-1">
        <div class="box-title">
          <div class="title">时频信号网络概览</div>
        </div>
        <bar-chart
          :direction="false"
          :char-data="networkInfo.chartData"
          :chart-name="networkInfo.chartName"
          :char-axis-data="networkInfo.chartAxisData"
        ></bar-chart>
      </div>
      <div class="box-2">
        <div class="box-title">
          <span class="title">各基准站时间精度</span>
          <!-- 筛选 -->
        </div>
        <precision-list></precision-list>
      </div>
      <div class="box-3">
        <div class="box-title">
          <span class="title"> 时频信号路由配置</span>
          <!-- 筛选 -->
        </div>
        <!-- 省地图组件 -->
        <RouterConfig></RouterConfig>
      </div>
    </div>
    <div class="main">
      <div class="body">
        <div class="mapArea">
          <!-- 全国地图组件 -->
          <!-- <china-map></china-map> -->
          <MapGISL7Time className="map"></MapGISL7Time>
          <transition name="slidebuttom" mode="out-in">
            <div class="tooltip" v-if="true">
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
              <div>
                <div>最高基准站:</div>
                <div class="iconfont error">&#xe605;</div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RouterConfig from "@/components/timeNetwork/RouterConfig";
import Weather from "@/components/base/Weather";
import PrecisionList from "@/components/timeNetwork/PrecisionList";
import BarChart from "@/components/chart/BarChart";
import MapGISL7Time from "@/components/MapGISL7Time";
export default {
  name: "TimeNetwork",
  components: {
    MapGISL7Time,
    BarChart,
    PrecisionList,
    Weather,
    RouterConfig
  },
  data() {
    return {
      selected: "ground",
      networkInfo: {
        chartData: [[120, 150, 200, 300]],
        chartName: "",
        chartAxisData: ["最高精度", "超高精度", "次高精度", "时间网关"]
      }
    };
  },
  mounted() {},
  methods: {
    toHref: function(link) {
      this.$router.push(link);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less">
@import "~@/assets/css/timeNetwork.less";
</style>

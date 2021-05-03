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
          :chart-data="networkInfo.chartData"
          :chart-name="networkInfo.chartName"
          :chart-axis-data="networkInfo.chartAxisData"
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
      <div class="header">时频传输网络</div>
      <div class="header-nav">
        <div class="selector">
          <div class="title">授时信号源:</div>
          <div class="base">
            <div
              :class="
                `iconfont ${this.selected === 'ground' ? 'selected' : ''}`
              "
              @click="
                () => {
                  this.selected = 'ground';
                }
              "
            >
              &#xe95c; 地面最高基准
            </div>
            <div
              :class="`iconfont ${this.selected === 'sky' ? 'selected' : ''}`"
              @click="
                () => {
                  this.selected = 'sky';
                }
              "
            >
              &#xe60b; 天基卫星信号
            </div>
          </div>
        </div>
        <div class="menu">
          <Button label="主页面" :clickEvent="toHref.bind(this, '/')"> </Button>
          <Button
            label="光网络"
            :clickEvent="toHref.bind(this, '/light')"
          ></Button>
          <Button
            label="数据网络"
            :clickEvent="toHref.bind(this, '/data')"
          ></Button>
        </div>
      </div>
      <div class="body">
        <div class="mapArea">
          <MapGISL7Time className="map"></MapGISL7Time>
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
              <div class="iconfont top">&#xe64c;</div>
            </div>
          </div>
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
import Button from "@/components/base/Button";

export default {
  name: "TimeNetwork",
  components: {
    Button,
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
        chartName: ["站点数量"],
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

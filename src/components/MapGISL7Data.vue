<template>
  <dir ref="contaniner" class="l7container" id="l7container"></dir>
</template>

<script>
import { Scene, LineLayer, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import GeoJson from "geojson";
import { getPointsGeo } from "@/assets/map/china.js";

export default {
  props: {
    pointClickEvent: {
      type: Function,
      required: false,
      default: () => {}
    },
    lineClickEvent: {
      type: Function,
      required: false,
      default: () => {}
    },
    showType: {
      type: String,
      require: false
    }
  },
  data() {
    return {
      lines: [
        {
          line: [getPointsGeo("北京"), getPointsGeo("甘肃")],
          start: "beijing",
          end: "lanzhou",
          id: "BJ_GS_01",
          type: "error"
        },
        {
          line: [getPointsGeo("北京"), getPointsGeo("湖北")],
          start: "beijing",
          end: "wuhan",
          type: "normal"
        },
        {
          line: [getPointsGeo("北京"), getPointsGeo("上海")],
          start: "beijing",
          end: "shanghai",
          type: "busy"
        },
        {
          line: [getPointsGeo("上海"), getPointsGeo("湖北")],
          start: "shanghai",
          end: "wuhan",
          type: "normal"
        },
        {
          line: [getPointsGeo("甘肃"), getPointsGeo("上海")],
          start: "lanzhou",
          end: "shanghai",
          type: "busy"
        },
        {
          line: [getPointsGeo("甘肃"), getPointsGeo("湖北")],
          start: "lanzhou",
          end: "wuhan",
          type: "busy"
        },
        {
          line: [getPointsGeo("新疆"), getPointsGeo("西藏")],
          type: "busy"
        },
        {
          line: [getPointsGeo("新疆"), getPointsGeo("青海")],
          type: "busy"
        },
        {
          line: [getPointsGeo("青海"), getPointsGeo("甘肃")],
          type: "error"
        },
        {
          line: [getPointsGeo("四川"), getPointsGeo("西藏")],
          type: "busy"
        },
        {
          line: [getPointsGeo("云南"), getPointsGeo("四川")],
          type: "normal"
        },
        {
          line: [getPointsGeo("云南"), getPointsGeo("贵州")],
          type: "normal"
        },
        {
          line: [getPointsGeo("云南"), getPointsGeo("广西")],
          type: "error"
        },
        {
          line: [getPointsGeo("广东"), getPointsGeo("广西")],
          type: "busy"
        },
        {
          line: [getPointsGeo("广东"), getPointsGeo("福建")],
          type: "normal"
        },
        {
          line: [getPointsGeo("福建"), getPointsGeo("江西")],
          type: "normal"
        },
        {
          line: [getPointsGeo("福建"), getPointsGeo("上海")],
          type: "normal"
        },
        {
          line: [getPointsGeo("江西"), getPointsGeo("湖南")],
          type: "error"
        },
        {
          line: [getPointsGeo("湖南"), getPointsGeo("贵州")],
          type: "busy"
        },
        {
          line: [getPointsGeo("湖南"), getPointsGeo("湖北")],
          type: "normal"
        },
        {
          line: [getPointsGeo("四川"), getPointsGeo("湖北")],
          type: "normal"
        },
        {
          line: [getPointsGeo("四川"), getPointsGeo("甘肃")],
          type: "normal"
        },
        {
          line: [getPointsGeo("新疆"), getPointsGeo("甘肃")],
          type: "normal"
        },
        {
          line: [getPointsGeo("西藏"), getPointsGeo("甘肃")],
          type: "normal"
        },
        {
          line: [getPointsGeo("西藏"), getPointsGeo("云南")]
        }
      ],
      points: [
        {
          lng: getPointsGeo("西藏")[0],
          lat: getPointsGeo("西藏")[1],
          name: "西藏节点",
          id: "XZ001",
          value: 5
        },
        {
          lng: getPointsGeo("新疆")[0],
          lat: getPointsGeo("新疆")[1],
          name: "新疆节点",
          id: "XJ001",
          value: 5
        },
        {
          lng: getPointsGeo("四川")[0],
          lat: getPointsGeo("四川")[1],
          name: "四川节点",
          id: "SC001",
          value: 5
        },
        {
          lng: getPointsGeo("湖南")[0],
          lat: getPointsGeo("湖南")[1],
          name: "湖南节点",
          id: "HN001",
          value: 5
        },
        {
          lng: getPointsGeo("贵州")[0],
          lat: getPointsGeo("贵州")[1],
          name: "贵州节点",
          id: "GZ001",
          value: 5
        },
        {
          lng: getPointsGeo("青海")[0],
          lat: getPointsGeo("青海")[1],
          name: "青海节点",
          id: "QH001",
          value: 5
        },
        {
          lng: getPointsGeo("福建")[0],
          lat: getPointsGeo("福建")[1],
          name: "福建节点",
          value: 5
        },
        {
          lng: getPointsGeo("江西")[0],
          lat: getPointsGeo("江西")[1],
          name: "江西节点",
          value: 5
        },
        {
          lng: getPointsGeo("广西")[0],
          lat: getPointsGeo("广西")[1],
          name: "广西节点",
          value: 5
        },
        {
          lng: getPointsGeo("广东")[0],
          lat: getPointsGeo("广东")[1],
          name: "广东节点",
          value: 5
        },
        {
          lng: getPointsGeo("北京")[0],
          lat: getPointsGeo("北京")[1],
          name: "北京节点",
          id: "BJ001",
          value: 6
        },
        {
          lng: getPointsGeo("甘肃")[0],
          lat: getPointsGeo("甘肃")[1],
          name: "兰州节点",
          value: 5
        },
        {
          lng: getPointsGeo("湖北")[0],
          lat: getPointsGeo("湖北")[1],
          name: "武汉节点",
          value: 5
        },
        {
          lng: getPointsGeo("上海")[0],
          lat: getPointsGeo("上海")[1],
          name: "上海节点",
          id: "SH001",
          value: 5
        }
      ]
    };
  },
  mounted() {
    const scene = new Scene({
      id: "l7container",
      logoVisible: false,
      map: new GaodeMap({
        pitch: 55,
        style: "amap://styles/95af509712b1c1482568c22fb6a48ba1",
        token: "a127225eb0a00482236e3bed17d51c9f",
        center: [114.305215, 30.592935],
        zoom: 4.5,
        minZoom: 4.5
      })
    });
    const line = new LineLayer({
      zIndex: 1,
      pickingBuffer: 5,
      name: "line"
    })
      .source(
        GeoJson.parse(
          this.lines.filter(el => el.type),
          { LineString: "line" }
        )
      )
      .size(2)
      .shape("line")
      .active(true)
      .color("type", type => {
        if (type === "error") return "rgba(255,0,0,0.6)";
        if (type === "normal") return "rgba(0,255,0,0.6)";
        if (type === "busy") return "rgba(255,255,0,0.6)";
      })
      // .animate({
      //   duration: 3,
      //   interval: 0.8,
      //   trailLength: 0.8,
      // })
      .on("click", e => {
        this.lineClickEvent(
          e.feature.properties.id
          // `${e.feature.properties.start}-${e.feature.properties.end}`
        );
      });

    const linePy = new LineLayer({
      blend: "additive",
      name: "linePy",
      zIndex: 1
    })
      .source(GeoJson.parse(this.lines, { LineString: "line" }))
      .size(2)
      .shape("line")
      .color("rgba(30,66,124,0.5)")
      .hide();

    const lineSp = new LineLayer({
      zIndex: 1,
      pickingBuffer: 5,
      name: "lineSp"
    })
      .source(
        GeoJson.parse(
          this.lines.filter(el => el.type),
          { LineString: "line" }
        )
      )
      .size(2)
      .shape("line")
      .color("yellow")
      .animate({
        duration: 3,
        interval: 0.8,
        trailLength: 0.8
      })
      .hide();

    const point = new PointLayer({
      zIndex: 2
    })
      .source(GeoJson.parse(this.points, { Point: ["lat", "lng"] }))
      .shape("circle")
      .color("rgba(255,255,0, 0.5)")
      .size(10)
      .active(true)
      .on("click", e => {
        this.pointClickEvent(e.feature.properties.id);
      });

    const textLayer = new PointLayer({
      zIndex: 2,
      name: "pointsButtom"
      // blend: 'additive',
    })
      .source(GeoJson.parse(this.points, { Point: ["lat", "lng"] }))
      .shape("name", "text")
      // .color('rgba(255,255,0, 0.5)')
      .size(10)
      .style({
        textAnchor: "top-left", // 文本相对锚点的位置 center|left|right|top|bottom|top-left
        textOffset: [20, 20], // 文本相对锚点的偏移量 [水平, 垂直]
        spacing: 2, // 字符间距
        padding: [1, 1], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
        stroke: "#ffffff", // 描边颜色
        strokeWidth: 0.3, // 描边宽度
        strokeOpacity: 1.0
      })
      .show();

    scene.addLayer(line);
    scene.addLayer(linePy);
    scene.addLayer(point);
    scene.addLayer(lineSp);
    scene.addLayer(textLayer);

    this.scene = scene;
  },
  watch: {
    showType: {
      immediate: false,
      handler(newval) {
        let scene = this.scene;
        const linePy = scene.getLayerByName("linePy");
        const line = scene.getLayerByName("line");
        const lineSp = scene.getLayerByName("lineSp");
        if (newval === "support") {
          scene.setMapStatus({ zoomEnable: false });
          linePy.show();
          lineSp.show();
          line.hide();
        } else {
          scene.setMapStatus({ zoomEnable: true });
          linePy.hide();
          lineSp.hide();
          line.show();
        }
      }
    }
  },
  beforeDestroy() {
    let scene = this.scene;
    scene.destroy();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";

.l7container {
  .mixin-width-height();
}
</style>

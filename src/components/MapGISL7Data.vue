<template>
  <dir ref="contaniner" class="l7container" id="l7container"></dir>
</template>

<script>
import { Scene, LineLayer, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import GeoJson from "geojson";
// import { getPointsGeo } from '@/assets/map/china.js'
import { getPointsLocation } from "../api/mock/nodeAndLink";

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
    },
    links: {
      type: Array,
      required: true
    },
    nodes: {
      type: Array,
      required: true
    }
  },
  computed: {
    lines() {
      return this.links.map(el => {
        return {
          line: [getPointsLocation(el.node1Id), getPointsLocation(el.node2Id)],
          id: el.id,
          start: el.node1Name,
          end: el.node2Name,
          // type: el.type,
          type: "busy",
          used: el.usedForData
        };
      });
    },
    points() {
      return this.nodes.map(el => {
        return {
          id: el.id,
          lng: el.location[0],
          lat: el.location[1],
          name: el.name
        };
      });
    }
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
    this.scene = scene;
  },
  methods: {
    drawBasicLine() {
      const line = new LineLayer({
        zIndex: 1,
        pickingBuffer: 5,
        name: "line"
      })
        .source(
          GeoJson.parse(
            this.lines.filter(el => el.used),
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
        .on("click", e => {
          // this.lineClickEvent(`${e.feature.properties.start}-${e.feature.properties.end}`);
          this.lineClickEvent(e.feature.properties.id);
        });
      this.scene.addLayer(line);
    },
    drawSpLine() {
      const lineSp = new LineLayer({
        zIndex: 1,
        pickingBuffer: 5,
        name: "lineSp"
      })
        .source(
          GeoJson.parse(
            this.lines.filter(el => el.used),
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
      this.scene.addLayer(lineSp);
    },
    drawPyLine() {
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
      this.scene.addLayer(linePy);
    },
    drawPointAndText() {
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
      this.scene.addLayer(point);
      this.scene.addLayer(textLayer);
    }
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
    },
    links: {
      handler() {
        this.drawBasicLine();
        this.drawPyLine();
        this.drawSpLine();
      },
      immediate: false
    },
    nodes: {
      handler() {
        this.drawPointAndText();
      },
      immediate: false
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

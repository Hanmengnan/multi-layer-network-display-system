<template>
  <dir ref="contaniner" class="l7container" id="l7container"></dir>
</template>

<script>
import { Scene, LineLayer, PointLayer, PolygonLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import GeoJson from "geojson";
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
      required: false
    },
    nodes: {
      type: Array,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    pointsTop() {
      return this.nodes
        .filter(
          el =>
            el.precision === "超高时钟基准" || el.precision === "最高时钟基准"
        )
        .map(el => {
          return {
            lng: el.location[0],
            lat: el.location[1],
            name: el.name,
            precision: el.precision
          };
        });
    },
    pointsMiddle() {
      return this.nodes
        .filter(
          el => el.precision === "次高时钟基准" || el.precision === "时钟网关"
        )
        .map(el => {
          return {
            lng: el.location[0],
            lat: el.location[1],
            name: el.name,
            precision: el.precision
          };
        });
    },
    lines() {
      return this.links.map(el => {
        return {
          line: [getPointsLocation(el.node1Id), getPointsLocation(el.node2Id)],
          start: el.node1Id,
          end: el.node2Id,
          // type: el.type,
          type: ["busy", "normal", "normal", "normal"][
            Math.floor(Math.random() * 2)
          ],
          used: el.usedForTime
        };
      });
    }
  },
  data() {
    return {
      linesBottom: [
        {
          line: [
            [116.321897, 39.894217],
            [116.4297, 39.902909]
          ],
          start: "beijingxi",
          end: "beijingzhan",
          type: "busy"
        },
        {
          line: [
            [116.321897, 39.894217],
            [116.163969, 39.90923]
          ],
          start: "beijingxi",
          end: "shougang",
          type: "busy"
        },
        {
          line: [
            [116.321897, 39.894217],
            [116.377859, 39.8655]
          ],
          start: "beijingxi",
          end: "beijingnan",
          type: "busy"
        }
      ],
      pointsBottom: [
        {
          lng: 116.321897,
          lat: 39.894217,
          name: "北京西节点",
          value: 5
        },
        {
          lng: 116.377859,
          lat: 39.8655,
          name: "北京南节点",
          value: 5
        },
        {
          lng: 116.4297,
          lat: 39.902909,
          name: "北京站节点",
          value: 5
        },
        {
          lng: 116.163969,
          lat: 39.90923,
          name: "新首钢节点",
          value: 5
        }
      ],
      polygon: [
        {
          polygon: [
            [
              [116.152686, 39.927319],
              [116.126078, 39.90441],
              [116.153372, 39.889923],
              [116.276969, 39.87517],
              [116.312674, 39.867528],
              [116.321944, 39.895191],
              [116.230963, 39.92179],
              [116.152686, 39.927319]
            ]
          ],
          value: 1
        },
        {
          polygon: [
            [
              [116.345976, 39.850134],
              [116.427344, 39.861731],
              [116.392325, 39.885445],
              [116.321944, 39.895191],
              [116.312674, 39.868319],
              [116.345976, 39.850134]
            ]
          ],
          value: 2
        },
        {
          polygon: [
            [
              [116.392325, 39.885445],
              [116.321944, 39.895191],
              [116.412066, 39.919157],
              [116.452063, 39.916129],
              [116.469916, 39.898879],
              [116.392325, 39.885445]
            ]
          ],
          value: 3
        }
      ]
    };
  },
  methods: {
    drawLines() {
      const linesLayer = new LineLayer({
        zIndex: 1,
        pickingBuffer: 5,
        name: "lines"
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
        // eslint-disable-next-line no-unused-vars
        .on("click", e => {
          this.lineClickEvent();
        });
      this.scene.addLayer(linesLayer);
    },
    drawSpLines() {
      const supportAll = new LineLayer({
        zIndex: 1,
        name: "supportAll"
      })
        .source(
          GeoJson.parse(
            this.lines.filter(el => el.used),
            { LineString: "line" }
          )
        )
        .size(2)
        .shape("line")
        .hide()
        .animate({
          duration: 3,
          interval: 0.8,
          trailLength: 0.8
        })
        .color("yellow");

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

      this.scene.addLayer(supportAll);
      this.scene.addLayer(linePy);
    },
    drawPoints() {
      const pointsTop = new PointLayer({
        zIndex: 1,
        name: "pointsTop"
      })
        .source(GeoJson.parse(this.pointsTop, { Point: ["lat", "lng"] }))
        .shape("circle")
        .color("Precision", Precision => {
          if (Precision === "最高时钟基准") return "rgba(255,255,0, 0.5)";
          else return "rgba(144,255,0, 0.5)";
        })
        .size(50)
        .animate(true)
        .active(true)
        .on("click", e => {
          this.pointClickEvent({
            name: e.feature.properties.name,
            Precision: e.feature.properties.precision
          });
        });

      const pointsMiddle = new PointLayer({
        zIndex: 1,
        name: "pointsMiddle"
      })
        .source(GeoJson.parse(this.pointsMiddle, { Point: ["lat", "lng"] }))
        .shape("circle")
        .color("rgba(255,0,78, 0.5)")
        .active(true)
        .size(50)
        .animate(true)
        .on("click", e => {
          this.pointClickEvent({
            name: e.feature.properties.name,
            Precision: e.feature.properties.Precision
          });
        });

      const textLayer = new PointLayer({
        zIndex: 2,
        name: "textLayer"
        // blend: 'additive',
      })
        .source(
          GeoJson.parse([...this.pointsTop, ...this.pointsMiddle], {
            Point: ["lat", "lng"]
          })
        )
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

      this.scene.addLayer(textLayer);
      this.scene.addLayer(pointsMiddle);
      this.scene.addLayer(pointsTop);
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
    const linesButtom = new LineLayer({
      zIndex: 1,
      pickingBuffer: 5,
      name: "linesBottom",
      blend: "additive"
    })
      .source(
        GeoJson.parse(
          this.linesBottom.filter(el => el.type),
          { LineString: "line" }
        )
      )
      .size(3)
      .shape("line")
      .active(true)
      .color("type", type => {
        if (type === "error") return "rgba(255,0,0,0.6)";
        if (type === "normal") return "rgba(0,255,0,0.6)";
        if (type === "busy") return "rgba(255,255,0,0.6)";
      })
      .animate({
        duration: 3,
        interval: 0.8,
        trailLength: 0.8
      })
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.lineClickEvent();
      })
      .hide();

    const pointsButtom = new PointLayer({
      zIndex: 2,
      name: "pointsButtom"
      // blend: 'additive',
    })
      .source(GeoJson.parse(this.pointsBottom, { Point: ["lat", "lng"] }))
      .shape("circle")
      .color("rgba(255,255,0, 0.5)")
      .size(50)
      .active(true)
      .animate(true)
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.pointClickEvent();
      })
      .hide();

    const polygonLayer = new PolygonLayer({
      name: "polygon",
      zIndex: 1
    })
      .source(GeoJson.parse(this.polygon, { Polygon: "polygon" }))
      .shape("fill")
      .color("value", value => {
        if (value === 1) return "blue";
        if (value === 2) return "green";
        if (value === 3) return "red";
      })
      .style({
        opacity: 0.2
      })
      .hide();
    scene.addLayer(linesButtom);
    scene.addLayer(pointsButtom);
    scene.addLayer(polygonLayer);

    setTimeout(() => {
      // eslint-disable-next-line no-unused-vars
      scene.on("zoomchange", e => {
        const zoom = scene.getZoom();
        const lines = scene.getLayerByName("lines");
        const pointsTop = scene.getLayerByName("pointsTop");
        const pointsMiddle = scene.getLayerByName("pointsMiddle");
        if (zoom < 6.33) {
          scene.setMapStyle("amap://styles/95af509712b1c1482568c22fb6a48ba1");
          lines.show();
          linesButtom.hide();
          pointsButtom.hide();
          polygonLayer.hide();
          pointsTop
            .animate(true)
            .size(50)
            .show();
          pointsMiddle
            .animate(false)
            .size(5)
            .show();
        } else if (zoom >= 6.33 && zoom < 11.07) {
          scene.setMapStyle("amap://styles/95af509712b1c1482568c22fb6a48ba1");
          lines.show();
          linesButtom.hide();
          pointsButtom.hide();
          polygonLayer.hide();

          pointsTop
            .animate(false)
            .size(10)
            .show();
          pointsMiddle
            .animate(true)
            .size(50)
            .show();
        } else {
          scene.setMapStyle("normal");
          // scene.setMapStyle("amap://styles/95af509712b1c1482568c22fb6a48ba1");
          linesButtom.show();
          pointsButtom.show();
          lines.hide();
          pointsTop.hide();
          pointsMiddle.hide();
          polygonLayer.show();
        }
      });
    }, 1000);

    this.scene = scene;
  },
  watch: {
    showType: {
      immediate: false,
      handler(newval) {
        let scene = this.scene;
        const lines = scene.getLayerByName("lines");
        const supportAll = scene.getLayerByName("supportAll");
        const linePy = scene.getLayerByName("linePy");
        if (newval === "support") {
          scene.setMapStatus({ zoomEnable: false });
          supportAll.show();
          linePy.show();
          lines.hide();
        } else {
          scene.setMapStatus({ zoomEnable: true });
          supportAll.hide();
          linePy.hide();
          lines.show();
        }
      }
    },
    links: {
      handler() {
        this.drawLines();
        this.drawSpLines();
      },
      immediate: false
    },
    nodes: {
      handler() {
        this.drawPoints();
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
@import "~@/assets/css/mixin/base.less";

.l7container {
  .mixin-width-height();
  padding: 0;
}
</style>

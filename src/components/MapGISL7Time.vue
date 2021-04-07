<template>
  <dir ref="contaniner" class="l7container" id="l7container"></dir>
</template>

<script>
import { Scene, LineLayer, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import GeoJson from "geojson";

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
    }
  },
  data() {
    return {
      linesTop: [
        {
          line: [
            [116.401548, 39.900276],
            [117.21179, 39.092786]
          ],
          start: "beijing",
          end: "tianjin",
          type: "error"
        },
        {
          line: [
            [116.401548, 39.900276],
            [112.64697, 37.975619]
          ],
          start: "beijing",
          end: "taiyuan",
          type: "normal"
        },
        {
          line: [
            [116.401548, 39.900276],
            [117.129392, 36.585782]
          ],
          start: "beijing",
          end: "jinan",
          type: "busy"
        },
        {
          line: [
            [116.401548, 39.900276],
            [113.679685, 34.882573]
          ],
          start: "beijing",
          end: "zhengzhou"
        },
        {
          line: [
            [116.401548, 39.900276],
            [108.976163, 34.323046]
          ],
          type: "normal"
        },
        {
          line: [
            [116.401548, 39.900276],
            [114.381437, 30.578838]
          ],
          type: "normal"
        },
        {
          line: [
            [116.401548, 39.900276],
            [101.813077, 36.489787]
          ],
          type: "normal"
        }
      ],
      pointsTop: [
        {
          lng: 116.401548,
          lat: 39.900276,
          name: "beijing",
          value: 5
        },
        {
          lng: 101.813077,
          lat: 36.489787,
          name: "beijing",
          value: 5
        },
        {
          lng: 114.381437,
          lat: 30.578838,
          name: "beijing",
          value: 5
        },
        {
          lng: 108.976163,
          lat: 34.323046,
          name: "beijing",
          value: 5
        }
      ],
      linesMiddle: [
        {
          line: [
            [116.320524, 39.773735],
            [116.012907, 39.532665]
          ],
          start: "daxing",
          end: "zhuozhou",
          type: "error"
        },
        {
          line: [
            [116.320524, 39.773735],
            [116.688566, 39.524191]
          ],
          start: "daxing",
          end: "langfang",
          type: "normal"
        },
        {
          line: [
            [116.688566, 39.524191],
            [116.402921, 39.120493]
          ],
          start: "langfang",
          end: "bazhou",
          type: "busy"
        },
        {
          line: [
            [116.402921, 39.120493],
            [115.936002, 38.941274]
          ],
          start: "bazhou",
          end: "anxin"
        }
      ],
      pointsMiddle: [
        {
          lng: 116.688566,
          lat: 39.524191,
          name: "langfang",
          value: 5
        },
        {
          lng: 117.129392,
          lat: 36.585782,
          name: "jinan",
          value: 5
        },
        {
          lng: 112.64697,
          lat: 37.975619,
          name: "taiyuan",
          value: 5
        }
      ],
      linesBottom: [
        {
          line: [
            [116.321897, 39.894217],
            [116.4297, 39.902909]
          ],
          start: "beijingxi",
          end: "beijingzhan",
          type: "error"
        },
        {
          line: [
            [116.321897, 39.894217],
            [116.163969, 39.90923]
          ],
          start: "beijingxi",
          end: "shougang",
          type: "normal"
        },
        {
          line: [
            [116.163969, 39.90923],
            [116.115217, 39.867081]
          ],
          start: "shougang",
          end: "beigong",
          type: "busy"
        },
        {
          line: [
            [116.321897, 39.894217],
            [116.377859, 39.8655]
          ],
          start: "beijingxi",
          end: "beijingnan"
        }
      ],
      pointsBottom: [
        {
          lng: 116.321897,
          lat: 39.894217,
          name: "beijingxi",
          value: 5
        },
        {
          lng: 116.377859,
          lat: 39.8655,
          name: "beijingnan",
          value: 5
        },
        {
          lng: 116.4297,
          lat: 39.902909,
          name: "beijingzhan",
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
        center: [116.408414, 39.896061],
        zoom: 5.5,
        minZoom: 5.5
      })
    });
    const linesTop = new LineLayer({
      zIndex: 1,
      pickingBuffer: 5,
      name: "linesTop"
    })
      .source(
        GeoJson.parse(
          this.linesTop.filter(el => el.type),
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
      .animate({
        duration: 3,
        interval: 0.8,
        trailLength: 0.8
      })
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.lineClickEvent();
      });

    const linesTopAll = new LineLayer({
      blend: "additive",
      zIndex: 1,
      name: "linesTopAll"
    })
      .source(GeoJson.parse(this.linesTop, { LineString: "line" }))
      .size(2)
      .shape("line")
      .color("rgba(30,66,124,0.5)");

    const pointsTop = new PointLayer({
      zIndex: 2,
      name: "pointsTop"
    })
      .source(GeoJson.parse(this.pointsTop, { Point: ["lat", "lng"] }))
      .shape("circle")
      .color("rgba(255,255,0, 0.5)")
      .size(10)
      .active(true)
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.pointClickEvent();
      });

    const linesMiddle = new LineLayer({
      zIndex: 1,
      pickingBuffer: 5,
      name: "linesMiddle"
    })
      .source(
        GeoJson.parse(
          this.linesMiddle.filter(el => el.type),
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
      .animate({
        duration: 3,
        interval: 0.8,
        trailLength: 0.8
      })
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.lineClickEvent();
      });

    const linesMiddleAll = new LineLayer({
      blend: "additive",
      zIndex: 1,
      name: "linesMiddleAll"
    })
      .source(GeoJson.parse(this.linesMiddle, { LineString: "line" }))
      .size(2)
      .shape("line")
      .color("rgba(30,66,124,0.5)");

    const pointsMiddle = new PointLayer({
      zIndex: 2,
      name: "pointsMiddle"
    })
      .source(GeoJson.parse(this.pointsMiddle, { Point: ["lat", "lng"] }))
      .shape("circle")
      .color("rgba(255,0,78, 0.5)")
      .size(10)
      .active(true)
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.pointClickEvent();
      });

    const linesButtom = new LineLayer({
      zIndex: 1,
      pickingBuffer: 5,
      name: "linesBottom"
    })
      .source(
        GeoJson.parse(
          this.linesBottom.filter(el => el.type),
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
      .animate({
        duration: 3,
        interval: 0.8,
        trailLength: 0.8
      })
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.lineClickEvent();
      });

    const linesButtomAll = new LineLayer({
      blend: "additive",
      zIndex: 1,
      name: "linesBottomAll"
    })
      .source(GeoJson.parse(this.linesBottom, { LineString: "line" }))
      .size(2)
      .shape("line")
      .color("rgba(30,66,124,0.5)");

    const pointsButtom = new PointLayer({
      zIndex: 2,
      name: "pointsButtom"
    })
      .source(GeoJson.parse(this.pointsBottom, { Point: ["lat", "lng"] }))
      .shape("circle")
      .color("rgba(255,255,0, 0.5)")
      .size(10)
      .active(true)
      // eslint-disable-next-line no-unused-vars
      .on("click", e => {
        this.pointClickEvent();
      });

    scene.addLayer(linesTop);
    scene.addLayer(linesTopAll);
    scene.addLayer(pointsTop);
    scene.addLayer(linesMiddle);
    scene.addLayer(linesMiddleAll);
    scene.addLayer(pointsMiddle);
    scene.addLayer(linesButtom);
    scene.addLayer(linesButtomAll);
    scene.addLayer(pointsButtom);
    linesMiddle.show();
    linesMiddleAll.show();
    pointsMiddle.hide();
    linesButtom.hide();
    linesButtomAll.hide();
    pointsButtom.hide();

    pointsTop.animate(true).size(50);
    pointsMiddle.animate(true).size(50);
    // eslint-disable-next-line no-unused-vars
    scene.on("zoomchange", e => {
      console.log(scene.getZoom());
      const zoom = scene.getZoom();
      if (zoom < 6.33) {
        linesTop.show();
        linesTopAll.show();
        pointsTop.show();
        linesMiddle.show();
        linesMiddleAll.show();
        pointsMiddle.hide();
        linesButtom.hide();
        linesButtomAll.hide();
        pointsButtom.hide();

        pointsTop.animate(true).size(50);
        pointsMiddle.animate(false).size(10);
      } else if (zoom >= 6.33 && zoom < 11.07) {
        linesMiddle.show();
        linesMiddleAll.show();
        pointsMiddle.show();
        linesTop.show();
        linesTopAll.show();
        pointsTop.show();
        linesButtom.hide();
        linesButtomAll.hide();
        pointsButtom.hide();

        pointsTop.animate(false).size(10);
        pointsMiddle.animate(true).size(50);
      } else {
        linesButtom.show();
        linesButtomAll.show();
        pointsButtom.show();
        linesTop.hide();
        linesTopAll.hide();
        pointsTop.hide();
        linesMiddle.hide();
        linesMiddleAll.hide();
        pointsMiddle.hide();
      }
    });

    this.sceneDes = scene.destroy;
  },
  beforeDestroy() {
    this.sceneDes();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base.less";
.l7container {
  .mixin-width-height();
}
</style>

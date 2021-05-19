<template>
  <div class="main-area">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// import { CITYMAP } from "@/util";
// import imageurl from "./colors2.png";
import { getPointsLocation } from "../../api/mock/nodeAndLink";

export default {
  name: "Map",
  props: {
    status: {
      type: String,
      required: true
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
  computed: {},
  data() {
    return {
      viewer: {},
      detailLine: [
        {
          name: "path1",
          path: [
            [116.403613, 39.913802],
            [116.580076, 39.676562]
          ]
        },
        {
          name: "path2",
          path: [
            [116.580076, 39.676562],
            [116.709165, 39.526309]
          ]
        },
        {
          name: "path3",
          path: [
            [116.709165, 39.526309],
            [117.129392, 39.271621]
          ]
        },
        {
          name: "path4",
          path: [
            [117.129392, 39.271621],
            [117.218439, 39.144401]
          ]
        }
      ],
      detailPoint: [
        // {
        //   name: 'point1',
        //   geo: [116.403613,39.913802]
        // },
        {
          name: "大兴区站点",
          geo: [116.580076, 39.676562]
        },
        {
          name: "廊坊站点",
          geo: [116.709165, 39.526309]
        },
        {
          name: "武清区站点",
          geo: [117.129392, 39.271621]
        }
      ]
    };
  },
  mounted() {
    var Cesium = this.Cesium;
    var _this = this;
    //var cesiumContainer = document.getElementById("cesiumContainer");
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODgyZDRlYi0zYThiLTQ3NjEtYTYwYy00YmM5YjU5OTM1NmMiLCJpZCI6NDEwOTIsImlhdCI6MTYwOTc1MDkwNX0.yakL4sJ7vf7aVp8e9eqjdyBd42s-fL5CjX4axDvaJrI";
    this.viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
      orderIndependentTranslucency: false,
      contextOptions: {
        webgl: {
          alpha: true
        }
      },
      sceneModePicker: false, // 2d 3d选择按钮
      navigationHelpButton: false, // 导航帮助按钮
      timeline: false, // 时间轴
      animation: false, // 左下角动画
      baseLayerPicker: false, //是否显示图层选择器
      sceneMode: Cesium.SceneMode.COLUMBUS_VIEW, //初始场景模式
      infoBox: false, //Disable InfoBox widget
      selectionIndicator: false, //Disable selection indicator
      shouldAnimate: true // Enable animations
    });

    // this.viewer.scene.highDynamicRange = true  HDR是否开启

    // function PolylineTrailLinkMaterialProperty(color, duration) {
    //     this._definitionChanged = new Cesium.Event();
    //     this._color = undefined;
    //     this._colorSubscription = undefined;
    //     this.color = color;
    //     this.duration = duration || 3000;
    //     this._time = (new Date()).getTime();
    //     this.isTranslucent = function () {
    //         return true;
    //     }
    // }
    // //1.69版本使用这个，感谢LEARNER GEX
    //  Object.defineProperties(PolylineTrailLinkMaterialProperty.prototype, {
    // //Cesium.defineProperties(PolylineTrailLinkMaterialProperty.prototype, {
    //     isConstant: {
    //         get: function () {
    //             return false;
    //         }
    //     },
    //     definitionChanged: {
    //         get: function () {
    //             return this._definitionChanged;
    //         }
    //     },
    //     color: Cesium.createPropertyDescriptor('color')
    // });
    // PolylineTrailLinkMaterialProperty.prototype.getType = function (time) {
    //     return 'PolylineTrailLink';
    // }
    // PolylineTrailLinkMaterialProperty.prototype.getValue = function (time, result) {
    //     if (!Cesium.defined(result)) {
    //         result = {};
    //     }
    //     result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color);
    //     result.image = Cesium.Material.PolylineTrailLinkImage;
    //     result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration;
    //     return result;
    // }
    // PolylineTrailLinkMaterialProperty.prototype.equals = function (other) {
    //     return this === other ||
    //         (other instanceof PolylineTrailLinkMaterialProperty &&
    //             Cesium.Property.equals(this._color, other._color))
    // }
    // Cesium.PolylineTrailLinkMaterialProperty = PolylineTrailLinkMaterialProperty;
    // Cesium.Material.PolylineTrailLinkType = 'PolylineTrailLink';
    // Cesium.Material.PolylineTrailLinkImage = imageurl;
    // Cesium.Material.PolylineTrailLinkSource = "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
    //                                                 {\n\
    //                                                     czm_material material = czm_getDefaultMaterial(materialInput);\n\
    //                                                     vec2 st = materialInput.st;\n\
    //                                                     vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
    //                                                     material.alpha = colorImage.a * color.a;\n\
    //                                                     material.diffuse = (colorImage.rgb+color.rgb)/2.0;\n\
    //                                                     return material;\n\
    //                                                 }";
    // Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType, {
    //     fabric: {
    //         type: Cesium.Material.PolylineTrailLinkType,
    //         uniforms: {
    //             color: new Cesium.Color(0.0, 0.0, 1.0, 0.5),
    //             image: Cesium.Material.PolylineTrailLinkImage,
    //             time: 20
    //         },
    //         source: Cesium.Material.PolylineTrailLinkSource
    //     },
    //     translucent: function (material) {
    //         return true;
    //     }
    // });

    this.viewer.camera.setView({
      // Cesium的坐标是以地心为原点，一向指向南美洲，一向指向亚洲，一向指向北极州
      // fromDegrees()方法，将经纬度和高程转换为世界坐标
      destination: Cesium.Cartesian3.fromDegrees(105.461633, -10, 4500000),
      orientation: {
        // 指向
        heading: Cesium.Math.toRadians(0),
        // 视角
        pitch: Cesium.Math.toRadians(-45),
        roll: 0.0
      }
    });

    // this.viewer.imageryLayers.addImageryProvider(layer);
    //Enable depth testing so things behind the terrain disappear.
    this.viewer.scene.globe.depthTestAgainstTerrain = true;
    // 去除天空并设置透明背景
    this.viewer.scene.skyBox.show = false;
    this.viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);

    this.viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
      function(e) {
        e.cancel = true;
        //你要飞的位置
        _this.viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(105.461633, -10, 4500000),
          orientation: {
            // 指向
            heading: Cesium.Math.toRadians(0),
            // 视角
            pitch: Cesium.Math.toRadians(-45),
            roll: 0.0
          }
        });
      }
    );

    this.drawDetailLine();

    this.drawDetailPoint();

    var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction(click => {
      console.log("左键单击事件：", click.position);
      console.log(this.viewer.camera);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
  methods: {
    lineCenter: function(linkId) {
      let link = this.links.find(item => item.id === linkId);
      let node1 = this.nodes.find(item => item.id === link.node1Id).location;
      let node2 = this.nodes.find(item => item.id === link.node2Id).location;
      return [(node1[0] + node2[0]) / 2, (node1[1] + node2[1]) / 2];
    },
    computeCirclularFlight() {
      for (const p of this.nodes) {
        let position = this.Cesium.Cartesian3.fromDegrees(
          ...[...p.location, 1000]
        );

        this.viewer.entities.add({
          position: position,
          box: {
            dimensions: new this.Cesium.Cartesian3(200, 200, 200),
            material: p.bulided
              ? this.Cesium.Color.YELLOW.withAlpha(0.5)
              : this.Cesium.Color.DARKGRAY.withAlpha(0.5),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
            // pixeloffset: new this.Cesium.Cartesian2(25, 75)
          },
          cylinder: {
            topRadius: 1,
            bottomRadius: 1,
            length: 15000,
            material: this.Cesium.Color.WHITE.withAlpha(0.2)
          },

          label: {
            text: p.name,
            font: "600 normal 14pt FangSong",
            style: this.Cesium.LabelStyle.FILL,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            heightReference: this.Cesium.HeightReference.RELATIVE_TO_GROUND,
            horizontalOrigin: this.Cesium.HorizontalOrigin.RIGHT
          }
        });
      }
    },
    drawLine() {
      let Cesium = this.Cesium;
      this.links.forEach(ele => {
        this.viewer.entities.add({
          id: ele.id,
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([
              ...[...getPointsLocation(ele.node1Id), 1000],
              ...[...getPointsLocation(ele.node2Id), 1000]
            ]),
            width: ele.bulided ? 10 : 5,
            clampToGround: true,
            material: ele.bulided
              ? new Cesium.PolylineGlowMaterialProperty({
                  color: Cesium.Color.YELLOW,
                  glowPower: 0.2
                })
              : Cesium.Color.DARKGRAY
          }
        });
      });
    },
    drawPoint() {
      let Cesium = this.Cesium;
      for (const p of this.nodes) {
        let position = Cesium.Cartesian3.fromDegrees(...[...p.location, 1000]);
        this.viewer.entities.add({
          position: position,
          id: p.id,
          point: {
            pixelSize: 14,
            color: Cesium.Color.WHITE.withAlpha(0.8),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          }
        });
      }
    },
    changePointVis(status) {
      for (const p of this.nodes) {
        let pointEn = this.viewer.entities.getById(p.id);
        pointEn.point.show = status;
      }
    },
    drawDetailLine() {
      let Cesium = this.Cesium;
      this.detailLine.forEach(ele => {
        this.viewer.entities.add({
          id: ele.id,
          show: false,
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([
              ...[...ele.path[0], 1000],
              ...[...ele.path[1], 1000]
            ]),
            width: 10,
            clampToGround: true,
            material: new Cesium.PolylineGlowMaterialProperty({
              color: Cesium.Color.YELLOW,
              glowPower: 0.2
            })
          }
        });
      });
    },
    drawDetailPoint() {
      let Cesium = this.Cesium;
      this.detailPoint.forEach(ele => {
        let position = Cesium.Cartesian3.fromDegrees(...[...ele.geo, 1000]);
        this.viewer.entities.add({
          position: position,
          id: ele.id,
          show: false,
          box: {
            dimensions: new this.Cesium.Cartesian3(800, 800, 800),
            material: this.Cesium.Color.ORANGE.withAlpha(0.5),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: ele.name,
            font: "600 normal 14pt FangSong",
            style: this.Cesium.LabelStyle.FILL,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            heightReference: this.Cesium.HeightReference.RELATIVE_TO_GROUND,
            horizontalOrigin: this.Cesium.HorizontalOrigin.RIGHT
          }
        });
      });
    },
    changeDetailStatus(status) {
      this.detailPoint.forEach(ele => {
        let pointEn = this.viewer.entities.getById(ele.id);
        pointEn.show = status;
      });

      this.detailLine.forEach(ele => {
        let lineEn = this.viewer.entities.getById(ele.id);
        lineEn.show = status;
      });
    },
    changeLineStatus(status) {
      let lineEn = this.viewer.entities.getById("北京-天津");
      lineEn.show = status;
    }
  },
  watch: {
    status: {
      handler(newVal) {
        // const Cartesian3 = this.Cesium.Cartesian3;
        if (newVal === "") {
          // this.changePointVis(true);
          // this.changeDetailStatus(false);
          // this.changeLineStatus(true);
          this.viewer.camera.flyTo({
            // Cesium的坐标是以地心为原点，一向指向南美洲，一向指向亚洲，一向指向北极州
            // fromDegrees()方法，将经纬度和高程转换为世界坐标
            destination: this.Cesium.Cartesian3.fromDegrees(
              105.461633,
              -10,
              4500000
            ),
            orientation: {
              // 指向
              heading: this.Cesium.Math.toRadians(0),
              // 视角
              pitch: this.Cesium.Math.toRadians(-45),
              roll: 0.0
            }
          });
        } else if (newVal.includes("-")) {
          // this.changeDetailStatus(true);
          // this.changeLineStatus(false);
          // this.changePointVis(false);

          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(
              ...[...this.lineCenter(newVal), 40000]
            ),
            orientation: {
              heading: 0.015150003699918813,
              pitch: -0.681915232851062,
              roll: 6.283185307179586
            }
          });
        } else {
          let dest;
          // this.changePointVis(false);
          // this.changeLineStatus(true);
          // this.changeDetailStatus(false);
          for (let node of this.nodes) {
            if (node.id === newVal) {
              dest = node.location;
              break;
            }
          }
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(...[...dest, 5000]),
            orientation: {
              // 指向
              heading: this.Cesium.Math.toRadians(0),
              // 视角
              pitch: this.Cesium.Math.toRadians(-80),
              roll: this.Cesium.Math.toRadians(0)
            }
          });
        }
      },
      immediate: false
    },
    nodes: {
      handler() {
        this.computeCirclularFlight();
        this.drawPoint();
      },
      immediate: false
    },
    links: {
      handler() {
        this.drawLine();
      },
      immediate: false
    }
  }
};
</script>

<style scoped>
.main-area {
  width: 100%;
  height: 100%;
}

#cesiumContainer {
  width: 100%;
  height: 99%;
}
</style>

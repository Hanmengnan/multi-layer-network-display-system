<template>
  <div class="main-area">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
/// <reference path="node_modules/@types/cesium/index.d.ts"/>
import { CITYMAP } from "@/util";

export default {
  name: "Map",
  props: {
    status: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      viewer: {},
      addresses2: [
        // 北京周边山区的点
        [116.155512, 39.945093, 290],
        [116.150512, 39.942493, 210],
        [116.145512, 39.941493, 210],
        [116.139512, 39.941493, 120],
        [116.135512, 39.943493, 110]
      ],
      addresses: {
        jiedian1: [116.155512, 39.945093, 290, "节点1"],
        jiedian2: [116.150512, 39.942493, 210, "节点2"],
        jiedian3: [116.145512, 39.941493, 210, "节点3"],
        jiedian4: [116.139512, 39.941493, 120, "节点4"],
        jiedian5: [116.135512, 39.943493, 110, "节点5"],
        kashi: [76.055611, 39.50305, 300, "喀什"],
        wulumuqi: [87.620414, 43.828474, 1000, "乌鲁木齐"],
        lasa: [91.173284, 29.655219, 2000, "拉萨"],
        beijing: [116.403613, 39.913802, 1000, "北京"], //北京
        shijiazhuang: [114.51463, 38.046721, 1000, "石家庄"],
        huhehaote: [111.749188, 40.846894, 1000, "呼和浩特"], //呼和浩特
        shanghai: [121.47824, 31.236423, 1000, "上海"], //上海
        hangzhou: [120.212061, 30.256576, 1000, "杭州"], //杭州
        shenzhen: [114.063402, 22.552728, 1000, "深圳"], //深圳
        sanya: [109.515685, 18.262581, 1000, "三亚"], //三亚
        nanning: [108.371729, 22.822074, 1000, "南宁"], //南宁
        kunming: [102.836568, 24.889419, 1000, "昆明"], //昆明
        chengdu: [104.068146, 30.66601, 1000, "成都"], //成都
        xian: [108.946465, 34.347031, 1000, "西安"], //西安
        taiyuan: [112.554671, 37.875395, 1000, "太原"],
        wuhan: [114.311011, 30.59971, 1000, "武汉"],
        guiyang: [106.640604, 26.653582, 1000, "贵阳"],
        chongqing: [106.556712, 29.565729, 1000, "重庆"], //重庆
        zhengzhou: [113.666486, 34.753677, 1000, "郑州"], //郑州
        jinan: [117.126399, 36.655396, 1000, "济南"], //济南
        tianjin: [117.218439, 39.144401, 1000, "天津"], //天津
        haerbin: [126.54621, 45.812441, 1000, "哈尔滨"], //哈尔滨
        changchun: [125.330606, 43.820913, 1000, "长春"], //长春
        shenyang: [123.463046, 41.689002, 1000, "沈阳"], //沈阳
        dalian: [121.622778, 38.927936, 1000, "大连"], //大连
        huludao: [120.873295, 40.759783, 1000, "葫芦岛"], //葫芦岛
        nanjing: [118.803572, 32.069548, 1000, "南京"], //南京
        fuzhou: [119.301745, 26.081467, 1000, "福州"], //福州
        guangzhou: [113.274879, 23.13507, 1000, "广州"],
        nanchang: [115.861136, 28.691483, 1000, "南昌"], //南昌
        changsha: [112.946045, 28.236927, 1000, "长沙"], //长沙
        akesu: [80.269814, 41.183934, 1000, "阿克苏"], //阿克苏
        kuerle: [86.199312, 41.754547, 1000, "库尔勒"], //库尔勒
        hami: [93.512588, 42.859038, 1000, "哈密"], //哈密
        jiuquan: [98.501256, 39.737358, 1000, "酒泉"], //酒泉
        wuwei: [102.641681, 37.935972, 1000, "武威"], //武威
        naqv: [92.053888, 31.480713, 1000, "那曲"], //那曲
        geermu: [94.913191, 36.404239, 1000, "格尔木"], //格尔木
        xining: [101.786746, 36.62269, 1000, "西宁"],
        lanzhou: [103.844548, 36.067002, 1000, "兰州"], //兰州
        pingliang: [106.671444, 35.552286, 1000, "平凉"], //平凉
        taibei: [121.560741, 25.040524, 1000, "台北"]
      },
      cityLine: [
        ["haerbin", "changchun"],
        ["changchun", "shenyang"],
        ["shenyang", "dalian"],
        ["shenyang", "huludao"],
        ["huludao", "tianjin"],
        ["tianjin", "jinan"],
        ["jinan", "nanjing"],
        ["nanjing", "shanghai"],
        ["shanghai", "hangzhou"],
        ["hangzhou", "fuzhou"],
        ["fuzhou", "shenzhen"],
        ["shenzhen", "guangzhou"],
        ["nanning", "kunming"],
        ["kunming", "chengdu"],
        ["chengdu", "xian"],
        ["xian", "taiyuan"],
        ["taiyuan", "beijing"],
        ["beijing", "shijiazhuang"],
        ["shijiazhuang", "zhengzhou"],
        ["zhengzhou", "xian"],
        ["zhengzhou", "wuhan"],
        ["wuhan", "changsha"],
        ["changsha", "guiyang"],
        ["guiyang", "kunming"],
        ["nanning", "guangzhou"],
        ["chengdu", "chongqing"],
        ["chongqing", "wuhan"],
        ["changsha", "guangzhou"],
        ["changsha", "nanchang"],
        ["nanchang", "hangzhou"],
        ["beijing", "tianjin"],
        ["beijing", "huhehaote"],
        ["huhehaote", "lanzhou"],
        ["xian", "pingliang"],
        ["pingliang", "lanzhou"],
        ["lanzhou", "xining"],
        ["xining", "geermu"],
        ["geermu", "naqv"],
        ["naqv", "lasa"],
        ["lanzhou", "wuwei"],
        ["wuwei", "jiuquan"],
        ["jiuquan", "hami"],
        ["hami", "wulumuqi"],
        ["wulumuqi", "kuerle"],
        ["kuerle", "akesu"],
        ["akesu", "kashi"],
        ["jiedian1", "jiedian2"],
        ["jiedian2", "jiedian3"],
        ["jiedian3", "jiedian4"],
        ["jiedian4", "jiedian5"]
      ]
    };
  },
  mounted() {
    var Cesium = this.Cesium;
    var _this = this;
    // var cesiumContainer = document.getElementById("cesiumContainer");
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
      // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      //      url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb",
      //           layer: "tdtBasicLayer",
      //           style: "default",
      //           format: "tiles",
      //           tileMatrixSetID: "GoogleMapsCompatible",
      //           show: true,
      //           maximumLevel: 18
      //   })
      // terrainProvider: new Cesium.CesiumTerrainProvider({
      //   url: Cesium.IonResource.fromAssetId(3956),
      // }),
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
    // var layer=new Cesium.MapboxStyleImageryProvider({
    //   // url: 'mapbox://styles/mapbox/',
    //   styleId: 'dark-v10',
    //   // styleId: 'streets-v11',
    //   accessToken: 'pk.eyJ1IjoidGhlYWZhbm4iLCJhIjoiY2tjYTVrd3FqMTdveDJ0cXRlaHI0c2x1MiJ9.LpnZOmi5XKeCKwJYjliSfg',
    //   scaleFactor:true
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

    this.computeCirclularFlight();

    // this.drawBluePin()
    this.drawLine();
    // this.viewer.entities.add({
    //   polyline: {
    //     positions: Cesium.Cartesian3.fromDegreesArrayHeights([
    //       116.155512,//端点横坐标
    //       39.945093,//端点纵坐标
    //       290,//端点距离地面的高度
    //       116.150512,
    //       39.942493,
    //       210
    //     ]),
    //     width: 5,
    //     material: new Cesium.PolylineOutlineMaterialProperty({
    //       color: Cesium.Color.YELLOW,
    //       outlineWidth: 2,
    //       outlineColor: Cesium.Color.BLACK,
    //     }),
    //   },
    // });
    var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction(function(click) {
      console.log("左键单击事件：", click.position);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
  methods: {
    computeCirclularFlight() {
      for (const p in this.addresses) {
        let position = this.Cesium.Cartesian3.fromDegrees(
          ...this.addresses[p].slice(0, 3)
        );
        this.viewer.entities.add({
          position: position,
          point: {
            pixelSize: 10,
            color: this.Cesium.Color.YELLOW,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: this.addresses[p][3],
            font: "14pt monospace",
            style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
            // pixelOffset : new Cesium.Cartesian2(0, -9)
          }
        });
      }
    },
    // 名字
    drawLine() {
      let Cesium = this.Cesium;
      this.cityLine.forEach(ele => {
        this.viewer.entities.add({
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([
              ...this.addresses[ele[0]].slice(0, 3),
              ...this.addresses[ele[1]].slice(0, 3)
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
    }
  },
  watch: {
    status: {
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        // eslint-disable-next-line no-unused-vars
        const Cartesian3 = this.Cesium.Cartesian3;
        console.log(this.viewer.camera);
        if (newVal === "") {
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
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(
              116.911354,
              38.87,
              40000
            ),
            orientation: {
              heading: 0.015150003699918813,
              pitch: -0.681915232851062,
              roll: 6.283185307179586
            }
          });
        } else {
          let dest;
          for (let key in CITYMAP) {
            if (CITYMAP[key] === newVal) {
              dest = key;
              break;
            }
          }
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(
              this.addresses[dest][0],
              this.addresses[dest][1],
              10000
            ),
            orientation: {
              // 指向
              heading: this.Cesium.Math.toRadians(0),
              // 视角
              pitch: this.Cesium.Math.toRadians(-90),
              roll: 0.0
            }
          });
        }
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

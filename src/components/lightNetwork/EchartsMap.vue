<template>
  <div id="echartsMap"></div>
</template>

<script>
import echarts from "echarts";
import china from "@/assets/map/china.json";

export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      innerStatus: "",
      BJData: [
        [
          {
            name: "哈尔滨"
          },
          {
            name: "长春"
          }
        ],
        [
          {
            name: "长春"
          },
          {
            name: "沈阳"
          }
        ],
        [
          {
            name: "沈阳"
          },
          {
            name: "大连"
          }
        ],
        [
          {
            name: "沈阳"
          },
          {
            name: "葫芦岛"
          }
        ],
        [
          {
            name: "葫芦岛"
          },
          {
            name: "天津"
          }
        ],
        [
          {
            name: "天津"
          },
          {
            name: "济南"
          }
        ],
        [
          {
            name: "济南"
          },
          {
            name: "南京"
          }
        ],
        [
          {
            name: "南京"
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "杭州"
          }
        ],
        [
          {
            name: "杭州"
          },
          {
            name: "福州"
          }
        ],
        [
          {
            name: "福州"
          },
          {
            name: "深圳"
          }
        ],
        [
          {
            name: "深圳"
          },
          {
            name: "广州"
          }
        ],
        [
          {
            name: "南宁"
          },
          {
            name: "昆明"
          }
        ],
        [
          {
            name: "昆明"
          },
          {
            name: "成都"
          }
        ],
        [
          {
            name: "成都"
          },
          {
            name: "西安"
          }
        ],
        [
          {
            name: "西安"
          },
          {
            name: "太原"
          }
        ],
        [
          {
            name: "太原"
          },
          {
            name: "北京"
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "石家庄"
          }
        ],
        [
          {
            name: "石家庄"
          },
          {
            name: "郑州"
          }
        ],
        [
          {
            name: "郑州"
          },
          {
            name: "西安"
          }
        ],
        [
          {
            name: "郑州"
          },
          {
            name: "武汉"
          }
        ],
        [
          {
            name: "武汉"
          },
          {
            name: "长沙"
          }
        ],
        [
          {
            name: "长沙"
          },
          {
            name: "贵阳"
          }
        ],
        [
          {
            name: "贵阳"
          },
          {
            name: "昆明"
          }
        ],
        [
          {
            name: "南宁"
          },
          {
            name: "广州"
          }
        ],
        [
          {
            name: "成都"
          },
          {
            name: "重庆"
          }
        ],
        [
          {
            name: "重庆"
          },
          {
            name: "武汉"
          }
        ],
        [
          {
            name: "长沙"
          },
          {
            name: "广州"
          }
        ],
        [
          {
            name: "长沙"
          },
          {
            name: "南昌"
          }
        ],
        [
          {
            name: "南昌"
          },
          {
            name: "杭州"
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "天津"
          }
        ],
        [
          {
            name: "北京"
          },
          {
            name: "呼和浩特"
          }
        ],
        [
          {
            name: "呼和浩特"
          },
          {
            name: "兰州"
          }
        ],
        [
          {
            name: "武威"
          },
          {
            name: "酒泉"
          }
        ],
        [
          {
            name: "兰州"
          },
          {
            name: "武威"
          }
        ],
        [
          {
            name: "那曲"
          },
          {
            name: "拉萨"
          }
        ],
        [
          {
            name: "那曲"
          },
          {
            name: "格尔木"
          }
        ],
        [
          {
            name: "格尔木"
          },
          {
            name: "西宁"
          }
        ],
        [
          {
            name: "西宁"
          },
          {
            name: "兰州"
          }
        ],
        [
          {
            name: "平凉"
          },
          {
            name: "兰州"
          }
        ],
        [
          {
            name: "西安"
          },
          {
            name: "平凉"
          }
        ],
        [
          {
            name: "酒泉"
          },
          {
            name: "哈密"
          }
        ],
        [
          {
            name: "哈密"
          },
          {
            name: "乌鲁木齐"
          }
        ],
        [
          {
            name: "乌鲁木齐"
          },
          {
            name: "库尔勒"
          }
        ],
        [
          {
            name: "库尔勒"
          },
          {
            name: "阿克苏"
          }
        ],
        [
          {
            name: "阿克苏"
          },
          {
            name: "喀什"
          }
        ]
      ],
      geoCoordMap: {
        喀什: [76.055611, 39.50305],
        乌鲁木齐: [87.620414, 43.828474],
        拉萨: [91.173284, 29.655219],
        北京: [116.403613, 39.913802],
        石家庄: [114.51463, 38.046721],
        呼和浩特: [111.749188, 40.846894], //呼和浩特
        上海: [121.47824, 31.236423], //上海
        杭州: [120.212061, 30.256576], //杭州
        深圳: [114.063402, 22.552728], //深圳
        三亚: [109.515685, 18.262581], //三亚
        南宁: [108.371729, 22.822074], //南宁
        昆明: [102.836568, 24.889419], //昆明
        成都: [104.068146, 30.66601], //成都
        西安: [108.946465, 34.347031], //西安
        太原: [112.554671, 37.875395],
        武汉: [114.311011, 30.59971],
        贵阳: [106.640604, 26.653582],
        重庆: [106.556712, 29.565729], //重庆
        郑州: [113.666486, 34.753677], //郑州
        济南: [117.126399, 36.655396], //济南
        天津: [117.218439, 39.144401], //天津
        哈尔滨: [126.54621, 45.812441], //哈尔滨
        长春: [125.330606, 43.820913], //长春
        沈阳: [123.463046, 41.689002], //沈阳
        大连: [121.622778, 38.927936], //大连
        葫芦岛: [120.873295, 40.759783], //葫芦岛
        南京: [118.803572, 32.069548], //南京
        福州: [119.301745, 26.081467], //福州
        广州: [113.274879, 23.13507],
        南昌: [115.861136, 28.691483], //南昌
        长沙: [112.946045, 28.236927], //长沙
        阿克苏: [80.269814, 41.183934], //阿克苏
        库尔勒: [86.199312, 41.754547], //库尔勒
        哈密: [93.512588, 42.859038], //哈密
        酒泉: [98.501256, 39.737358], //酒泉
        武威: [102.641681, 37.935972], //武威
        那曲: [92.053888, 31.480713], //那曲
        格尔木: [94.913191, 36.404239], //格尔木
        西宁: [101.786746, 36.62269],
        兰州: [103.844548, 36.067002], //兰州
        平凉: [106.671444, 35.552286], //平凉
        台北: [121.560741, 25.040524]
      }
    };
  },
  watch: {
    value(newVal) {
      this.innerStatus = newVal;
    },
    innerStatus(newVal) {
      this.$emit("input", newVal);
    }
  },
  mounted() {
    echarts.registerMap("china", china);
    let myChart = echarts.init(document.getElementById("echartsMap"));
    let _this = this;
    var series = [];
    // eslint-disable-next-line no-unused-vars
    [["上海", this.BJData]].forEach(function(item, i) {
      series.push(
        {
          name: "",
          type: "lines",
          zlevel: 2,
          effect: {
            show: true,
            color: "#FF0000",
            symbolSize: 2 //图标大小
          },
          lineStyle: {
            normal: {
              color: "#FF0000",
              width: 2 //尾迹线条宽度
            }
          },
          data: _this.convertData2(item[1])
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: "stroke", //波纹绘制方式 stroke, fill
            scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: "right", //显示位置
              offset: [5, 0], //偏移设置
              formatter: "{b}" //圆环显示文字
            },
            emphasis: {
              show: true,
              color: "#FF6A6A"
            }
          },
          symbol: "circle",
          // eslint-disable-next-line no-unused-vars
          symbolSize: function(val) {
            return 5; //圆环大小
          },
          itemStyle: {
            normal: {
              show: true
            },
            emphasis: {
              show: true,
              color: "#FF6A6A"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: _this.geoCoordMap[dataItem[0].name].concat(100)
            };
          })
        }
      );
    });
    // eslint-disable-next-line no-unused-vars
    var svg =
      "path://M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z";

    var option = {
      backgroundColor: "",
      tooltip: {
        // trigger: "item",
        // backgroundColor: "#1540a1",
        // borderColor: "#FFFFCC",
        // showDelay: 0,
        // hideDelay: 0,
        // enterable: true,
        // transitionDuration: 0,
        // extraCssText: "z-index:100",
        // formatter: function(params, ticket, callback) {
        //   var res = "";
        //   var name = params.name;
        //   var value = params.value[params.seriesIndex + 1];
        //   res =
        //     "<span style='color:#fff;'>" +
        //     name +
        //     "</span><br/>数据：" +
        //     value;
        //   return res;
        // }
      },
      visualMap: {
        //图例值控制
        show: false,
        type: "piecewise",
        pieces: [
          {
            max: 80,
            color: "green"
          },
          {
            min: 80,
            max: 120,
            color: "yellow"
          },
          {
            min: 120,
            color: "red"
          }
        ],
        calculable: true
      },
      geo: {
        map: "china",
        show: true,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: false, //是否允许缩放
        layoutCenter: ["40%", "50%"], //地图位置
        layoutSize: "120%",
        itemStyle: {
          normal: {
            show: "true",
            color: "#04284e", //地图背景色
            borderColor: "#5bc1c9" //省市边界线
          },
          emphasis: {
            show: "true",
            color: "rgba(37, 43, 61, .5)" //悬浮背景
          }
        }
      },
      legend: {
        orient: "vertical",
        top: "30",
        left: "center",
        align: "right",
        data: [],
        textStyle: {
          color: "#fff",
          fontSize: 20
        },
        itemWidth: 50,
        itemHeight: 30,
        selectedMode: "multiple"
      },
      series: series
    };

    myChart.setOption(option);
    myChart.on("click", params => {
      if (params.componentSubType === "effectScatter") {
        this.innerStatus = params.data.name;
      } else if (params.componentSubType === "lines") {
        console.log("点击了线");
        let line = "";
        for (let key in _this.geoCoordMap) {
          if (
            _this.geoCoordMap[key].toString() ==
            params.data.coords[0].toString()
          ) {
            line = line + key + "-";
          } else if (
            _this.geoCoordMap[key].toString() ==
            params.data.coords[1].toString()
          ) {
            console.log(key);
            line = line + key;
          }
        }
        this.innerStatus = line;
      }
    });
  },
  methods: {
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = this.geoCoordMap[dataItem[0].name];
        var toCoord = this.geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
          ]);
        }
      }
      return res;
    },
    convertData2(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = this.geoCoordMap[dataItem[1].name];
        var toCoord = this.geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
          ]);
        }
      }
      return res;
    }
  }
};
</script>

<style lang="less">
#echartsMap {
  width: 100%;
  height: 100%;
}
</style>

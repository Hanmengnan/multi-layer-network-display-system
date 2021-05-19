const nodes = [
  {
    id: "KS01",
    location: [76.055611, 39.50305],
    name: "喀什",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "WLMQ01",
    location: [87.620414, 43.828474],
    name: "乌鲁木齐",
    bulided: "offline",
    type: "业务上下站"
  },
  {
    id: "LS01",
    location: [91.173284, 29.655219],
    name: "拉萨",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "BJ01",
    location: [116.403613, 39.913802],
    name: "北京",
    bulided: "online",
    type: "业务上下站"
  }, //北京
  {
    id: "SJZ01",
    location: [114.51463, 38.046721],
    name: "石家庄",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "HHHT01",
    location: [111.749188, 40.846894],
    name: "呼和浩特",
    bulided: "online",
    type: "业务上下站"
  }, //呼和浩特
  {
    id: "SH01",
    location: [121.47824, 31.236423],
    name: "上海",
    bulided: "online",
    type: "业务上下站"
  }, //上海
  {
    id: "HZ01",
    location: [120.212061, 30.256576],
    name: "杭州",
    bulided: "online",
    type: "业务上下站"
  }, //杭州
  {
    id: "SZ01",
    location: [114.063402, 22.552728],
    name: "深圳",
    bulided: "online",
    type: "业务上下站"
  }, //深圳
  {
    id: "SY01",
    location: [109.515685, 18.262581],
    name: "三亚",
    bulided: "online",
    type: "业务上下站"
  }, //三亚
  {
    id: "NN01",
    location: [108.371729, 22.822074],
    name: "南宁",
    bulided: "online",
    type: "业务上下站"
  }, //南宁
  {
    id: "KM01",
    location: [102.836568, 24.889419],
    name: "昆明",
    bulided: "online",
    type: "业务上下站"
  }, //昆明
  {
    id: "CD01",
    location: [104.068146, 30.66601],
    name: "成都",
    bulided: "online",
    type: "业务上下站"
  }, //成都
  {
    id: "XA01",
    location: [108.946465, 34.347031],
    name: "西安",
    bulided: "online",
    type: "业务上下站"
  }, //西安
  {
    id: "TY01",
    location: [112.554671, 37.875395],
    name: "太原",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "WH01",
    location: [114.311011, 30.59971],
    name: "武汉",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "GY01",
    location: [106.640604, 26.653582],
    name: "贵阳",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "CQ01",
    location: [106.556712, 29.565729],
    name: "重庆",
    bulided: "online",
    type: "业务上下站"
  }, //重庆
  {
    id: "ZZ01",
    location: [113.666486, 34.753677],
    name: "郑州",
    bulided: "online",
    type: "业务上下站"
  }, //郑州
  {
    id: "JN01",
    location: [117.126399, 36.655396],
    name: "济南",
    bulided: "online",
    type: "业务上下站"
  }, //济南
  {
    id: "TJ01",
    location: [117.218439, 39.144401],
    name: "天津",
    bulided: "online",
    type: "业务上下站"
  }, //天津
  {
    id: "HEB01",
    location: [126.54621, 45.812441],
    name: "哈尔滨",
    bulided: "online",
    type: "业务上下站"
  }, //哈尔滨
  {
    id: "CC01",
    location: [125.330606, 43.820913],
    name: "长春",
    bulided: "online",
    type: "业务上下站"
  }, //长春
  {
    id: "SHY01",
    location: [123.463046, 41.689002],
    name: "沈阳",
    bulided: "online",
    type: "业务上下站"
  }, //沈阳
  {
    id: "DL01",
    location: [121.622778, 38.927936],
    name: "大连",
    bulided: "offline",
    type: "业务上下站"
  }, //大连
  {
    id: "HLD01",
    location: [120.873295, 40.759783],
    name: "葫芦岛",
    bulided: "online",
    type: "业务上下站"
  }, //葫芦岛
  {
    id: "NJ01",
    location: [118.803572, 32.069548],
    name: "南京",
    bulided: "online",
    type: "业务上下站"
  }, //南京
  {
    id: "FZ01",
    location: [119.301745, 26.081467],
    name: "福州",
    bulided: "online",
    type: "业务上下站"
  }, //福州
  {
    id: "GZ01",
    location: [113.274879, 23.13507],
    name: "广州",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "NC01",
    location: [115.861136, 28.691483],
    name: "南昌",
    bulided: "online",
    type: "业务上下站"
  }, //南昌
  {
    id: "CHS01",
    location: [112.946045, 28.236927],
    name: "长沙",
    bulided: "online",
    type: "业务上下站"
  }, //长沙
  {
    id: "AKS01",
    location: [80.269814, 41.183934],
    name: "阿克苏",
    bulided: "online",
    type: "业务上下站"
  }, //阿克苏
  {
    id: "KEL01",
    location: [86.199312, 41.754547],
    name: "库尔勒",
    bulided: "online",
    type: "业务上下站"
  }, //库尔勒
  {
    id: "HM01",
    location: [93.512588, 42.859038],
    name: "哈密",
    bulided: "online",
    type: "业务上下站"
  }, //哈密
  {
    id: "JQ01",
    location: [98.501256, 39.737358],
    name: "酒泉",
    bulided: "online",
    type: "业务上下站"
  }, //酒泉
  {
    id: "WW01",
    location: [102.641681, 37.935972],
    name: "武威",
    bulided: "online",
    type: "业务上下站"
  }, //武威
  {
    id: "NQ01",
    location: [92.053888, 31.480713],
    name: "那曲",
    bulided: "online",
    type: "业务上下站"
  }, //那曲
  {
    id: "GEM01",
    location: [94.913191, 36.404239],
    name: "格尔木",
    bulided: "online",
    type: "业务上下站"
  }, //格尔木
  {
    id: "XN01",
    location: [101.786746, 36.62269],
    name: "西宁",
    bulided: "online",
    type: "业务上下站"
  },
  {
    id: "LZ01",
    location: [103.844548, 36.067002],
    name: "兰州",
    bulided: "online",
    type: "业务上下站"
  }, //兰州
  {
    id: "PL01",
    location: [106.671444, 35.552286],
    name: "平凉",
    bulided: "online",
    type: "业务上下站"
  }, //平凉
  {
    id: "TB01",
    location: [121.560741, 25.040524],
    name: "台北",
    bulided: "online",
    type: "业务上下站"
  }
];

export const getPointsLocation = id => {
  let res = -1;
  nodes.forEach(el => {
    if (el.id === id) res = el.location;
  });
  return res;
};
export const getLinkLocation = id => {
  let res = -1;
  nodes.forEach(el => {
    if (el.id === id) res = el.location;
  });
  return res;
};

export const NodesMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          id: "KS01",
          location: [76.055611, 39.50305],
          name: "喀什",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        },
        {
          id: "WLMQ01",
          location: [87.620414, 43.828474],
          name: "乌鲁木齐",
          bulided: false,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "LS01",
          location: [91.173284, 29.655219],
          name: "拉萨",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "BJ01",
          location: [116.403613, 39.913802],
          name: "北京",
          bulided: true,
          type: "最高基准站",
          precision: "最高时钟基准",
          state: "正常"
        }, //北京
        {
          id: "SJZ01",
          location: [114.51463, 38.046721],
          name: "石家庄",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "HHHT01",
          location: [111.749188, 40.846894],
          name: "呼和浩特",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //呼和浩特
        {
          id: "SH01",
          location: [121.47824, 31.236423],
          name: "上海",
          bulided: true,
          type: "业务上下站",
          precision: "超高时钟基准",
          state: "正常"
        }, //上海
        {
          id: "HZ01",
          location: [120.212061, 30.256576],
          name: "杭州",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //杭州
        {
          id: "SZ01",
          location: [114.063402, 22.552728],
          name: "深圳",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //深圳
        {
          id: "SY01",
          location: [109.515685, 18.262581],
          name: "三亚",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //三亚
        {
          id: "NN01",
          location: [108.371729, 22.822074],
          name: "南宁",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //南宁
        {
          id: "KM01",
          location: [102.836568, 24.889419],
          name: "昆明",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //昆明
        {
          id: "CD01",
          location: [104.068146, 30.66601],
          name: "成都",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //成都
        {
          id: "XA01",
          location: [108.946465, 34.347031],
          name: "西安",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //西安
        {
          id: "TY01",
          location: [112.554671, 37.875395],
          name: "太原",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "WH01",
          location: [114.311011, 30.59971],
          name: "武汉",
          bulided: true,
          type: "业务上下站",
          precision: "超高时钟基准",
          state: "正常"
        },
        {
          id: "GY01",
          location: [106.640604, 26.653582],
          name: "贵阳",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "CQ01",
          location: [106.556712, 29.565729],
          name: "重庆",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //重庆
        {
          id: "ZZ01",
          location: [113.666486, 34.753677],
          name: "郑州",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //郑州
        {
          id: "JN01",
          location: [117.126399, 36.655396],
          name: "济南",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //济南
        {
          id: "TJ01",
          location: [117.218439, 39.144401],
          name: "天津",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //天津
        {
          id: "HEB01",
          location: [126.54621, 45.812441],
          name: "哈尔滨",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //哈尔滨
        {
          id: "CC01",
          location: [125.330606, 43.820913],
          name: "长春",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //长春
        {
          id: "SHY01",
          location: [123.463046, 41.689002],
          name: "沈阳",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //沈阳
        {
          id: "DL01",
          location: [121.622778, 38.927936],
          name: "大连",
          bulided: false,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //大连
        {
          id: "HLD01",
          location: [120.873295, 40.759783],
          name: "葫芦岛",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //葫芦岛
        {
          id: "NJ01",
          location: [118.803572, 32.069548],
          name: "南京",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //南京
        {
          id: "FZ01",
          location: [119.301745, 26.081467],
          name: "福州",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //福州
        {
          id: "GZ01",
          location: [113.274879, 23.13507],
          name: "广州",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "NC01",
          location: [115.861136, 28.691483],
          name: "南昌",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //南昌
        {
          id: "CHS01",
          location: [112.946045, 28.236927],
          name: "长沙",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }, //长沙
        {
          id: "AKS01",
          location: [80.269814, 41.183934],
          name: "阿克苏",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //阿克苏
        {
          id: "KEL01",
          location: [86.199312, 41.754547],
          name: "库尔勒",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //库尔勒
        {
          id: "HM01",
          location: [93.512588, 42.859038],
          name: "哈密",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //哈密
        {
          id: "JQ01",
          location: [98.501256, 39.737358],
          name: "酒泉",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //酒泉
        {
          id: "WW01",
          location: [102.641681, 37.935972],
          name: "武威",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //武威
        {
          id: "NQ01",
          location: [92.053888, 31.480713],
          name: "那曲",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //那曲
        {
          id: "GEM01",
          location: [94.913191, 36.404239],
          name: "格尔木",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //格尔木
        {
          id: "XN01",
          location: [101.786746, 36.62269],
          name: "西宁",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        },
        {
          id: "LZ01",
          location: [103.844548, 36.067002],
          name: "兰州",
          bulided: true,
          type: "业务上下站",
          precision: "超高时钟基准",
          state: "正常"
        }, //兰州
        {
          id: "PL01",
          location: [106.671444, 35.552286],
          name: "平凉",
          bulided: true,
          type: "业务上下站",
          precision: "时钟网关",
          state: "正常"
        }, //平凉
        {
          id: "TB01",
          location: [121.560741, 25.040524],
          name: "台北",
          bulided: true,
          type: "业务上下站",
          precision: "次高时钟基准",
          state: "正常"
        }
      ]
    });
  });
};

export const LinksMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          node1Name: "哈尔滨",
          node2Name: "长春",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "长春",
          node2Name: "沈阳",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "沈阳",
          node2Name: "大连",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "沈阳",
          node2Name: "葫芦岛",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "葫芦岛",
          node2Name: "天津",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "天津",
          node2Name: "济南",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "济南",
          node2Name: "南京",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "南京",
          node2Name: "上海",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "上海",
          node2Name: "杭州",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "福州",
          node2Name: "深圳",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "深圳",
          node2Name: "广州",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "南宁",
          node2Name: "昆明",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "昆明",
          node2Name: "成都",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "成都",
          node2Name: "西安",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "西安",
          node2Name: "太原",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "太原",
          node2Name: "北京",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "北京",
          node2Name: "石家庄",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "石家庄",
          node2Name: "郑州",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "郑州",
          node2Name: "西安",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "郑州",
          node2Name: "武汉",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "武汉",
          node2Name: "长沙",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "长沙",
          node2Name: "贵阳",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "贵阳",
          node2Name: "昆明",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "南宁",
          node2Name: "广州",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "成都",
          node2Name: "重庆",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "重庆",
          node2Name: "武汉",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: false,
          contain: ""
        },
        {
          node1Name: "长沙",
          node2Name: "广州",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "长沙",
          node2Name: "南昌",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "南昌",
          node2Name: "杭州",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "北京",
          node2Name: "天津",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "北京",
          node2Name: "呼和浩特",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: false,
          contain: ""
        },
        {
          node1Name: "呼和浩特",
          node2Name: "兰州",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "西安",
          node2Name: "平凉",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: false,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "平凉",
          node2Name: "兰州",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "兰州",
          node2Name: "西宁",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "西宁",
          node2Name: "格尔木",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "格尔木",
          node2Name: "那曲",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "那曲",
          node2Name: "拉萨",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: false,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "兰州",
          node2Name: "武威",
          bulided: true,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "武威",
          node2Name: "酒泉",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "酒泉",
          node2Name: "哈密",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "哈密",
          node2Name: "乌鲁木齐",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "乌鲁木齐",
          node2Name: "库尔勒",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "库尔勒",
          node2Name: "阿克苏",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        },
        {
          node1Name: "阿克苏",
          node2Name: "喀什",
          bulided: false,
          bandTime: "MD01",
          bandData: "MD02",
          usedForTime: true,
          usedForData: true,
          contain: ""
        }
      ]
    });
  });
};

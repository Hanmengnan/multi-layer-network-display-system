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

const c_p = {
  合肥: "安徽",
  芜湖: "安徽",
  蚌埠: "安徽",
  淮南: "安徽",
  马鞍山: "安徽",
  淮北: "安徽",
  铜陵: "安徽",
  安庆: "安徽",
  黄山: "安徽",
  滁州: "安徽",
  阜阳: "安徽",
  宿州: "安徽",
  巢湖: "安徽",
  六安: "安徽",
  亳州: "安徽",
  池州: "安徽",
  宣城: "安徽",
  北京: "北京",
  东城区: "北京",
  西城区: "北京",
  崇文区: "北京",
  宣武区: "北京",
  朝阳区: "北京",
  丰台区: "北京",
  石景山区: "北京",
  海淀区: "北京",
  门头沟区: "北京",
  房山区: "北京",
  通州区: "北京",
  顺义区: "北京",
  昌平区: "北京",
  大兴区: "北京",
  怀柔区: "北京",
  平谷区: "北京",
  密云县: "北京",
  延庆县: "北京",
  重庆: "重庆",
  万州区: "重庆",
  涪陵区: "重庆",
  渝中区: "重庆",
  大渡口区: "重庆",
  江北区: "重庆",
  沙坪坝区: "重庆",
  九龙坡区: "重庆",
  南岸区: "重庆",
  北碚区: "重庆",
  万盛区: "重庆",
  双桥区: "重庆",
  渝北区: "重庆",
  巴南区: "重庆",
  黔江区: "重庆",
  长寿区: "重庆",
  綦江县: "重庆",
  潼南县: "重庆",
  铜梁县: "重庆",
  大足县: "重庆",
  荣昌县: "重庆",
  璧山县: "重庆",
  梁平县: "重庆",
  城口县: "重庆",
  丰都县: "重庆",
  垫江县: "重庆",
  武隆县: "重庆",
  忠县: "重庆",
  开县: "重庆",
  云阳县: "重庆",
  奉节县: "重庆",
  巫山县: "重庆",
  巫溪县: "重庆",
  石柱土家族自治县: "重庆",
  秀山土家族苗族自治县: "重庆",
  酉阳土家族苗族自治县: "重庆",
  彭水苗族土家族自治县: "重庆",
  江津市: "重庆",
  合川市: "重庆",
  永川市: "重庆",
  南川市: "重庆",
  福州: "福建",
  厦门: "福建",
  莆田: "福建",
  三明: "福建",
  泉州: "福建",
  漳州: "福建",
  南平: "福建",
  龙岩: "福建",
  宁德: "福建",
  兰州: "甘肃",
  嘉峪关: "甘肃",
  金昌: "甘肃",
  白银: "甘肃",
  天水: "甘肃",
  武威: "甘肃",
  张掖: "甘肃",
  平凉: "甘肃",
  酒泉: "甘肃",
  庆阳: "甘肃",
  定西: "甘肃",
  陇南: "甘肃",
  临夏: "甘肃",
  甘南: "甘肃",
  广州: "广东",
  韶关: "广东",
  深圳: "广东",
  珠海: "广东",
  汕头: "广东",
  佛山: "广东",
  江门: "广东",
  湛江: "广东",
  茂名: "广东",
  肇庆: "广东",
  惠州: "广东",
  梅州: "广东",
  汕尾: "广东",
  河源: "广东",
  阳江: "广东",
  清远: "广东",
  东莞: "广东",
  中山: "广东",
  潮州: "广东",
  揭阳: "广东",
  云浮: "广东",
  南宁: "广西",
  柳州: "广西",
  桂林: "广西",
  梧州: "广西",
  北海: "广西",
  防城港: "广西",
  钦州: "广西",
  贵港: "广西",
  玉林: "广西",
  百色: "广西",
  贺州: "广西",
  河池: "广西",
  贵阳: "贵州",
  六盘水: "贵州",
  遵义: "贵州",
  安顺: "贵州",
  铜仁: "贵州",
  黔西南: "贵州",
  毕节: "贵州",
  黔东南: "贵州",
  黔南: "贵州",
  海口: "海南",
  三亚: "海南",
  其他: "台湾",
  石家庄: "河北",
  唐山: "河北",
  秦皇岛: "河北",
  邯郸: "河北",
  邢台: "河北",
  保定: "河北",
  张家口: "河北",
  承德: "河北",
  沧州: "河北",
  廊坊: "河北",
  衡水: "河北",
  哈尔滨: "黑龙江",
  齐齐哈尔: "黑龙江",
  鸡西: "黑龙江",
  鹤岗: "黑龙江",
  双鸭山: "黑龙江",
  大庆: "黑龙江",
  伊春: "黑龙江",
  佳木斯: "黑龙江",
  七台河: "黑龙江",
  牡丹江: "黑龙江",
  黑河: "黑龙江",
  绥化: "黑龙江",
  大兴安岭: "黑龙江",
  郑州: "河南",
  开封: "河南",
  洛阳: "河南",
  平顶山: "河南",
  安阳: "河南",
  鹤壁: "河南",
  新乡: "河南",
  焦作: "河南",
  濮阳: "河南",
  许昌: "河南",
  漯河: "河南",
  三门峡: "河南",
  南阳: "河南",
  商丘: "河南",
  信阳: "河南",
  周口: "河南",
  驻马店: "河南",
  武汉: "湖北",
  黄石: "湖北",
  十堰: "湖北",
  宜昌: "湖北",
  襄樊: "湖北",
  鄂州: "湖北",
  荆门: "湖北",
  孝感: "湖北",
  荆州: "湖北",
  黄冈: "湖北",
  咸宁: "湖北",
  随州: "湖北",
  恩施土家族苗族自治州: "湖北",
  长沙: "湖南",
  株洲: "湖南",
  湘潭: "湖南",
  衡阳: "湖南",
  邵阳: "湖南",
  岳阳: "湖南",
  常德: "湖南",
  张家界: "湖南",
  益阳: "湖南",
  郴州: "湖南",
  永州: "湖南",
  怀化: "湖南",
  娄底: "湖南",
  湘西土家族苗族自治州: "湖南",
  呼和浩特: "内蒙古",
  包头: "内蒙古",
  乌海: "内蒙古",
  赤峰: "内蒙古",
  通辽: "内蒙古",
  鄂尔多斯: "内蒙古",
  呼伦贝尔: "内蒙古",
  兴安盟: "内蒙古",
  锡林郭勒盟: "内蒙古",
  乌兰察布盟: "内蒙古",
  巴彦淖尔盟: "内蒙古",
  阿拉善盟: "内蒙古",
  南京: "江苏",
  无锡: "江苏",
  徐州: "江苏",
  常州: "江苏",
  苏州: "江苏",
  南通: "江苏",
  连云港: "江苏",
  淮安: "江苏",
  盐城: "江苏",
  扬州: "江苏",
  镇江: "江苏",
  泰州: "江苏",
  宿迁: "江苏",
  南昌: "江西",
  景德镇: "江西",
  萍乡: "江西",
  九江: "江西",
  新余: "江西",
  鹰潭: "江西",
  赣州: "江西",
  吉安: "江西",
  宜春: "江西",
  抚州: "江西",
  上饶: "江西",
  长春: "吉林",
  吉林: "吉林",
  四平: "吉林",
  辽源: "吉林",
  通化: "吉林",
  白山: "吉林",
  松原: "吉林",
  白城: "吉林",
  延边朝鲜族自治州: "吉林",
  沈阳: "辽宁",
  大连: "辽宁",
  鞍山: "辽宁",
  抚顺: "辽宁",
  本溪: "辽宁",
  丹东: "辽宁",
  锦州: "辽宁",
  营口: "辽宁",
  阜新: "辽宁",
  辽阳: "辽宁",
  盘锦: "辽宁",
  铁岭: "辽宁",
  朝阳: "辽宁",
  葫芦岛: "辽宁",
  银川: "宁夏",
  石嘴山: "宁夏",
  吴忠: "宁夏",
  固原: "宁夏",
  西宁: "青海",
  海东: "青海",
  海北: "青海",
  黄南: "青海",
  海南: "青海",
  果洛: "青海",
  玉树: "青海",
  海西: "青海",
  太原: "山西",
  大同: "山西",
  阳泉: "山西",
  长治: "山西",
  晋城: "山西",
  朔州: "山西",
  晋中: "山西",
  运城: "山西",
  忻州: "山西",
  临汾: "山西",
  吕梁: "山西",
  济南: "山东",
  青岛: "山东",
  淄博: "山东",
  枣庄: "山东",
  东营: "山东",
  烟台: "山东",
  潍坊: "山东",
  济宁: "山东",
  泰安: "山东",
  威海: "山东",
  日照: "山东",
  莱芜: "山东",
  临沂: "山东",
  德州: "山东",
  聊城: "山东",
  滨州: "山东",
  菏泽: "山东",
  上海: "上海",
  黄浦区: "上海",
  卢湾区: "上海",
  徐汇区: "上海",
  长宁区: "上海",
  静安区: "上海",
  普陀区: "上海",
  闸北区: "上海",
  虹口区: "上海",
  杨浦区: "上海",
  闵行区: "上海",
  宝山区: "上海",
  嘉定区: "上海",
  浦东新区: "上海",
  金山区: "上海",
  松江区: "上海",
  青浦区: "上海",
  南汇区: "上海",
  奉贤区: "上海",
  崇明县: "上海",
  成都: "四川",
  自贡: "四川",
  攀枝花: "四川",
  泸州: "四川",
  德阳: "四川",
  绵阳: "四川",
  广元: "四川",
  遂宁: "四川",
  内江: "四川",
  乐山: "四川",
  南充: "四川",
  眉山: "四川",
  宜宾: "四川",
  广安: "四川",
  达州: "四川",
  雅安: "四川",
  巴中: "四川",
  资阳: "四川",
  阿坝: "四川",
  甘孜: "四川",
  凉山: "四川",
  天津: "天津",
  和平区: "天津",
  河东区: "天津",
  河西区: "天津",
  南开区: "天津",
  河北区: "天津",
  红桥区: "天津",
  塘沽区: "天津",
  汉沽区: "天津",
  大港区: "天津",
  东丽区: "天津",
  西青区: "天津",
  津南区: "天津",
  北辰区: "天津",
  武清区: "天津",
  宝坻区: "天津",
  宁河县: "天津",
  静海县: "天津",
  蓟县: "天津",
  拉萨: "西藏",
  昌都: "西藏",
  山南: "西藏",
  日喀则: "西藏",
  那曲: "西藏",
  阿里: "西藏",
  林芝: "西藏",
  乌鲁木齐: "新疆",
  克拉玛依: "新疆",
  吐鲁番: "新疆",
  哈密: "新疆",
  昌吉: "新疆",
  博尔塔拉: "新疆",
  巴音郭楞: "新疆",
  阿克苏: "新疆",
  克孜勒苏: "新疆",
  喀什: "新疆",
  和田: "新疆",
  伊犁: "新疆",
  塔城: "新疆",
  阿勒泰: "新疆",
  昆明: "云南",
  曲靖: "云南",
  玉溪: "云南",
  保山: "云南",
  昭通: "云南",
  楚雄: "云南",
  红河: "云南",
  文山: "云南",
  思茅: "云南",
  西双版纳: "云南",
  大理: "云南",
  德宏: "云南",
  丽江: "云南",
  怒江: "云南",
  迪庆: "云南",
  临沧: "云南",
  杭州: "浙江",
  宁波: "浙江",
  温州: "浙江",
  嘉兴: "浙江",
  湖州: "浙江",
  绍兴: "浙江",
  金华: "浙江",
  衢州: "浙江",
  舟山: "浙江",
  台州: "浙江",
  丽水: "浙江",
  西安: "陕西",
  铜川: "陕西",
  宝鸡: "陕西",
  咸阳: "陕西",
  渭南: "陕西",
  延安: "陕西",
  汉中: "陕西",
  榆林: "陕西",
  安康: "陕西",
  商洛: "陕西",
  台北: "台湾",
  高雄: "台湾",
  香港: "香港",
  澳门: "澳门"
};

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

export const getProvince = city => {
  return c_p[city];
};

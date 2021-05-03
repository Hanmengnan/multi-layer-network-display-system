export const netInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          name: "业务上下站",
          value: 40,
          status: "状态正常",
          baifenbi: "100%",
          type: "bussiness"
        },
        {
          name: "电中继站",
          value: 40,
          status: "状态正常",
          baifenbi: "100%",
          type: "elc"
        },
        {
          name: "光中继站",
          value: 40,
          status: "状态正常",
          baifenbi: "100%",
          type: "light"
        },
        {
          name: "故障节点",
          value: 0,
          status: "状态正常",
          baifenbi: "0%",
          type: "error"
        }
      ]
    });
  });
};

export const nodeInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          label: "等级",
          data: "Ⅰ级"
        },
        {
          label: "守时时钟",
          data: "13:57:48:145"
        },
        {
          label: "节点出/入度",
          data: "4"
        },
        {
          label: "色散补偿",
          data: "xyz-a"
        },
        {
          label: "核心路由器",
          data: "rexx"
        },
        {
          label: "节点运维负责人",
          data: "张三",
          contact: true
        },
        {
          label: "节点联系方式",
          data: "010-29292902",
          contact: true
        }
      ]
    });
  });
};

export const linkInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: {
        startName: "北京",
        startType: "业务上下站",
        endName: "天津",
        endType: "业务上下站",
        linkType: "OTN光中继站",
        linkNum: 8,
        linkStatus: "正常"
      }
    });
  });
};

export const bandInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        { name: "MD01", value: parseInt(Math.random() * 100) },
        { name: "MD02", value: parseInt(Math.random() * 100) },
        { name: "MD03", value: parseInt(Math.random() * 100) },
        { name: "MD04", value: parseInt(Math.random() * 100) },
        { name: "MD05", value: parseInt(Math.random() * 100) },
        { name: "MD06", value: parseInt(Math.random() * 100) },
        { name: "MD07", value: parseInt(Math.random() * 100) },
        { name: "MD08", value: parseInt(Math.random() * 100) },
        { name: "MD09", value: parseInt(Math.random() * 100) },
        { name: "MD010", value: parseInt(Math.random() * 100) }
      ]
    });
  });
};

export const nodeBandMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          name: "北京-天津",
          value: parseInt(Math.random() * 100)
        },
        {
          name: "北京-石家庄",
          value: parseInt(Math.random() * 100)
        },
        {
          name: "北京-太原",
          value: parseInt(Math.random() * 100)
        },
        {
          name: "北京-张家口",
          value: parseInt(Math.random() * 100)
        }
      ]
    });
  });
};

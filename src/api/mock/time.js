export const timeColumnMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: ["100", "120", "130", "140"]
    });
  });
};

export const timeListMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          code: "0001",
          value: "北京",
          type: "最高基准站",
          error: "0",
          color: "white"
        },
        {
          code: "0013",
          value: "上海",
          type: "超高精度",
          error: "5ns",
          color: "white"
        },
        {
          code: "0018",
          value: "甘肃",
          type: "超高精度",
          error: "6ns",
          color: "white"
        },
        {
          code: "0020",
          value: "武汉",
          type: "超高精度",
          error: "9ns",
          color: "white"
        }
      ]
    });
  });
};

export const timeStationMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: ["北京", "上海", "南京", "武汉", "杭州"]
    });
  });
};

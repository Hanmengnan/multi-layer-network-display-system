export const dataNetInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: {
        used: "100",
        total: "300",
        info: [
          { title: "链路数量", num: 9121 },
          { title: "节点数量", num: 1000 },
          { title: "当日流量/PB", num: 753 },
          { title: "当月流量/PB", num: 3541 },
          { title: "地理位置编码数据数量", num: 13541 }
        ]
      }
    });
  });
};

export const dataNetFlowMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: {
        charAxisData: {
          day: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ],
          week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        chartData: {
          day: [
            [
              820,
              820,
              1290,
              1330,
              934,
              820,
              820,
              1290,
              1330,
              934,
              1420,
              1900,
              820,
              820,
              1290,
              1330,
              934,
              820,
              820,
              1290,
              1330,
              934,
              1420,
              1900,
              820,
              820,
              1290,
              1330,
              934,
              1000
            ]
          ],
          week: [[820, 820, 1290, 1330, 934, 800, 1190]],
          month: [
            [820, 820, 1290, 1330, 934, 820, 820, 1290, 1330, 934, 1420, 1900]
          ]
        }
      }
    });
  });
};

export const dataNetworkNodeInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: {
        basicInfo: [
          { title: "节点名称", value: "北京" },
          { title: "吞吐量/PB", value: "1000" },
          { title: "转发率", value: "98.4%" },
          { title: "处理时延/NS", value: "11254" }
        ],
        nodeLinkLoad: {
          charAxisData: [
            "北京-沈阳",
            "北京-呼和浩特",
            "北京-石家庄",
            "北京-太原",
            "北京-济南"
          ],
          chartData: [
            [11, 21, 23, 14, 21, 12],
            [11, 12, 13, 14, 12, 12]
          ],
          chartName: ["信息报文", "普通预警", "橙色预警"]
        },
        messageSource: {
          charAxisData: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29
          ],
          chartData: [
            [
              11,
              21,
              23,
              14,
              21,
              12,
              14,
              42,
              21,
              15,
              12,
              12,
              13,
              14,
              12,
              23,
              15,
              32,
              13,
              21,
              23,
              24,
              23,
              14,
              14,
              31,
              21,
              28,
              24,
              11
            ],
            [
              11,
              12,
              13,
              14,
              12,
              12,
              14,
              14,
              21,
              15,
              12,
              12,
              13,
              24,
              14,
              23,
              15,
              12,
              13,
              12,
              23,
              21,
              32,
              42,
              14,
              12,
              22,
              18,
              23,
              11
            ],
            [
              1,
              2,
              3,
              4,
              2,
              2,
              4,
              4,
              21,
              5,
              12,
              2,
              3,
              4,
              1,
              23,
              5,
              2,
              3,
              2,
              23,
              2,
              3,
              4,
              1,
              1,
              2,
              8,
              2,
              11
            ]
          ],
          chartName: ["信息报文", "普通预警", "橙色预警"]
        },
        statisticData: {
          chartAxisData: [
            "北京",
            "上海",
            "广州",
            "深圳",
            "武汉",
            "甘肃",
            "新疆"
          ],
          chartName: ["报文统计"],
          chartData: [
            [
              {
                value: 30,
                itemStyle: {
                  color: "iceblue"
                }
              },
              {
                value: 20,
                itemStyle: {
                  color: "yellow"
                }
              },
              {
                value: 40,
                itemStyle: {
                  color: "orange"
                }
              },
              {
                value: 40,
                itemStyle: {
                  color: "green"
                }
              },
              {
                value: 50,
                itemStyle: {
                  color: "grey"
                }
              },
              {
                value: 20,
                itemStyle: {
                  color: "pink"
                }
              },
              {
                value: 30,
                itemStyle: {
                  color: "#9e175f"
                }
              }
            ]
          ]
        }
      }
    });
  });
};

export const dataNetworkLinkInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: {
        start: "北京",
        end: "上海",
        infoData: [
          { title: "运行状态", num: "正常" },
          { title: "带宽", num: 100 },
          { title: "时延", num: 13243 },
          { title: "丢包率", num: 1.2 }
        ],
        charAxisData: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24"
        ],
        chartData: [
          [
            1.2,
            2.2,
            1.9,
            2.3,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            1.34,
            2.2,
            1.9,
            2.3,
            1.34,
            1.9,
            2.3,
            1.34
          ],
          [
            12.0,
            21.0,
            32.9,
            33.3,
            24.3,
            16.0,
            29.9,
            32.3,
            24.3,
            15.0,
            25.9,
            35.3,
            22.3,
            16.0,
            25.9,
            36.3,
            22.3,
            17.0,
            27.9,
            13.3,
            22.3,
            15.0,
            12.9,
            23.3,
            12.3
          ],
          [
            13221,
            15323,
            15232,
            12561,
            11231,
            16321,
            10012,
            14231,
            12352,
            11142,
            16511,
            13356,
            13421,
            14021,
            12911,
            13330,
            15321,
            17921,
            15901,
            18823,
            16821,
            12361,
            12341,
            19821,
            14021
          ]
        ],
        chartName: ["丢包率 (%)", "利用率 (%)", "时延 (ns)"],
        statisticData: {
          chartAxisData: [
            "北京",
            "上海",
            "广州",
            "深圳",
            "武汉",
            "甘肃",
            "新疆"
          ],
          chartName: ["报文统计"],
          chartData: [
            [
              {
                value: 30,
                itemStyle: {
                  color: "iceblue"
                }
              },
              {
                value: 20,
                itemStyle: {
                  color: "yellow"
                }
              },
              {
                value: 40,
                itemStyle: {
                  color: "orange"
                }
              },
              {
                value: 40,
                itemStyle: {
                  color: "green"
                }
              },
              {
                value: 50,
                itemStyle: {
                  color: "grey"
                }
              },
              {
                value: 20,
                itemStyle: {
                  color: "pink"
                }
              },
              {
                value: 30,
                itemStyle: {
                  color: "#9e175f"
                }
              }
            ]
          ]
        }
      }
    });
  });
};

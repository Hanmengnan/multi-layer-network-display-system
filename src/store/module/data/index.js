import {
  UPDATE_NETINFO_MUTATION,
  UPDATE_FLOWINFO_MUTATION,
  UPDATE_NODEINFO_MUTATION,
  UPDATE_LINKINFO_MUTATION,
  UPDATE_NODELIST_MUTATION,
  UPDATE_LINKLIST_MUTATION,
  UPDATE_NETINFO_ACTION,
  UPDATE_FLOWINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_LINKINFO_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_LINKLIST_ACTION
} from "./constant";

import {
  getDataNetInfo,
  getDataNetWorkFlowData,
  getNodes,
  getLinks,
  getDataNetworkNodeInfo,
  getDataNetworkLinkInfo
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    netInfo: {},
    flowInfo: {},
    nodeInfo: {
      basicInfo: [],
      link: {
        chartAxisData: [],
        chartData: [[]],
        chartName: ["普通报文", "故障报文", "繁忙报文"]
      },
      date: {
        chartAxisData: [],
        chartData: [[]],
        chartName: ["普通报文", "故障报文", "繁忙报文"]
      },
      origin: {
        chartAxisData: [],
        chartData: [[]],
        chartName: ["报文统计"]
      }
    },
    linkInfo: {
      start: "",
      end: "",
      infoData: [
        { title: "运行状态", num: "" },
        { title: "带宽", num: "" },
        { title: "时延", num: "" },
        { title: "丢包率", num: "" }
      ],
      charAxisData: [],
      chartData: [[]],
      chartName: ["丢包率 (%)", "利用率 (%)", "时延 (ns)"],
      originStatistics: {
        chartAxisData: [],
        chartName: ["报文统计"],
        chartData: []
      }
    },
    linkList: [],
    nodeList: []
  }),
  mutations: {
    [UPDATE_NETINFO_MUTATION](state, { data }) {
      state.netInfo = {
        bandUsed: data.bandUsed,
        bandTotal: data.bandTotal,
        parameter: [
          { title: "链路数量", num: data.linkNum },
          { title: "节点数量", num: data.nodeNum },
          { title: "当日流量/PB", num: data.daliFlow },
          { title: "当月流量/PB", num: data.monthlyFlow },
          { title: "地理位置编码数据数量", num: data.locationNum },
          { title: "时间便签编码数据数量", num: data.timestampNum }
        ]
      };
    },
    [UPDATE_NODELIST_MUTATION](state, { data }) {
      state.nodeList = data;
    },
    [UPDATE_LINKLIST_MUTATION](state, { data }) {
      state.linkList = data;
    },
    [UPDATE_FLOWINFO_MUTATION](state, { data }) {
      state.flowInfo = {
        charAxisData: {
          day: data.day
            .map(res => new Date(Date.parse(res.time)).toLocaleDateString())
            .reverse(),
          week: data.week
            .map(res => new Date(Date.parse(res.time)).toLocaleDateString())
            .reverse(),
          month: data.month.map(res => res.time).reverse()
        },
        chartData: {
          day: [data.day.map(res => res.flowData).reverse()],
          week: [data.week.map(res => res.flowData).reverse()],
          month: [data.month.map(res => res.flowData).reverse()]
        }
      };
    },
    [UPDATE_NODEINFO_MUTATION](state, { data }) {
      state.nodeInfo = {
        basicInfo: [
          { title: "节点名称", value: data.NodeDetail.name },
          { title: "吞吐量/PB", value: data.NodeDetail.throughput },
          {
            title: "转发率",
            value: data.NodeDetail.forwardingRate.toPrecision(3) + "%"
          },
          { title: "处理时延/NS", value: data.NodeDetail.error }
        ],
        link: {
          chartAxisData: [],
          chartData: [[]],
          chartName: ["普通报文", "故障报文", "繁忙报文"]
        },
        date: {
          chartAxisData: [],
          chartData: [[]],
          chartName: ["普通报文", "故障报文", "繁忙报文"]
        },
        origin: {
          chartAxisData: Object.keys(data.OriginStatistics),
          chartData: [Object.values(data.OriginStatistics)],
          chartName: ["报文统计"]
        }
      };
      if (data.LinkStatistics) {
        state.nodeInfo.link = {
          chartAxisData: data.LinkStatistics.map(item => item.LinkName),
          chartData: [
            data.LinkStatistics.map(item => item.NormalMessageNum),
            data.LinkStatistics.map(item => item.ErrorMessageNum),
            data.LinkStatistics.map(item => item.BusyMessageNum)
          ],
          chartName: ["普通报文", "故障报文", "繁忙报文"]
        };
      }
      if (data.DateStatistics) {
        state.nodeInfo.date = {
          chartAxisData: data.DateStatistics.map(item => item.ReceiveDate),
          chartData: [
            data.DateStatistics.map(item => item.NormalMessageNum),
            data.DateStatistics.map(item => item.ErrorMessageNum),
            data.DateStatistics.map(item => item.BusyMessageNum)
          ],
          chartName: ["普通报文", "故障报文", "繁忙报文"]
        };
      }
    },
    [UPDATE_LINKINFO_MUTATION](state, { data }) {
      console.log(data);
      state.linkInfo = {
        start: data.basicInfo.node1Name,
        end: data.basicInfo.node2Name,
        infoData: [
          { title: "运行状态", num: "正常" },
          { title: "带宽", num: data.basicInfo.contain },
          { title: "时延", num: "" },
          { title: "丢包率", num: "" }
        ],
        charAxisData: [],
        chartData: [[]],
        chartName: ["丢包率 (%)", "利用率 (%)", "时延 (ns)"],
        originStatistics: {
          chartAxisData: Object.keys(data.originStatistics),
          chartName: ["报文统计"],
          chartData: [Object.values(data.originStatistics)]
        }
      };
      if (data.parameterChange.length !== 0) {
        state.linkInfo.charAxisData = data.parameterChange.map(res =>
          new Date(Date.parse(res.time)).toLocaleDateString()
        );
        state.linkInfo.infoData = [
          { title: "运行状态", num: "正常" },
          { title: "带宽", num: data.basicInfo.contain },
          { title: "时延", num: data.parameterChange[0].precisionError },
          { title: "丢包率", num: data.parameterChange[0].loss.toPrecision(3) }
        ];
        state.linkInfo.chartData = [
          data.parameterChange.map(res => res.loss),
          data.parameterChange.map(res => res.used),
          data.parameterChange.map(res => res.precisionError)
        ];
      }
      console.log(state.linkInfo);
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NETINFO_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let data = null;
      await getDataNetInfo().then(res => (data = res));
      commit(UPDATE_NETINFO_MUTATION, {
        data
      });
    },

    // eslint-disable-next-line no-unused-vars
    async [UPDATE_FLOWINFO_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let data = null;
      await getDataNetWorkFlowData().then(res => (data = res));
      commit(UPDATE_FLOWINFO_MUTATION, {
        data
      });
    },

    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODELIST_ACTION]({ dispatch, commit }) {
      let data = null;
      await getNodes().then(res => (data = res.nodeList));
      commit(UPDATE_NODELIST_MUTATION, {
        data
      });
    },

    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKLIST_ACTION]({ dispatch, commit }) {
      let data = null;
      await getLinks().then(res => (data = res.linkList));
      commit(UPDATE_LINKLIST_MUTATION, {
        data
      });
    },

    // eslint-disable-next-line no-unused-vars
    [UPDATE_NODEINFO_ACTION]({ dispatch, commit }, nodeId) {
      // payload使用
      // 异步API
      getDataNetworkNodeInfo({ nodeId });
    },

    // eslint-disable-next-line no-unused-vars
    [UPDATE_LINKINFO_ACTION]({ dispatch, commit }, linkId) {
      // payload使用
      // 异步API
      getDataNetworkLinkInfo({ linkId });
    }
  }
};

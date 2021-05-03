import {
  INIT_LIGHT_ACTION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_FLOWINFO_MUTATION,
  UPDATE_NODEINFO_MUTATION,
  UPDATE_LINKINFO_MUTATION,
  // eslint-disable-next-line no-unused-vars
  UPDATE_NODES_MUTATION,
  // eslint-disable-next-line no-unused-vars
  UPDATE_LINKS_MUTATION,
  UPDATE_NETINFO_ACTION,
  UPDATE_FLOWINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_LINKINFO_ACTION,
  // eslint-disable-next-line no-unused-vars
  UPDATE_NODES_ACTION,
  // eslint-disable-next-line no-unused-vars
  UPDATE_LINKS_ACTION
} from "./constant";

import {
  getDataNetInfo,
  getDataNetWorkFlowData,
  getDataNetworkNodeInfo,
  getDataNetworkLinkInfo
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    netInfo: {},
    flowInfo: {},
    nodeInfo: {},
    linkInfo: {},
    links: [],
    nodes: []
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
    [UPDATE_FLOWINFO_MUTATION](state, { data }) {
      state.flowInfo = { ...data };
    },
    [UPDATE_NODEINFO_MUTATION](state, { data }) {
      state.nodeInfo = {
        basicInfo: [
          { title: "节点名称", value: data.NodeDetail.name },
          { title: "吞吐量/PB", value: data.NodeDetail.throughput },
          { title: "转发率", value: data.NodeDetail.forwardingRate },
          { title: "处理时延/NS", value: data.NodeDetail.error }
        ],
        link: {
          chartAxisData: data.LinkStatistics.map(item => item.LinkName),
          chartData: [
            data.LinkStatistics.map(item => item.NormalMessageNum),
            data.LinkStatistics.map(item => item.ErrorMessageNum),
            data.LinkStatistics.map(item => item.BusyMessageNum)
          ],
          chartName: ["普通报文", "故障报文", "繁忙报文"]
        },
        date: {
          chartAxisData: data.DateStatistics.map(item => item.ReceiveDate),
          chartData: [
            data.DateStatistics.map(item => item.NormalMessageNum),
            data.DateStatistics.map(item => item.ErrorMessageNum),
            data.DateStatistics.map(item => item.BusyMessageNum)
          ],
          chartName: ["普通报文", "故障报文", "繁忙报文"]
        },
        origin: {
          chartAxisData: Object.keys(data.OriginStatistics),
          chartData: [Object.values(data.OriginStatistics)],
          chartName: ["报文统计"]
        }
      };
    },
    [UPDATE_LINKINFO_MUTATION](state, { data }) {
      state.linkInfo = {
        start: data.basicInfo.start,
        end: data.basicInfo.end,
        infoData: [
          { title: "运行状态", num: "正常" },
          { title: "带宽", num: data.basicInfo.contain },
          { title: "时延", num: data.parameterChange[0].precisionError },
          { title: "丢包率", num: data.parameterChange[0].loss }
        ],
        charAxisData: data.parameterChange.map(res =>
          new Date(Date.parse(res.time)).toLocaleDateString()
        ),
        chartData: [
          data.parameterChange.map(res => res.loss),
          data.parameterChange.map(res => res.used),
          data.parameterChange.map(res => res.precisionError)
        ],
        chartName: ["丢包率 (%)", "利用率 (%)", "时延 (ns)"],
        originStatistics: {
          chartAxisData: Object.keys(data.originStatistics),
          chartName: ["报文统计"],
          chartData: [Object.values(data.originStatistics)]
        }
      };
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async [INIT_LIGHT_ACTION]({ dispatch }) {},
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
      await getDataNetWorkFlowData().then();
      commit(UPDATE_FLOWINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODEINFO_ACTION]({ dispatch, commit }, nodeId) {
      // payload使用
      // 异步API
      let data = null;
      await getDataNetworkNodeInfo({
        nodeId
      }).then(res => (data = res));
      commit(UPDATE_NODEINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKINFO_ACTION]({ dispatch, commit }, linkId) {
      // payload使用
      // 异步API
      let data = null;
      await getDataNetworkLinkInfo({
        linkId
      }).then(res => (data = res));
      commit(UPDATE_LINKINFO_MUTATION, {
        data
      });
    }
  }
};

import {
  UPDATE_NODEINFO_MUTATION,
  UPDATE_LINKINFO_MUTATION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_NODEBAND_MUTATION,
  UPDATE_NODELIST_MUTATION,
  UPDATE_LINKLIST_MUTATION,
  UPDATE_NETINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_NODEBAND_ACTION,
  UPDATE_LINKINFO_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_LINKLIST_ACTION
} from "./constant";

import {
  getNodeInfo,
  getLinkInfo,
  getNodes,
  getLinks,
  getLightNetNodeStatistics,
  getNodeBand
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    nodeStatistics: [],
    bandInfo: [],
    nodeInfo: {},
    nodeband: [],
    linkInfo: {},
    nodeList: [],
    linkList: []
  }),
  mutations: {
    [UPDATE_NETINFO_MUTATION](state, { data }) {
      state.nodeStatistics = [
        {
          name: "业务上下站",
          className: "bussiness",
          iconCode: "\ue95c",
          value: data.nodeNum["业务上下站"],
          health: data.nodeHealthPercent["业务上下站"],
          percent:
            (
              (data.nodeHealthPercent["业务上下站"] /
                data.nodeNum["业务上下站"]) *
              100
            ).toPrecision(3) + "%"
        },
        {
          name: "光中继站",
          className: "light",
          iconCode: "\ue612",
          value: data.nodeNum["光中继站"],
          health: data.nodeHealthPercent["光中继站"],
          percent:
            (
              (data.nodeHealthPercent["光中继站"] / data.nodeNum["光中继站"]) *
              100
            ).toPrecision(3) + "%"
        },
        {
          name: "电中继站",
          className: "elc",
          iconCode: "\ue612",
          value: data.nodeNum["电中继站"],
          health: data.nodeHealthPercent["电中继站"],
          percent:
            (
              (data.nodeHealthPercent["电中继站"] / data.nodeNum["电中继站"]) *
              100
            ).toPrecision(3) + "%"
        },
        {
          name: "故障节点",
          className: "error",
          iconCode: "\ue730",
          value: data.errorNum.num,
          percent: data.errorNum.percent.toPrecision(3) + "%"
        }
      ];
    },
    [UPDATE_NODEINFO_MUTATION](state, { data }) {
      state.nodeInfo = {
        nodeDetailData: [
          {
            label: "等级",
            data: data.level
          },
          {
            label: "守时时钟",
            data: data.clockTime
          },
          {
            label: "节点出/入度",
            data: data.inOutValue
          },
          {
            label: "色散补偿",
            data: data.chromeCompensate
          },
          {
            label: "核心路由器",
            data: data.coreRouter
          }
        ],
        nodeContactData: [
          {
            label: "节点运维负责人",
            data: data.nodeSupervisor
          },
          {
            label: "节点联系方式",
            data: data.contact
          }
        ]
      };
    },
    [UPDATE_NODEBAND_MUTATION](state, { data }) {
      state.bandInfo = [];
      for (let item of Object.keys(data)) {
        state.bandInfo.push({
          name: item,
          value: data[item] * 100
        });
      }
    },
    [UPDATE_LINKINFO_MUTATION](state, { data }) {
      state.linkInfo = {
        startName: data.node1Name,
        startType: data.node1State,
        linkType: "光中继站",
        linkNum: 2,
        endName: data.node2Name,
        endType: data.node2State
      };
      if (data.node1State === "正常" && data.node2State === "正常") {
        state.linkInfo.linkStatus = "正常";
      } else {
        state.linkInfo.linkStatus = "阻塞";
      }
    },
    [UPDATE_NODELIST_MUTATION](state, { data }) {
      state.nodeList = data;
    },
    [UPDATE_LINKLIST_MUTATION](state, { data }) {
      state.linkList = data;
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NETINFO_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let data = null;
      await getLightNetNodeStatistics().then(res => (data = res));
      commit(UPDATE_NETINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODEINFO_ACTION]({ dispatch, commit }, nodeId) {
      // payload使用
      // 异步API
      let data = null;
      await getNodeInfo({
        nodeId
      }).then(res => (data = res));
      commit(UPDATE_NODEINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    [UPDATE_NODEBAND_ACTION]({ dispatch, commit }, nodeId) {
      // payload使用
      // 异步API
      getNodeBand({ nodeId });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKINFO_ACTION]({ dispatch, commit }, linkId) {
      // payload使用
      // 异步API
      let data = null;
      await getLinkInfo(linkId).then(res => (data = res));
      commit(UPDATE_LINKINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODELIST_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let data = null;
      await getNodes().then(res => (data = res.nodeList));
      commit(UPDATE_NODELIST_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKLIST_ACTION]({ dispatch, commit }, payload) {
      // payload使用

      // 异步API
      let data = null;

      await getLinks().then(res => (data = res.linkList));
      commit(UPDATE_LINKLIST_MUTATION, {
        data
      });
    }
  }
};

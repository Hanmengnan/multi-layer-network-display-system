import {
  UPDATE_SYSINFO_MUTATION,
  UPDATE_EVENTLIST_MUTATION,
  UPDATE_NODELIST_MUTATION,
  UPDATE_NODESTATISTICS_MUTATION,
  UPDATE_LINKLIST_MUTATION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_FLWOINFO_MUTATION,
  UPDATE_SYSINFO_ACTION,
  UPDATE_EVENTLIST_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_NODESTATISTICS_ACTION,
  UPDATE_NETINFO_ACTION,
  UPDATE_FLWOINFO_ACTION,
  UPDATE_LINKLIST_ACTION
} from "./constant";

import {
  getEventList,
  getSysInfo,
  getNetInfo,
  getFlowInfo,
  getLinks,
  getNodes,
  getNodeStatistics
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    sysInfo: [],
    eventMap: {
      handled: [],
      handling: [],
      unhandled: []
    },
    nodeList: [],
    linkList: [],
    netInfo: [],
    flowInfo: {},
    typeStatistics: [],
    areaStatistics: []
  }),
  mutations: {
    [UPDATE_SYSINFO_MUTATION](state, { data }) {
      state.sysInfo = {
        infoList: [
          {
            name: "系统名称",
            value: data.systemName
          },
          {
            name: "系统版本",
            value: data.version
          },
          {
            name: "系统运行时间",
            value: (() => {
              return (
                Math.floor(
                  (Date.now() - Date.parse(data.startTime)) /
                    1000 /
                    60 /
                    60 /
                    24
                ) + "天"
              );
            })()
          },
          {
            name: "系统代号",
            value: data.code
          }
        ],
        stateList: [
          {
            name: "数据库",
            status: data.state.database
          },
          {
            name: "网络",
            status: data.state.network
          },
          {
            name: "数据服务集群",
            status: data.state.cluster
          }
        ]
      };
    },
    [UPDATE_EVENTLIST_MUTATION](state, { data }) {
      state.eventMap = {
        handled: data.handled.map(item => {
          item.handleTime = new Date(item.handleTime).toLocaleString();
          item.handleState = "已处理";
          return item;
        }),
        unhandled: data.unhandled.map(item => {
          item.handleTime = new Date(item.handleTime).toLocaleString();
          item.handleState = "未处理";

          return item;
        }),
        handling: data.handling.map(item => {
          item.handleTime = new Date(item.handleTime).toLocaleString();
          item.handleState = "处理中";
          return item;
        })
      };
    },
    [UPDATE_NODELIST_MUTATION](state, { data }) {
      state.nodeList = [...data];
    },
    [UPDATE_NODESTATISTICS_MUTATION](state, { data }) {
      let tmp = [];
      state.areaStatistics = [];
      for (let item in data.typeStatistics) {
        tmp.push({
          name: item,
          value: data.typeStatistics[item]
        });
      }
      state.typeStatistics = tmp;
      tmp = [];
      for (let item in data.areaStatistics) {
        tmp.push({
          name: item,
          value: data.areaStatistics[item]
        });
      }
      state.areaStatistics = tmp;
    },
    [UPDATE_LINKLIST_MUTATION](state, { data }) {
      state.linkList = [...data];
    },
    [UPDATE_NETINFO_MUTATION](state, { data }) {
      state.netInfo = [
        {
          name: "利用率",
          value: data.utilization.toPrecision(3)
        },
        {
          name: "相应时间",
          value: data.responseTime.toPrecision(3)
        },
        {
          name: "连通性",
          value: data.connectivity.toPrecision(3)
        }
      ];
    },
    [UPDATE_FLWOINFO_MUTATION](state, { data }) {
      state.flowInfo = {
        charAxisData: data.day
          .map(item =>
            new Date(Date.parse(item.time))
              .toLocaleDateString("zh-CN", {
                dateStyle: "short"
              })
              .substr(5)
          )
          .reverse(),
        chartData: [data.day.map(item => item.dailyGrowth * 100).reverse()]
      };
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_SYSINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getSysInfo().then(res => (data = res));
      commit(UPDATE_SYSINFO_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODESTATISTICS_ACTION]({ dispatch, commit }, payload) {
      let data = null;
      await getNodeStatistics().then(res => (data = res));
      commit(UPDATE_NODESTATISTICS_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKLIST_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getLinks().then(res => (data = res.linkList));
      commit(UPDATE_LINKLIST_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_FLWOINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getFlowInfo().then(res => (data = res));
      commit(UPDATE_FLWOINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODELIST_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getNodes().then(res => (data = res.nodeList));
      commit(UPDATE_NODELIST_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NETINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getNetInfo().then(res => (data = res));
      commit(UPDATE_NETINFO_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_EVENTLIST_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getEventList().then(res => (data = res));
      commit(UPDATE_EVENTLIST_MUTATION, {
        data
      });
    }
  }
};

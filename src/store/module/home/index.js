import {
  UPDATE_SYSINFO_MUTATION,
  UPDATE_EVENTLIST_MUTATION,
  UPDATE_NODELIST_MUTATION,
  UPDATE_LINKLIST_MUTATION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_FLWOINFO_MUTATION,
  INIT_HOME_ACTION,
  UPDATE_SYSINFO_ACTION,
  UPDATE_EVENTLIST_ACTION,
  UPDATE_NODELIST_ACTION,
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
  getNodes
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    sysinfo: [],
    eventList: [],
    nodeList: [],
    linkList: [],
    basicInfo: {},
    flowInfo: []
  }),
  mutations: {
    [UPDATE_SYSINFO_MUTATION](state, { data }) {
      state.sysinfo = {
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
      state.eventList = [...data];
    },
    [UPDATE_NODELIST_MUTATION](state, { data }) {
      state.nodeList = [...data];
    },
    [UPDATE_LINKLIST_MUTATION](state, { data }) {
      state.linkList = [...data];
    },
    [UPDATE_NETINFO_MUTATION](state, { data }) {
      state.basicInfo = data;
    },
    [UPDATE_FLWOINFO_MUTATION](state, { data }) {
      state.flowInfo = data.day
        .map(item => {
          return {
            date: new Date(Date.parse(item.time))
              .toLocaleDateString("zh-CN", {
                dateStyle: "short"
              })
              .substr(5),
            value: item.dailyGrowth
          };
        })
        .reverse();
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async [INIT_HOME_ACTION]({ dispatch }) {},
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_SYSINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getSysInfo().then(res => (data = res));
      commit(UPDATE_SYSINFO_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_EVENTLIST_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let { data } = await getEventList();
      commit(UPDATE_EVENTLIST_MUTATION, {
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
    async [UPDATE_LINKLIST_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getLinks().then(res => (data = res.linkList));
      commit(UPDATE_LINKLIST_MUTATION, { data });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NETINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      await getNetInfo(data => commit(UPDATE_NETINFO_MUTATION, { data }));
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_FLWOINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = null;
      await getFlowInfo().then(res => (data = res));
      commit(UPDATE_FLWOINFO_MUTATION, {
        data
      });
    }
  }
};

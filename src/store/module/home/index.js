import {
  UPDATE_SYSINFO_MUTATION,
  UPDATE_EVENTLIST_MUTATION,
  UPDATE_NODELIST_MUTATION,
  UPDATE_BASICINFO_MUTATION,
  UPDATE_FLWOINFO_MUTATION,
  INIT_HOME_ACTION,
  UPDATE_SYSINFO_ACTION,
  UPDATE_EVENTLIST_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_BASICINFO_ACTION,
  UPDATE_FLWOINFO_ACTION
} from "./constant";

import {
  getEventList,
  getSysInfo,
  getNodeList,
  getBasicInfo,
  getFlowInfo
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    sysinfo: [],
    eventList: [],
    nodeList: [],
    basicInfo: {},
    flowInfo: []
  }),
  mutations: {
    [UPDATE_SYSINFO_MUTATION](state, { data }) {
      state.sysinfo = [
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
          value: "90天"
        },
        {
          name: "系统代号",
          value: data.code
        },
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
      ];
      console.log(state.sysinfo);
    },
    [UPDATE_EVENTLIST_MUTATION](state, { data }) {
      state.eventList = [...data];
    },
    [UPDATE_NODELIST_MUTATION](state, { data }) {
      state.nodeList = [...data];
    },
    [UPDATE_BASICINFO_MUTATION](state, { data }) {
      state.basicInfo = { ...state.basicInfo, ...data };
    },
    [UPDATE_FLWOINFO_MUTATION](state, { data }) {
      state.flowInfo = [...data];
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
      commit(UPDATE_SYSINFO_MUTATION, {
        data
      });
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
      data = await getNodeList().then(res => (data = res.nodeList));
      commit(UPDATE_NODELIST_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_BASICINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let { data } = await getBasicInfo();
      commit(UPDATE_BASICINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_FLWOINFO_ACTION]({ dispatch, commit }, payload) {
      // 异步API
      let data = await getFlowInfo();
      commit(UPDATE_FLWOINFO_MUTATION, {
        data
      });
    }
  }
};

import {
  UPDATE_TIMENODESTATISTICS_MUTATION,
  UPDATE_TIMELIST_MUTATION,
  UPDATE_TIMESTATION_MUTATION,
  UPDATE_NODELIST_MUTATION,
  UPDATE_LINKLIST_MUTATION,
  UPDATE_TIMENODESTATISTICS_ACTION,
  UPDATE_TIMESTATION_ACTION,
  UPDATE_NODELIST_ACTION,
  UPDATE_LINKLIST_ACTION
} from "./constant.js";

import {
  getTimeNetNodeStatistic,
  getTimeStation,
  getNodes,
  getLinks
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    nodeStatistic: {
      chartAxisData: [],
      chartData: [[]],
      chartName: []
    },
    timeColumn: [],
    timeList: [],
    timeStation: {
      route: [],
      station: []
    },
    nodeList: [],
    linkList: []
  }),
  mutations: {
    [UPDATE_TIMENODESTATISTICS_MUTATION](state, { data }) {
      state.nodeStatistic = {
        chartAxisData: Object.keys(data),
        chartData: [Object.values(data)],
        chartName: ["站点数量"]
      };
    },
    [UPDATE_TIMELIST_MUTATION](state, { data }) {
      state.timeList = [...data];
    },
    [UPDATE_TIMESTATION_MUTATION](state, { data }) {
      let tmp = new Set();
      data.forEach(route => {
        route.forEach(item => tmp.add(item));
      });
      state.timeStation = {
        route: data.map(route => {
          let routeList = [];
          for (let i = 1; i < route.length; ++i) {
            routeList.push({
              source: route[i - 1],
              target: route[i]
            });
          }
          return routeList;
        }),
        station: Array.from(tmp)
      };
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
    async [UPDATE_TIMENODESTATISTICS_ACTION]({ dispatch, commit }, payload) {
      let data = null;
      await getTimeNetNodeStatistic().then(res => (data = res));
      commit(UPDATE_TIMENODESTATISTICS_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_TIMESTATION_ACTION]({ dispatch, commit }, payload) {
      let data = null;
      await getTimeStation(payload.start, payload.end).then(res => {
        data = res.route;
      });

      commit(UPDATE_TIMESTATION_MUTATION, {
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

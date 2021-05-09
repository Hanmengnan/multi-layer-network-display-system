import {
  UPDATE_TIMECOLUMN_MUTATION,
  UPDATE_TIMELIST_MUTATION,
  UPDATE_TIMESTATION_MUTATION,
  UPDATE_NODES_MUTATION,
  UPDATE_LINKS_MUTATION,
  UPDATE_TIMECOLUMN_ACTION,
  UPDATE_TIMELIST_ACTION,
  UPDATE_TIMESTATION_ACTION,
  UPDATE_LINKS_ACTION,
  UPDATE_NODES_ACTION
} from "./constant.js";

import {
  getTimeColumn,
  getTimeList,
  getTimeStation,
  getNodes,
  getLinks
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    timeColumn: [],
    timeList: [],
    timeStation: [],
    nodes: [],
    links: []
  }),
  mutations: {
    [UPDATE_TIMECOLUMN_MUTATION](state, { data }) {
      state.timeColumn = [...data];
    },
    [UPDATE_TIMELIST_MUTATION](state, { data }) {
      state.timeList = [...data];
    },
    [UPDATE_TIMESTATION_MUTATION](state, { data }) {
      state.timeStation = [...data];
    },
    [UPDATE_NODES_MUTATION](state, { data }) {
      state.nodes = [...data];
    },
    [UPDATE_LINKS_MUTATION](state, { data }) {
      state.links = [...data];
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_TIMECOLUMN_ACTION]({ dispatch, commit }, payload) {
      let { data } = await getTimeColumn();
      commit(UPDATE_TIMECOLUMN_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_TIMELIST_ACTION]({ dispatch, commit }, payload) {
      let { data } = await getTimeList();
      commit(UPDATE_TIMELIST_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_TIMESTATION_ACTION]({ dispatch, commit }, payload) {
      let { data } = await getTimeStation();
      commit(UPDATE_TIMESTATION_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKS_ACTION]({ dispatch, commit }, payload) {
      let { data } = await getLinks();
      commit(UPDATE_LINKS_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODES_ACTION]({ dispatch, commit }, payload) {
      let { data } = await getNodes();
      commit(UPDATE_NODES_MUTATION, {
        data
      });
    }
  }
};

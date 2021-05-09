import {
  UPDATE_NODEINFO_MUTATION,
  UPDATE_BANDINFO_MUTATION,
  UPDATE_LINKINFO_MUTATION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_NODEBAND_MUTATION,
  UPDATE_NODES_MUTATION,
  UPDATE_LINKS_MUTATION,
  INIT_LIGHT_ACTION,
  UPDATE_NETINFO_ACTION,
  UPDATE_BANDINFO_ACTION,
  UPDATE_NODEINFO_ACTION,
  UPDATE_NODEBAND_ACTION,
  UPDATE_LINKINFO_ACTION,
  UPDATE_NODES_ACTION,
  UPDATE_LINKS_ACTION
} from "./constant";

import {
  getLightNetInfo,
  getNodeInfo,
  getLinkInfo,
  getBandInfo,
  getNodeBand,
  getNodes,
  getLinks
} from "../../../api";

export default {
  namespaced: true,
  state: () => ({
    netInfo: [],
    bandInfo: [],
    nodeInfo: [],
    nodeband: [],
    linkInfo: {},
    nodes: [],
    links: []
  }),
  mutations: {
    [UPDATE_NETINFO_MUTATION](state, { data }) {
      state.netInfo = [...data];
    },
    [UPDATE_BANDINFO_MUTATION](state, { data }) {
      state.bandInfo = [...data];
    },
    [UPDATE_NODEINFO_MUTATION](state, { data }) {
      state.nodeInfo = [...data];
    },
    [UPDATE_NODEBAND_MUTATION](state, { data }) {
      state.nodeband = [...data];
    },
    [UPDATE_LINKINFO_MUTATION](state, { data }) {
      state.linkInfo = { ...data };
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
    async [INIT_LIGHT_ACTION]({ dispatch }) {},
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NETINFO_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let { data } = await getLightNetInfo();
      commit(UPDATE_NETINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_BANDINFO_ACTION]({ dispatch, commit }, target) {
      // payload使用
      // 异步API
      let { data } = await getBandInfo({
        target
      });
      commit(UPDATE_BANDINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODEINFO_ACTION]({ dispatch, commit }, name) {
      // payload使用
      // 异步API
      let { data } = await getNodeInfo({
        name
      });
      commit(UPDATE_NODEINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODEBAND_ACTION]({ dispatch, commit }, node) {
      // payload使用
      // 异步API
      let { data } = await getNodeBand({
        node
      });
      commit(UPDATE_NODEBAND_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKINFO_ACTION]({ dispatch, commit }, name) {
      // payload使用
      // 异步API
      let { data } = await getLinkInfo({
        name
      });
      commit(UPDATE_LINKINFO_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_NODES_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let { data } = await getNodes();
      commit(UPDATE_NODES_MUTATION, {
        data
      });
    },
    // eslint-disable-next-line no-unused-vars
    async [UPDATE_LINKS_ACTION]({ dispatch, commit }, payload) {
      // payload使用
      // 异步API
      let { data } = await getLinks();
      commit(UPDATE_LINKS_MUTATION, {
        data
      });
    }
  }
};

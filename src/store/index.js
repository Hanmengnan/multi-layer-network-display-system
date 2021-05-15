import Vue from "vue";
import Vuex from "vuex";

import home from "./module/home";
import light from "./module/light";
import data from "./module/data";
import time from "./module/time";
import { websocket } from "@/api";
import {
  UPDATE_EVENTLIST_MUTATION,
  UPDATE_NETINFO_MUTATION,
  UPDATE_NODELIST_MUTATION
} from "@/store/module/home/constant";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    map3dForce: ""
  },
  mutations: {
    changeForce(state, name) {
      state.map3dForce = name;
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    webSocketHandle({ dispatch, commit }, payload) {
      websocket.onmessage = function(res) {
        res = JSON.parse(res.data);
        let data = res.data;
        switch (res.dataType) {
          case "parameterChange":
            commit("home/" + UPDATE_NETINFO_MUTATION, { data });
            break;
          case "nodeList":
            commit("home/" + UPDATE_NODELIST_MUTATION, { data });
            break;
          case "situation":
            commit("home/" + UPDATE_EVENTLIST_MUTATION, { data });
        }
      };
    }
  },
  modules: {
    home,
    light,
    data,
    time
  }
});

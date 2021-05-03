import Vue from "vue";
import Vuex from "vuex";
import home from "./module/home";
import light from "./module/light";
import data from "./module/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    light,
    data
  }
});

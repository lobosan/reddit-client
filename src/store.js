import Vue from "vue";
import Vuex from "vuex";
import * as posts from "./assets/top.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: posts.data.children.map(({ data }) => data)
  },
  mutations: {},
  actions: {}
});

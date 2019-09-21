import Vue from "vue";
import Vuex from "vuex";
import * as posts from "./assets/top.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postId: null,
    posts: posts.data.children.map(({ data }) => data)
  },
  mutations: {
    visitPostById(state, postId) {
      state.postId = postId;
      const post = state.posts.find(post => post.id === state.postId);
      post.visited = true;
    },
    dismissPostById(state, postId) {
      if (state.postId === postId) state.postId = null;
      state.posts = state.posts.filter(post => post.id !== postId);
    }
  },
  actions: {},
  getters: {
    getPostById(state) {
      return state.posts.find(post => post.id === state.postId);
    }
  }
});

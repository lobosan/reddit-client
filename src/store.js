import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postId: null,
    posts: null,
    apiUrl: "https://www.reddit.com/r/politics/top.json?limit=70"
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    visitPostById(state, postId) {
      state.postId = postId;
      const post = state.posts.find(post => post.id === state.postId);
      post.visited = true;
    },
    dismissPostById(state, postId) {
      if (state.postId === postId) state.postId = null;
      state.posts = state.posts.filter(post => post.id !== postId);
    },
    dismissAllPosts(state) {
      if (state.postId !== null) state.postId = null;
      state.posts = null;
    }
  },
  actions: {
    async getPosts({ state, commit }) {
      try {
        let response = await axios.get(state.apiUrl);
        commit("setPosts", response.data.data.children.map(({ data }) => data));
      } catch (error) {
        commit("setPosts", null);
      }
    }
  },
  getters: {
    getPostById(state) {
      return state.posts.find(post => post.id === state.postId);
    }
  }
});

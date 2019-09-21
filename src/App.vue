<template>
  <v-app>
    <v-navigation-drawer app clipped color="black" width="360" v-model="drawer">
      <PostsList />
    </v-navigation-drawer>

    <v-app-bar app clipped-left dark color="grey darken-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Reddit Posts</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <PostContent />
    </v-content>
  </v-app>
</template>

<script>
import PostsList from "./components/PostsList";
import PostContent from "./components/PostContent";

export default {
  components: {
    PostsList,
    PostContent
  },
  data: () => ({
    drawer: null
  })
};
</script>

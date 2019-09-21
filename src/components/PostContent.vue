<template>
  <v-card v-if="postId" class="pa-6 ma-4">
    <v-row no-gutters>
      <v-col>{{ post.author }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img width="200" :src="post.thumbnail"></v-img>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>{{ post.title }}</v-col>
    </v-row>
  </v-card>

  <v-card v-else class="ma-4">
    <v-row>
      <v-col align="center" class="pa-12"
        >Please select a post from the list to show its content.</v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["postId"]),
    ...mapGetters({ post: "getPostById" })
  }
};
</script>

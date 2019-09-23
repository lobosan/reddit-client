<template>
  <v-slide-x-transition group tag="ul" class="px-4 py-0">
    <li v-for="post in posts" :key="post.id">
      <v-card flat color="black">
        <v-row>
          <v-col cols="1">
            <v-icon :color="post.visited ? 'grey' : 'blue'" size="13"
              >mdi-circle</v-icon
            >
          </v-col>
          <v-col class="grey--text text--lighten-2 title">
            {{ post.author }}
            <span class="body-2 ml-1">
              {{ moment(post.created * 1000).fromNow() }}
            </span>
          </v-col>
        </v-row>

        <v-card flat color="black" @click="visitPostById(post.id)">
          <v-row no-gutters>
            <v-col cols="4">
              <v-img :src="post.thumbnail" width="80" class="mt-1 ml-1"></v-img>
            </v-col>
            <v-col class="align-self-center" cols="7">
              <span class="grey--text text--lighten-1">{{ post.title }}</span>
            </v-col>
            <v-col class="align-self-center" cols="1">
              <v-icon color="grey lighten-1" class="d-flex justify-end"
                >mdi-chevron-right</v-icon
              >
            </v-col>
          </v-row>
        </v-card>

        <v-row>
          <v-col cols="6">
            <v-btn
              text
              medium
              class="pa-0"
              color="white"
              @click="dismissPostById(post.id)"
            >
              <v-icon class="mx1" color="orange lighten-2" size="25"
                >mdi-close-circle-outline</v-icon
              >
              <span class="text-capitalize font-weight-regular body-2 mx-1"
                >Dismiss Post</span
              >
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <span class="orange--text text--lighten-2 body-2 mt-2 mr-2"
              >{{ post.num_comments }} comments</span
            >
          </v-col>
        </v-row>

        <v-divider class="my-1" color="grey"></v-divider>
      </v-card>
    </li>
  </v-slide-x-transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import * as moment from "moment";

export default {
  data: () => ({
    moment
  }),
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    ...mapState(["posts"])
  },
  methods: {
    ...mapMutations(["visitPostById", "dismissPostById"])
  }
};
</script>

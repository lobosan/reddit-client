<template>
  <v-card flat class="sticky py-3 text-center" color="black">
    <v-btn text color="orange lighten-2" width="90%" @click="dismissAllPosts()">
      <span class="text-capitalize font-weight-regular body-1"
        >Dismiss All</span
      >
    </v-btn>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["dismissAllPosts"])
  }
};
</script>

<style scoped>
.sticky {
  position: fixed;
  width: calc(100% - 15px);
  bottom: 0;
  left: 0;
}
</style>

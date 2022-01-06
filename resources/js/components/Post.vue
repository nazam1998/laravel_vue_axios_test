<template>
  <tr>
    <td>{{ post.title }}</td>
    <td>{{ post.content }}</td>
    <td>
      <button class="btn btn-danger" @click="deletePost(post)">
        <i style="color: white" class="fa fa-trash"></i>
      </button>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        :data-bs-target="'#' + post.title + post.id"
      >
        <i style="color: white" class="fa fa-pen"></i>
      </button>
    </td>
    <post-modal :post="post" />
  </tr>
</template>
<script>
import PostModal from "./PostModal.vue";
export default {
  name: "Post",
  components: {
    PostModal,
  },
  props: {
    post: Object,
  },

  methods: {
    deletePost(post) {
      this.$store.dispatch("deletePost", post);
    },
  },
};
</script>
<style>
</style>

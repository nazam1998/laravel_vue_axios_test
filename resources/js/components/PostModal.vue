<template lang="">
    <div
      class="modal fade"
      :id="post.title + post.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-on-clickaway="close"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="post.title + post.id + 'Label'">
              {{ post.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title" class="form-label">Post Title</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="title"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Content</label>
              <textarea
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="content"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="close"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="update">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: "PostModal",
  props: {
    post: Object,
  },
  mixins: [ clickaway ],
  data() {
    return {
      title: "",
      content: "",
      id: "",
    };
  },
  mounted() {
    this.title = this.post.title;
    this.content = this.post.content;
    this.id = this.post.id;
  },
  methods: {
    update() {
      if (this.title != null && this.content != null) {
        let post = {
          title: this.title,
          content: this.content,
          id: this.id,
        };
        this.$store.dispatch('editPost', post);
      }
    },
    close() {
      this.title = this.post.title;
      this.content = this.post.content;
    },
  },
};
</script>
<style lang="">
</style>

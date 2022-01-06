require('./bootstrap');
import Vue from 'vue'
import store from './store/index'
import Posts from './components/Posts.vue';
import CreatePost from './components/CreatePost.vue';
import Post from './components/Post.vue';

const app = new Vue({
    el: '#app',
    store,
    components: {Posts, CreatePost, Post}
});

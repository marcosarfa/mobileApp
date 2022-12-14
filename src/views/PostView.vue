<script setup>
import { ref, computed, onMounted } from 'vue';
import posts from '../store/postStore'
import { useRoute } from 'vue-router';
import comments from '../store/commentStore'
import CommentsInPost from '../components/CommentsInPost.vue'
import Comment from '../components/Comment.vue'
import { getComments } from '../firebase/comments.js';
import user from '../store/profile.js'

onMounted(() => {
    getComments()
})

const commentsId = ref([])
const route = useRoute()

let post = posts.value.find(post => post.id === route.params.id)

// const props = defineProps({
//     postId: '',
//     typeOf: String,
// })

const refreshComments = computed(() => {
    commentsId.value = comments.value.filter(comment => comment.postId === post.id)
})

</script>
<template>
    {{ refreshComments }}
    <div class="container d-flex justify-content-center flex-column align-items-center">
        <div class="container my-3">
            <h1 class="text-center">{{ post.title }}</h1>
        </div>
        <img class="my-3" :src='post.image' alt="">
        <p class="mb-3">{{ post.content }}</p>

        <div class="msg">
            <p v-if="!user">Login for comment!!</p>
        </div>
        <Comment class="my-3" v-if="user" :postId="post.id" />
        <CommentsInPost class="my-3" v-for="comment in commentsId" :comment="comment" :key="comment.id" />
        <div class="d-flex justify-content-center btn-group mb-3" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary"><router-link to="/">Home</router-link> </button>
            <button type="button" class="btn btn-primary"><router-link to="../posts">Posts</router-link> </button>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 90vw;

}

a {
    text-decoration: none;
    color: white;
}
</style>
<script setup>
import Posts from '../components/Posts.vue';
import posts from '../store/postStore.js';
import { getPosts } from '../firebase/posts.js'
import { ref } from 'vue';

const topic = ref([])

getPosts()

// const filter = () => {
//     posts.value = posts.value.filter(post => topic.includes(post.type))
// }

// filter()

</script>
<template>
    <div class="d-flex justify-content-center" id="title">
        <h2 class="text-center p-3">Welcome to our Posts</h2>
    </div>
    <div class="d-flex justify-content-center p-3 flex-wrap mx-5 btn-group" id="topic" aria-label="Basic checkbox toggle button group">
        <input v-model="topic" value="strengthening" type="checkbox" class="btn-check" id="strengthening"
            autocomplete="off">
        <label class="btn btn-outline-primary" for="strengthening">Strengthening</label><br>
        <input v-model="topic" value="streching" type="checkbox" class="btn-check" id="streching" autocomplete="off">
        <label class="btn btn-outline-primary" for="streching">Streching</label><br>
        <input v-model="topic" value="feeding" type="checkbox" class="btn-check" id="feeding" autocomplete="off">
        <label class="btn btn-outline-primary" for="feeding">Feeding</label><br>
        <input v-model="topic" value="recovery" type="checkbox" class="btn-check" id="recovery" autocomplete="off">
        <label class="btn btn-outline-primary" for="recovery">Recovery</label><br>
    </div>

    <div class="d-flex flex-column align-items-center">
        <Posts v-for="post in posts" :post="post" :key="post.id" />

    </div>

</template>
<style scoped>
h2 {
    background-color: green;
    width: 70vw;
    border-radius: 16px;
    color: white;
    text-shadow: 0.1em 0.1em 0.2em black
}

#topic {
    border: 1px solid green
}
</style>
<script setup>
import { ref } from 'vue'
import { addComments } from '../firebase/comments.js'
import user from '../store/profile.js';

const tComment = ref('')
const tComment1 = ref('')

const props = defineProps({
    postId: '',
    typeOf: String
})

const addNewComment = () => {
    let newComment = {
        id: crypto.randomUUID(),
        postId: props.postId,
        date: Date.now(),
        name: user.value.displayName,
        photo: user.value.photoURL,
        text: tComment1.value
    }
    addComments(newComment)
    tComment1.value = ''
}

</script>

<template>
    <form @submit.prevent="addNewComment" class="container d-flex">

        <img :src="user ? user.photoURL : 'https://picsum.photos/200'">
        <input maxlength="80" required v-model="tComment1" type="text" :placeholder="'comment '">
        <button>Send</button>

    </form>
</template>

<style scoped>
form img {
    border-radius: 50%;
    height: 5vh;
}

form input {
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid black;
}

form button {
    background-color: blue;
    color: white;
    border: none;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s all;
}

form button:hover {
    background-color: palevioletred;
}
</style>
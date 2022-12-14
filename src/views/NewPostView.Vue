<script setup>
import { ref, computed } from 'vue'
import { addPost } from '../firebase/posts.js'
import user from '../store/profile.js'

const title = ref('');
const type = ref([]);
const image = ref('');
const content = ref('');
const name = ref('');

const updateData = computed(() => {
    if (user.value) {
        name.value = user.value.displayName
    }
})

const newPost = () => {
    addPost({
        id: crypto.randomUUID(),
        date: Date.now(),
        title: title.value,
        name: name.value,
        type: type.value,
        image: image.value,
        content: content.value
    })
    title.value = ''
    type.value = []
    image.value = ''
    content.value = ''
}

</script>

<template>
    <div class="d-flex justify-content-center" id="title">
        <h2 class="text-center my-3 p-3">Create a Post</h2>
    </div>
    <div class="container">
        <form @submit.prevent="newPost">
            <div class="my-3">
                <label for="postTile" class="form-label">Post Title</label>
                <input v-model="title" class="form-control" type="text" placeholder="Post Title" id="postTitle"
                    aria-label="default input example" required>
            </div>
            <h3>Topic</h3>
            <div class="d-flex justify-content-center p-3  flex-wrap">
                <input v-model="type" value="strengthening" type="checkbox" class="btn-check" id="strengthening">
                <label class="btn btn-outline-primary" for="strengthening">Strengthening</label><br>
                <input v-model="type" value="streching" type="checkbox" class="btn-check" id="streching">
                <label class="btn btn-outline-primary" for="streching">Streching</label><br>
                <input v-model="type" value="feeding" type="checkbox" class="btn-check" id="feeding">
                <label class="btn btn-outline-primary" for="feeding">Feeding</label><br>
                <input v-model="type" value="recovery" type="checkbox" class="btn-check" id="recovery">
                <label class="btn btn-outline-primary" for="recovery">Recovery</label><br>

            </div>
            <div class="mb-3">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Select a Image for the Post</label>
                    <input v-model="image" class="form-control" type="text" placeholder="Image URL" id="formFile"
                        aria-label="default input example" required>
                    <!-- <input v-model="image" class="form-control" type="file" id="formFile"> -->
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary mb-4">Submit</button>

            <div class="d-flex justify-content-center btn-group container" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary"><router-link to="/">Home</router-link> </button>
                <button type="button" class="btn btn-primary"><router-link to="../posts">Posts</router-link> </button>
            </div>
        </form>
    </div>
</template>
<style scoped>
.btn-outline-primary {
    width: 50%;
}

a {
    text-decoration: none;
    color: white
}

h2 {
    background-color: green;
    width: 70vw;
    border-radius: 16px;
    color: white;
    text-shadow: 0.1em 0.1em 0.2em black
}
</style>
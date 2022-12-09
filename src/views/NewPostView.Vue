<script setup>

// import { addPost } from '../firebase/posts.js'

// const newPost= () =>{
//     addPost({
//         tittle: tittle.value,
//         type: type.value,
//         image: image.value,
//         content: content.value,
//     })
// }

</script>

<template>
    <h2 class="text-center my-3">Create a Post</h2>
    <div class="container">
        <form >
            <div class="my-3">
                <label for="postTitle" class="form-label">Post Title</label>
                <input class="form-control" type="text" placeholder="Post Title" id="postTitle"
                    aria-label="default input example" required>
            </div>
            <h3>Topic</h3>
            <div class="d-flex justify-content-center p-3  flex-wrap">
                <input type="checkbox" class="btn-check" id="strengthening" autocomplete="off">
                <label class="btn btn-outline-primary" for="strengthening">Strengthening</label><br>
                <input type="checkbox" class="btn-check" id="streching" autocomplete="off">
                <label class="btn btn-outline-primary" for="streching">Streching</label><br>
                <input type="checkbox" class="btn-check" id="feeding" autocomplete="off">
                <label class="btn btn-outline-primary" for="feeding">Feeding</label><br>
                <input type="checkbox" class="btn-check" id="recovery" autocomplete="off">
                <label class="btn btn-outline-primary" for="recovery">Recovery</label><br>

            </div>
            <div class="mb-3">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Select a Image for the Post</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<style scoped>
.btn-outline-primary {
    width: 50%;
}
</style>
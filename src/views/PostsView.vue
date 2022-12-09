<script setup>
import Posts from '../components/Posts.vue';
import posts from '../store/postStore.js';



</script>
<template>

    <h2 class="text-center">Posts</h2>
    
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
    <div  class="d-flex flex-column align-items-center">
        <!-- <Posts v-for="post in posts"/> -->
        <!-- <div data-aos="fade-right" class="container d-flex justify-content-center p-3"> -->
        <div class="card my-3" v-for="post in posts" style="width: 18rem;">
            <img :src="post.img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{post.tittle}}</h5>
                <p class="card-text">{{post.content}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

    <!-- </div> -->
</template>
<style scoped>

</style>
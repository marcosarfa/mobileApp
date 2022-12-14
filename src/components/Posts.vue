<script setup>
const props = defineProps({
    post: {},
    typeof: Object
})

</script>

<template>
    <div class="card my-3" style="width: 20rem; height: 18rem;">
        <img src="https://fondosmil.com/fondo/4030.jpg" class="card-img" alt="">
        <div class="card-img-overlay">
            <img :src="post.image" class="card-img-top" alt="...">
            <h5 class="card-title">{{ post.title }}</h5>
            <router-link class="btn btn-primary" :to="{ name: 'Post', params: { id: post.id } }">Enter</router-link>
            <!-- <a href="#" >Enter</a> -->
        </div>
    </div>

</template>
<style scoped>
.card-img {
    height: 20rem;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.69);

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);

}

.card-img-top {
    max-height: 21vh;
}

h5 {
    color: white;
}
</style>
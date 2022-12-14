<script setup>
const props = defineProps({
    comment: {},
    typeof: Object,
})
</script>


<template>
    <div>
        <div class="d-flex align-items-center header">
            <img :src="comment.photo" alt="foto perfil" class="me-2">
            <h4>{{ comment.name }}</h4>
        </div>
        <div class="d-flex justify-content-center my-2">
            <p><strong> {{ comment.text }}</strong></p>
        </div>
    </div>
</template>

<style scoped>
    img{
        border-radius: 50%;
        height: 5vh;
    }
    .header{
        border-bottom: 2px solid blue;
        border-radius: 50px 0 0 50px
    }
</style>
<script setup>
import user from '../store/profile';
import { ref } from 'vue';

const pURL= ref('')

const changeP= () =>{
  user.photoURL=pURL
}

</script>

<template>
  <div class="text-center my-3">
    <img id="user" :src="user ? user.photoURL : 'https://picsum.photos/200'">
  </div>
  <div class="container d-flex justify-content-center flex-wrap">
    <div class="col-auto">
      <label for="inputPassword2" class="visually-hidden">URL</label>
      <input v-model="pURL" type="text" class="form-control" id="inputPassword2" placeholder="URL">
    </div>
    <div class="col-auto">
      <button @click="changeP" type="submit" class="btn btn-primary mb-3">Change Profile Picture</button>
    </div>

  </div>
  <img class="container" src="https://media.istockphoto.com/id/1192837450/vector/under-construction-site-banner-sign-vector-black-and-yellow-diagonal-stripes-under.jpg?s=612x612&w=0&k=20&c=UJl_uhpxStWki_A-rII3fG_Kjp1-KKcjhHNpkCOvYwA=" alt="">
  <img class="container" src="https://media.istockphoto.com/id/1192837450/vector/under-construction-site-banner-sign-vector-black-and-yellow-diagonal-stripes-under.jpg?s=612x612&w=0&k=20&c=UJl_uhpxStWki_A-rII3fG_Kjp1-KKcjhHNpkCOvYwA=" alt="">
  </template>
<style scoped>
#user {
  vertical-align: middle;
  width: 50vw;
  border-radius: 50%;
}
</style>
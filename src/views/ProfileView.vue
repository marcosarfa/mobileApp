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
    <img :src="user ? user.photoURL : 'https://picsum.photos/200'">
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
</template>
<style scoped>
img {
  vertical-align: middle;
  width: 50vw;
  border-radius: 50%;
}
</style>
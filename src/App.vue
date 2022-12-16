<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import LogSucc from './components/LogSucc.vue';
import user from './store/profile.js';

onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})

</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <RouterView />
  </main>

  <footer v-if="user" >
    <LogSucc />
  </footer>
</template>

<style scoped>
@media (orientation:landscape) {
  header{
    left: 0;
    width: 10vw !important;
    gap: 3rem;
    height: 100vh;
  }
  main {
    margin-left: 11%;
    display: flex;
    justify-content: center;
    width: 80vw;
    min-height: 100vh;
    margin: 0;
  }
}
</style>

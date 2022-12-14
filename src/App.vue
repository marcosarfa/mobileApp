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
header {
  z-index: 3;
  width: 100%;
  position: sticky;
  top: 0%;
  min-height: 7vh;
}

main{
  min-height: 82.8vh;
}

footer {
  position: sticky;
  bottom: 0%;
  min-height: 7vh;
}
</style>

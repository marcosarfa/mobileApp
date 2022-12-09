<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import LogSucc from './components/LogSucc.vue';
import user from './store/profile.js';

// import { app } from "./firebase/index.js";
// import {
//   getFirestore,
//   collection,
//   query,
//   addDoc,
//   onSnapshot,
//   getDocs,
//   doc,
// } from "firebase/firestore";
// import posts from "./store/postStore.js";
// import { onMounted } from "vue";

// const db = getFirestore(app);
// const postsRef = collection(db, "Posts");
// const q = query(collection(db, 'Posts'))



// onMounted(() => {
//   onSnapshot((postsRef), (querySnapshot) => {
//     posts.value = []
    
//     querySnapshot.forEach((doc) => {
//       // console.log(doc.id, '=>', doc.data().tittle );
//       const post = {
//         id: doc.id,
//         tittle: doc.data().tittle,
//         image: doc.data().image,
//         content: doc.data().content,
//         type: doc.data().type
//       }
//       posts.value.push(post)
//       console.log(post);
//     })
//     console.log(posts.value);
//   })
  
  
// })


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

<script setup>
// import Posts from '../components/Posts.vue';
import { ref, onMounted } from 'vue';
import AOS from 'aos'

AOS.init()
const posts = ref([])

</script>
<template>
  <div id="start">
    <h1 class="text-center mt-3">Welcome to H&F-Tec!</h1>

  </div>
  <!-- <img data-aos="fade-up" class="container mb-3"
    src="https://cdn.bioguia.com/embed/e3daa9e79ef76e4f4a5fa67f730f26a11606949145/HOME-DOCUMENTAL.jpg" alt=""> -->
  <div id="presentation" class="container row align-content-center m-0">
    <p class="col-6 ms-2"><strong> The best place to find information about the your body care</strong></p>
  </div>

  <div class="container text-center my-2 d-flex flex-column justify-content-center align-items-center">
    <h3>Here you can find posts about</h3>
    <div class="row ms-1">
      <div class="col-6 m-1 posts" id="posts1">
        <p class="mt-4"><strong>Strengthening</strong></p>
      </div>
      <div class="col-6 m-1 posts" id="posts2">
        <p class="mt-4"><strong>Streching</strong></p>
      </div>
      <div class="col-6 m-1 posts" id="posts3">
        <p class="mt-4"><strong>Feeding</strong></p>
      </div>
      <div class="col-6 m-1 posts" id="posts4">
        <p class="mt-4"><strong>Recovery</strong></p>
      </div>

      <!-- <a  class="col-6" id="posts" href=""><span><img src="https://s.yimg.com/ny/api/res/1.2/dODedlBy9iiUoNoSck9XlA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMQ--/https://media.zenfs.com/es/men_s_health_es_614/bfef3236ed5c32e821639b369b9cec80" alt=""></span>strengthening</a>
      <a  class="col-6" id="posts" href=""><span><img src="../assets/img/streching.jpeg" alt=""></span>streching</a>
      <a  class="col-6" id="posts" href=""><span><img src="../assets/img/feeding.jpeg" alt=""></span>feeding</a>
      <a  class="col-6" id="posts" href=""><span><img src="../assets/img/recovery.jpg" alt=""></span>recovery</a> -->
    </div>
  </div>
  <div class="row d-flex justify-content-around my-2 align-items-top" id="aPosts">
    <p class="col-6 mt-1">You can enter here to watch all the posts!.</p>
    <button type="button" class="btn btn-primary h-25 col-3 mt-3"><router-link to="./posts">Posts</router-link></button>
  </div>
  <div class="container d-flex flex-column justify-content-center my-2 align-items-center" id="work">
    <p class="text-white align-self-start">You can contribute whit the page, only entering here and suscribing to start
      posting and sharing everything than can help others!</p>
      <router-link to="./work"><button type="button" class="btn btn-primary h-30 mb-5 ms-5 align-self-end"></button></router-link>
  </div>

</template>
<style scoped>
a {
  text-decoration: none;
  color: white
}

.posts {
  height: 10vh;
  width: 20vh;
  object-fit: cover;
}

.posts p {
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em
}

#posts1 {
  background-image: url(https://s.yimg.com/ny/api/res/1.2/dODedlBy9iiUoNoSck9XlA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMQ--/https://media.zenfs.com/es/men_s_health_es_614/bfef3236ed5c32e821639b369b9cec80);
  background-size: cover;
  background-position: center;
}

#posts2 {
  background-image: url(../assets/img/streching.jpeg);
  background-size: cover;
  background-position: center;
}

#posts3 {
  background-image: url(../assets/img/feeding.jpeg);
  background-size: cover;
  background-position: center;
}

#posts4 {
  background-image: url(../assets/img/recovery.jpg);
  background-size: cover;
  background-position: center;
}

#start {
  background-image: url(https://img.freepik.com/premium-vector/healthy-vector-banner_36298-53.jpg?w=2000);
  background-size: cover;
  background-position: center;
  height: 25vh;
}

#presentation {
  background-image: url(../assets/img/running_207779833.jpg);
  background-size: cover;
  background-position: center;
  height: 25vh;
}

#presentation p{
  text-shadow: 0 0 0.2em white, 0 0 0.2em #87F,
		0 0 0.2em #87F
}

#aPosts {
  background-image: url(https://static.abc.es/media/MM/2022/08/03/elevacion-cadera-U40124306929rZH--620x349@abc.jpg);
  background-size: cover;
  background-position: bottom;
  height: 20vh;
  width: auto;
}

#work {
  background-image: url(https://st3.depositphotos.com/7865540/15309/i/450/depositphotos_153096354-stock-photo-work-with-us-concept.jpg);
  background-size: cover;
  background-position: bottom;
  height: 30vh;
}

#work button {
  background: rgba(255, 255, 255, 0.41);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 1);
  width: 70vw;
  height: 10vh;
}

.row {
  --bs-gutter-x: 0;
}
</style>
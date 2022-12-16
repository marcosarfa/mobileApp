<script setup>
import Swal from 'sweetalert2'

const send= ()=>{
Swal.fire({
  title: 'Received',
  text: 'Thank you for contact us. We will be talking whit you in shortly',
  imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/39/28/68/1000_F_239286873_IrgtoLhws6GZf8Qr6I1XMzBxIBB4juSs.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
}
</script>

<template>

    <div class="d-flex justify-content-center my-3">
        <h2 class="text-center">Work with Us</h2>
    </div>
    <form @submit.prevent="send" class="container p-3 my-3">
        <div class="mb-3">
            <label for="Name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
            <label for="surName" class="form-label">Surname</label>
            <input type="text" class="form-control" id="surname" required>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>

    <img src="https://www.pm4ngos.org/wp-content/uploads/2019/11/National_Thank_You_Day.png" alt="">

</template>
<style scoped>

label{
    color: white;
}

h2 {
    background-color: green;
    width: 70vw;
    border-radius: 16px;
    color: white;
    text-shadow: 0.1em 0.1em 0.2em black
}

form{
    background-image: url(https://besthqwallpapers.com/Uploads/18-4-2017/15269/morning-run-healthy-lifestyle-morning-runners-athlete.jpg);
    background-size: cover;
    border-radius: 20px;
}

img{
    max-width: 100vw;
    border-radius: 20px;
    background-image: url(https://fondosmil.com/fondo/6594.jpg);
    background-size: cover;
}
</style>
<script setup>
import { RouterLink } from 'vue-router';
import { loginWithGoogle } from '../firebase/authentication'
import user from '../store/profile';

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark container">
        <div class="container-fluid d-flex">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <a class="navbar-brand" href="#">H&F-Tec</a>
            </div>
            <div v-if="!user" id="login">
                <!-- <button type="button" class="btn btn-info"> -->
                <button class="btn btn-primary p-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img
                        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" /></button>

                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Log In</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <form class="container">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" required>                                 
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" required>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            <div class="text-center">
                                <button  @click="loginWithGoogle" class="btn btn-primary">Login with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- <router-link to="./login"><img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" /></router-link> -->
                <!-- </button> -->
            </div>
            <div class="navbar collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./rules">Rules & Policies</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./work">Work with us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

li {
    padding: 5px;
}

#login {
    width: 56px;
    height: 44px;
}


button img {
    width: 75%;
}
</style>

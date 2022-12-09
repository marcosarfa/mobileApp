<template>

    <div class="text-center my-3">
        <h2>Work with Us</h2>
    </div>
    <form class="container">
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
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" required>
        </div>
        <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>

</template>
<style scoped>


    
</style>
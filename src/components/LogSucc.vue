<script setup>
import user from '../store/profile.js'
import { logout } from '../firebase/authentication.js';
</script>

<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid d-flex align-items-center">
            <button type="button" class="btn btn-dark p-0"><RouterLink to="./newPost">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///9isB5grxl2uUFmsiT4/PRYrABarQBTqgBVqwBerhO32Z9drg2/3al4ukT9/vva683p8+B0uT2v1ZSPxWep0o2Tx236/feDv1TQ5r+by3mKw19+vU2izoTy+O1utjHi8NjI4bW+3aja7Muz15qhzoHs9eUfkYdUAAAEd0lEQVR4nO2diXaqMBRFNSJDBAUHnBU7+P+f+KBd7WtXS7gJvpd7WWf/gHevhAxITkYjAAAAAAAAvnEpqjzPq+Liu5B/QjVbL8dp2JAG8zIrfBf0WKazIIm0UuN3lNJhsrwtfJf1MLarKBz/QCUqG4hjHvzi9+44H0RfnYXqd8Earfe+y+vPJmn1awgz3wX2ZRMbBcfj+Oa7xH7cugRrxdx3kX0oWsaYr6ix5AXASXcbjtO17zLdeSI0YU0idkCdBu3zxLd+Otn6LtURYhPWjSh1PF3SmrCe+E++S3Wj6p4pPohlrt421E5ar2xWvot14krtpPVYs/RdrAtTeietu6nE0fTZylDi0i2jP4ZCtxjn1MIw3fgu14E1ZU36gZa4Nt3Rh9J6MN35LteBuZXh3He5DkysDCe+y3UAhjDkDwxhyB8YwpA/MIQhf2AIQ/7AEIb8gSEM+QNDGPIHhjDkDwxhyB8YwpA/MIQhf2AIQ/7AEIb8gSEM+QNDGPIHhjDkj5Av2Yv9y+F4mk/smVv4NTj9xul4eNm7n+zb3tZRHEdaKycsDd1+ROumxPLmcjCseE0Tm1MvPtFxerZtycshSm1bwScqTM9TG8GbsjmWxYMoeKYLHsxpHUxRCfWs7WJnc3KQE8mBZniSKlgrlhTBUq5grUg4qZmJfAY/6c7YuGtJk8RPVNA1aRzkTRPfCTv66T3yXWFflDYH+qwkDzPvhDOjITFRhjPqahK0iCPhS1wZDMmZOZwx5jMcpeyXTBjTCywCV/hiehC30ifDd9L2Hf99CI9h/SDeWw2rgRhWrYb5QAzb43yGbzj8XkqJqhSAwfAyEMP2sXQ0HsKMb5oPR6chGBo3FwPYHtbrUtMLN6sUOa4Y9xaLISxMzUGaVjFyPDHv8YcwI3a8pxmV0htRpR3h2YX014nR2SxolRzLEUr++UT0uxpKrPQ9ErywCUn/ID7L7acRMUJzb7hzgzXhjnqtSyXwQ4Xmf/ySfm/N9JiIa0YdPZH9GrKrrK6qk2NlJfh2RVMsZd5QYXK0+Jjmk8V+HcWhtv5C7X+iVPNh23VleG/RQZUddstr4IJlrU6/cV2eypd9/1tcFtupPQvLL2gXDr+x9Xvn1/C/EYYhDPkDQxjyB4Yw5A8MYcgfGMKQPzCEIX9gCEP+wBCG/IEhDPkDQxjyB4Yw5A8MYcgfGMKQPzCEIX9gCEP+wBCG/IEhDPkjJCm5BzsrQ+KhM1asbU7cGNOruGJ18D3tPL3LEKvsN2MOAlesEihil4NZvrlYGVpFVXPBJmXSnPTAlVf6UJMS4n8ZktO7qTGuki8LcgqjyDVbwwt1vhA5VzRciAds1VXkSNpAjJ0S24Sj0Zb0JOqT7zp7kFMC3iP3a1QYsOpWjAl5K5wpuxRj6qUUbDkYRxv6rRuM2RgCNnQkdxj9wj5oaUaVLCvfxT2G6Sb8xVEl6ZPfTIRHcpldk+hvhohSOkyW2XD83qhm60mQhg1pMC8z0ZNgK5eiyvOqKvqHkQAAAAAAgIHxB3RVY2ojZ4odAAAAAElFTkSuQmCC"
                    alt="" /></RouterLink>
            </button>
            <router-link to="./profile"><img class="user" :src="user? user.photoURL : 'https://picsum.photos/200'" alt=""></router-link>
            <router-link to="./favs"><img class="user" src="../assets/img/fav.png" alt="favs"></router-link>
            <router-link to="./help"><img class="user" src="../assets/img/question.png" alt=""></router-link>
            <a @click="logout" href=""><img class="user" src="../assets/img/logout.png" alt=""></a>
        </div>
    </nav>
</template>

<style scoped>
button {
    width: 56px;
    height: 56px;
}

button img {
    width: 100%;
    border-radius: 50%;
}

.user{
    width: 56px;
    border-radius: 50%;

}
</style>
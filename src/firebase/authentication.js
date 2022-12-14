import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import user from "../store/profile.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function loginWithGoogle() {
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log('result', result);
        let newUser = {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email,
        }
        localStorage.setItem('user',JSON.stringify(newUser))
        user.value = {
            ...newUser
        }
    })
    .catch((error)=>{
        console.warn('error', error);
    })
}

function logout(){
    signOut(auth).then(() => {
        user.value = null;
        localStorage.setItem('user',null)
      }).catch((error) => {

      });
}

export { loginWithGoogle, logout }
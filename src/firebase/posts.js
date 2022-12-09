import { app } from "./index.js";
import {
  getFirestore,
  collection,
  // query,
  // addDoc,
  onSnapshot,
  // getDocs,
  // doc,
} from "firebase/firestore";
import posts from "../store/postStore.js";
// import { onMounted } from "vue";

const db = getFirestore(app);
const postsRef = collection(db, "posts");
// const q = query(collection(db, 'Posts'))

onSnapshot(postsRef, (querySnapshot) => {
  posts.value = [];

  querySnapshot.forEach((doc) => {
    console.log(posts);
    // console.log(doc.id, '=>', doc.data().tittle );
    // const post = {
    //   id: doc.id,
    //   tittle: doc.data().tittle,
    //   image: doc.data().image,
    //   content: doc.data().content,
    //   type: doc.data().type,
    // };
    // posts.value.push(post);
    // console.log(post);
  });
  console.log(posts.value);
});

// const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, '=>', doc.data());

//     })

// const addPost= (post)=>{
//     addDoc(collection(q), post)
// }

// export { addPost }

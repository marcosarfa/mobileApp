import { app } from "./index.js";
import {
  getFirestore,
  collection,
  onSnapshot, 
  addDoc
} from "firebase/firestore";
import posts from "../store/postStore.js";

const db = getFirestore(app);
const postsRef = collection(db, "Posts");

const getPosts= ()=>{
onSnapshot(postsRef, (querySnapshot) => {
  posts.value = [];

  querySnapshot.forEach((doc) => {
    const newPost ={
      id: doc.id,
      title: doc.data().title,
      name: doc.data().name,
      content: doc.data().content,
      image: doc.data().image,
      type: doc.data().type
    }
    posts.value.push(newPost)
    posts.value.sort((a,b)=> b.date - a.date)
  });
  console.log(posts.value);
});
}

const addPost= (post)=>{
    addDoc(postsRef, post)
};

export { addPost , getPosts}

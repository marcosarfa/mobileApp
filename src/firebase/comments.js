import { app } from './index.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore,} from 'firebase/firestore';
import comments from '../store/commentStore.js'

const db = getFirestore(app)
const commentRef= collection(db, 'comments')

const getComments = () => {
onSnapshot(commentRef, (snapshot)=>{
    comments.value = []
    snapshot.forEach(commentData => {
        let newComment= {
            id: commentData.id,
            postId: commentData.data().postId,
            date: commentData.data().date,
            name: commentData.data().name,
            text: commentData.data().text,
            photo: commentData.data().photo
        }
        comments.value.push(newComment)
    })
    comments.value.sort((a,b) => a.date - b.date)
})
}

const addComments = (comment) => {
    addDoc(commentRef, comment)
}

export { getComments, addComments }
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from 'firebase-firestore';
import { VOCABULARY_STATUS } from './status.js'
import {app} from '../app.js';

export const db = getFirestore(app);

export function createWriting(sentence, tense){
    /* Referencia a coleccion */
    const collectionRef = collection(db, "writing");
    let writingJSON = {
        sentence,
        tense,
        status: VOCABULARY_STATUS.ACTIVE
    };

    console.log(writingJSON);
    /* setDoc */
    return addDoc(collectionRef,writingJSON);
}
/* Funcion para leer las oraciones de la base de datos */
export async function getWriting(){
    const collectionRef = collection(db, "writing");
    /* getDocs retorna un querysnapshot q es una instantanea  de la coleccion*/
    const querySnapshot = await getDocs(collectionRef);

    const writing = [];

    querySnapshot.forEach((doc)=>{
        let writingJSON = {
            id: doc.id,
            ...doc.data()
        }
        writing.push(writingJSON);
    });

    return writing;
}

export function deleteWriting(id){
    const docRef = doc(db,"writing", id);
    return deleteDoc(docRef);
}

export function updateWriting(id, data){
    const docRef = doc(db,"writing", id);
    updateDoc(docRef, data);
}
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from 'firebase-firestore';
import { VOCABULARY_STATUS } from './status.js'
import {app} from '../app.js';
import { Vocabulary } from '../components/vocabulary/formVocabulary.js';


export const db = getFirestore(app);

export function createVocabulary(word, languaje, meaning, tenseWord){
    /* Referencia a coleccion */
    const collectionRef = collection(db, "vocabulary");
    let vocabularyJSON = {
        word,
        languaje,
        meaning,
        tenseWord,
        status: VOCABULARY_STATUS.ACTIVE
    };

    console.log(vocabularyJSON);
    /* setDoc */
    return addDoc(collectionRef,vocabularyJSON);
}
/* Funcion para leer el vocabulario de la base de datos */
export async function getVocabulary(){
    const collectionRef = collection(db, "vocabulary");
    /* getDocs retorna un querysnapshot q es una instantanea  de la coleccion*/
    const querySnapshot = await getDocs(collectionRef);

    const vocabulary = [];

    querySnapshot.forEach((doc)=>{
        let vocabularyJSON = {
            id: doc.id,
            ...doc.data()
        }
        vocabulary.push(vocabularyJSON);
    });

    return vocabulary;
}

export function deleteVocabulary(id){
    const docRef = doc(db,"vocabulary", id);
    return deleteDoc(docRef);
}

export function updateVocabulary(id, data){
    const docRef = doc(db,"vocabulary", id);
    updateDoc(docRef, data);
}
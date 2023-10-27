import { getFirestore, doc, setDoc} from 'firebase-firestore';
import {app} from '../app.js'

export const db = getFirestore(app);

export function createUser(user){
    const docRef = doc(db, "users", user.uid);
    /*  setDoc : usamos para guardar un documento en la base de datos 
        doc:   la referencia se genera con lam funcion doc   
    */
    return setDoc(docRef, {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
    });
};




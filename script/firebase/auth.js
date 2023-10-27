import {app} from "../app.js"
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase-auth";

/* exportando configuracion auth */

export const auth = getAuth(app);


/* exportando funcion login */

export function login(){
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
}

/* exportando funcion logout */

export function logout(){
    auth.signOut()
        .then(()=>console.log("Adios!"))
        .catch(err=> console.log(err));
}






/* time: 1:2min hora */
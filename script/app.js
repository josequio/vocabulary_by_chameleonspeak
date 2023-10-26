import { initializeApp } from "firebase-app";
import { Access } from "./components/access/access.js"; 


const firebaseConfig = {
    apiKey: "AIzaSyA7jPO890a464KgejnECiGzZoTQwYcyhlI",
    authDomain: "vocabulary-eabbb.firebaseapp.com",
    projectId: "vocabulary-eabbb",
    storageBucket: "vocabulary-eabbb.appspot.com",
    messagingSenderId: "255121755612",
    appId: "1:255121755612:web:f19b812e6ce230fbaa5319"
};


export const app = initializeApp(firebaseConfig);

/* Esto es un import dinamico */
import("./firebase/auth.js").then(function ({ login, logout, auth}) {

    /* Verificar si usuario esta autenticado */
    auth.onAuthStateChanged(function (user) {
      
    })

});


customElements.define('app-access', Access);
/* 55min */


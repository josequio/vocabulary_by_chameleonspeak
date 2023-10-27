import { initializeApp } from "firebase-app";
import { Access } from "./components/access/access.js"; 
import tree from './state.js'


const firebaseConfig = {
    apiKey: "AIzaSyA7jPO890a464KgejnECiGzZoTQwYcyhlI",
    authDomain: "vocabulary-eabbb.firebaseapp.com",
    projectId: "vocabulary-eabbb",
    storageBucket: "vocabulary-eabbb.appspot.com",
    messagingSenderId: "255121755612",
    appId: "1:255121755612:web:f19b812e6ce230fbaa5319"
};


export const app = initializeApp(firebaseConfig);

import("../../firebase/auth.js").then(({ auth }) => {
    /* Verificar cambios en el estado de autenticacion */
    auth.onAuthStateChanged((user) => {
    });   
});




customElements.define('app-access', Access);
/* 55min */


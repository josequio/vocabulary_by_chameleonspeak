import { initializeApp } from "firebase-app";
import { Access } from "./components/access/access.js";
import { Error } from "./components/error/error.js"; 
import { Vocabulary } from "./components/vocabulary/formVocabulary.js";
import { VocabularyList } from "./components/vocabulary/listVocabulary.js";
import { Word } from "./components/vocabulary/wordVocabulary.js";
import tree from './state.js'
import { Logout } from "./components/access/logout.js";


const firebaseConfig = {
    apiKey: "AIzaSyA7jPO890a464KgejnECiGzZoTQwYcyhlI",
    authDomain: "vocabulary-eabbb.firebaseapp.com",
    projectId: "vocabulary-eabbb",
    storageBucket: "vocabulary-eabbb.appspot.com",
    messagingSenderId: "255121755612",
    appId: "1:255121755612:web:f19b812e6ce230fbaa5319"
};


export const app = initializeApp(firebaseConfig);

import("../script/firebase/auth.js").then(({ auth }) => {
    /* Verificar cambios en el estado de autenticacion */
    auth.onAuthStateChanged((user) => {
        /* el argumento user se actuliza al hacer un cambio de inicio de sesion, cambiando el valor de user en state.js  */
        tree.select('user').set(
            JSON.parse(JSON.stringify(user))
        )
    });   
});

import("./firebase/users.js").then(({createUser}) => {
    tree.select('user').on('update', (e) => {
        console.log(e)
        let user = e.data.currentData;
        if(user){
            createUser(user);
        }
    });

});



customElements.define('app-access', Access);
customElements.define('app-error', Error);
customElements.define('app-logout',Logout);

customElements.define('app-vocabulary-form',Vocabulary);
customElements.define('app-vocabulary-list',VocabularyList);
customElements.define('app-vocabulary-word', Word);
/* 55min */


navigator.serviceWorker.register('../sw.js')

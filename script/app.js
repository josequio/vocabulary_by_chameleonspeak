import { initializeApp } from "firebase-app";
import { Access } from "./components/access/access.js";
import { Error } from "./components/error/error.js"; 
import { FormVocabulary } from "./components/vocabulary/formVocabulary.js";
import { VocabularyList } from "./components/vocabulary/listVocabulary.js";
import { BodyVocabulary } from "./components/vocabulary/bodyVocabulary.js";
import { Word } from "./components/vocabulary/wordVocabulary.js";

import { FormWriting } from "./components/writing/writing-form.js";
import { BodyWriting } from "./components/writing/writing-body.js";
import { ListWriting } from "./components/writing/writing-list.js";
import { Footer } from "./components/footer/footer.js";


import tree from './state.js'
import { Logout } from "./components/access/logout.js";


let initializedApp;

fetch('/__/firebase/init.json').then(async response => {
    const config = await response.json();
    initializedApp = initializeApp(config);
})


export const app = initializedApp;

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

customElements.define('app-vocabulary-form',FormVocabulary);
customElements.define('app-vocabulary-list',VocabularyList);
customElements.define('app-vocabulary-body',BodyVocabulary);
customElements.define('app-vocabulary-word', Word);

customElements.define('app-writing-form',FormWriting);
customElements.define('app-writing-body',BodyWriting);
customElements.define('app-writing-list',ListWriting);
customElements.define('app-vocabulary-footer', Footer);




navigator.serviceWorker.register('../sw.js');

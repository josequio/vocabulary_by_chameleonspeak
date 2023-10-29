import { LitElement, html, css } from 'lit';
import tree from '../../state.js';

export class BodyVocabulary extends LitElement {
    static get styles() {
        return css`
        
        `;
    }


    static get properties() {
        return {
            user: {type: Object},
        }
    }

    constructor() {
        super();
        this.user = null;

        tree.select('user').on('update', (e) => {
            /* console.log(e); */
            this.user = e.data.currentData;
        });

    }


    vocabularyComponents() {
        if (this.user) {
            return html`
            <app-vocabulary-form></app-vocabulary-form>
            <app-vocabulary-list></app-vocabulary-list> 
        `;
        }

    }

    render() {
        return html`
        <div>
             ${this.vocabularyComponents()}
        </div>
        `;
    }


}

/* time: 18min revision de fallas */
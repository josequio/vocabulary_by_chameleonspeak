import { LitElement, html, css } from 'lit';
import { VOCABULARY_STATUS } from '../../firebase/status.js';

export class Word extends LitElement {

    static get properties() {
        return {
            wordVy: { type: Object }
        };
    }

    constructor(){
        super();
        import('../../firebase/vocabulary.js').then(({deleteVocabulary, updateVocabulary })=>{
            this.deleteVocabulary = deleteVocabulary;
            this.updateVocabulary = updateVocabulary;
        });
    }

    check(e){
        this.updateVocabulary(this.wordVy.id, {
            status: VOCABULARY_STATUS.COMPLETED
        })
    }


    render() {
        return html`
                <div> ${this.wordVy.word} </div>
                <div> ${this.wordVy.languaje} </div>
                <div> ${this.wordVy.meaning} </div>
                <div> ${this.wordVy.tenseWord} </div>
                <div> ${this.wordVy.status} </div>
                <button @click=${ ()=> this.deleteVocabulary(this.wordVy.id) } >🗑</button>
                <button @click=${ ()=> this.check() } >❇</button>
        `;
    }
}

/* time 53 */
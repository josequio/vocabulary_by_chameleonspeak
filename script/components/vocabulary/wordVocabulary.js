import { LitElement, html, css } from 'lit';
import { VOCABULARY_STATUS } from '../../firebase/status.js';

export class Word extends LitElement {
    static get styles(){
        return css`
        table {
            border-collapse: collapse; 
          }
          td, th {
            border: 1px solid black; 
          }
        `;
    }

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
        <table>
            <caption></caption>
            <thead>
                <tr>
                    <th>Vocabulary</th>
                    <th>Languaje</th>
                    <th>Meaning</th>
                    <th>Tense</th>
                    <th>Status</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>${this.wordVy.word}</th>
                <th>${this.wordVy.languaje}</th>
                <th>${this.wordVy.meaning}</th>
                <th>${this.wordVy.tenseWord}</th>
                <th>${this.wordVy.status} </th>
                <th>
                    <button @click=${ ()=> this.deleteVocabulary(this.wordVy.id) } >🗑</button>
                    <button @click=${ ()=> this.check() } >❇</button>
                </th>
        </tr>
            </tbody>
        </table>
                
        `;
    }
}


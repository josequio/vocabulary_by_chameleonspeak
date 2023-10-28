import { LitElement, html, css } from 'lit';

export class VocabularyList extends LitElement{
    static get properties(){
        return {
            vocabulary: { type: Array }
        }
    }

    constructor(){
        super();
        import("../../firebase/vocabulary.js").then(({getVocabulary}) => {
            getVocabulary().then(vocabulary => {
                this.vocabulary = vocabulary;
            })
        })
    }

    render(){
        return html`
            <h2>Vocabulary</h2>
            <div>
                ${
                    this.vocabulary.map(
                        wordVy => html`
                            <app-vocabulary-word .wordVy=${wordVy} ></app-vocabulary-word>
                        `
                    )
                }
                        
            </div> 
        `;
    }
}

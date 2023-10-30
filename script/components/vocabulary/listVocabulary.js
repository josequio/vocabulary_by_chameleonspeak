import { LitElement, html, css } from 'lit';

export class VocabularyList extends LitElement{
    static get styles(){
        return css`
            .scroll{
                overflow: auto;
            }
            h2{
                text-align: center;
            }
            p{
                color:red;
            }
            @media (max-width: 600px) {
                div{
                    max-width: 15rem;
                }
            }
        `;
    }
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
            <div>
                <h2>My Vocabulary</h2>
                <p>Por favor realice una recarga a la pagina para visualizar los cambios, funcionalidad en construcción</p>
                <div class = "scroll">
                ${
                    this.vocabulary.map(
                        wordVy => html`
                            <app-vocabulary-word .wordVy=${wordVy} ></app-vocabulary-word>
                        `
                    )
                }
                </div>
                        
            </div> 
        `;
    }
}

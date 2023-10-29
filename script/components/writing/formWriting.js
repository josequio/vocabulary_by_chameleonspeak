import { LitElement, html, css } from 'lit';
import tree from '../../state.js';

export class Writing extends LitElement {
    static get styles() {
        return css`
        
        @media screen and (max-width: 767px) {
        
            }
        }
        

        `;
    }


    static get properties() {
        return {
            user: { type: Object },
            sentence: { type: String },
            tense: { type: String }
        
        }
    }

    constructor() {
        super();
        this.sentence = "";
        this.tense = "";

        import('../../firebase/writing.js').then(({ createWriting }) => {
            this.createWriting = createWriting;
        })

        tree.select('user').on('update', (e) => {
            this.user = e.data.currentData;
        });
    }

    create(e) {
        e.preventDefault();
        this.createWriting(this.sentence, this.tense);

    }

    render() {
        if (this.user) {
            return html`
        <div class="div_writing">
            <h2 class="vocabulary_title"><span>Writing</span> <span> by ChamelonSpeak</span></h2>
            <p>${console.log(this.sentence, this.tense)} </p>
            <form class="form_writing" id="form_writing"  @submit=${(e) => this.create(e)}>
                <label for="sentence"></label>
                <input type="text" name="sentence" id="sentence"  @input=${(e)=>{ this.sentence = e.target.value }} placeholder="Crea una oración">

                <select name="tense" id="tense" @change=${(e)=>{ this.tense = e.target.value; }}>
                    <option value="PS">Present Simple</option>
                    <option value="PC">Present Continuous </option>
                    <option value="PP">Present Perfect</option>
                    <option value="PPC">Present Perfect Continuous</option>
                    <option value="PASS">Past Simple</option>
                    <option value="PASC">Past Continuous</option>
                    <option value="PASP">Past Perfect</option>
                    <option value="PASPC">Past Perfect Continuous</option>
                    <option value="FS">Future Simple </option>
                    <option value="FC">Future Continuous</option>
                    <option value="FP">Future Perfects</option>
                    <option value="FPC">Future Perfect Continuous</option>
                    <option value="OTHERS">Others</option>
                </select>

                <details>
                    <summary>Mas inspirado?</summary>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Crea un texto ..."></textarea>
                </details>

                <button type = "submit">CREATE SENTENCE or TEXT</button>
            </form>
            <app-writing-list></app-writing-list>
        </div>
        `;
        }

    }



}

/* time: 18min revision de fallas */
import { LitElement, html, css } from 'lit';
import tree from '../../state.js';

export class FormWriting extends LitElement {
    static get styles() {
        return css`
        form {
            border-radius: 0.4rem;
            background-color: #717d850f;
            min-width: 17rem;
            max-width: 22rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            padding:0.5rem;
            margin:0;
        }
        form p{
            color: red;
        }
        
        
        `;
    }


    static get properties() {
        return {
            user: { type: Object },
        }
    }

    constructor() {
        super();

    }

    render() {
        return html`
        <form class="form_writing" id="form_writing">
            <h2>Writing by ChameleonSpeak </h2>
            <p>* Aún en construcción</p>
            <label for="sentence"></label>
            <input type="text" name="sentence" id="sentence" placeholder="Introduce una oración">

            <select name="tense" id="tense">
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



                <button disabled>CREATE SENTENCES</button>
            </form>
       
    `;

    }

}

/* time: 18min revision de fallas */
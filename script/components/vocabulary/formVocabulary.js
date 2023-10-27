import { LitElement, html, css } from 'lit';
import tree from '../../state.js';

export class Vocabulary extends LitElement {

    static get properties() {
        return {

        }
    }

    static get styles() {
        return css`
        form {
            min-width: 17rem;
            max-width: 22rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
        }
        form h2{
            text-align: center;
        }
        
        .form_meaning,
        .div_word-lang{
            display: inherit;
            align-items: center;
            justify-content:center ;
            gap: 0.2rem;
            width: 100%;
        }
        
        .div_word-lang>input,select{
            height: 2rem;
            width: 100%;
        }
        
        .form_meaning>input{
            height: 1.5rem;
            width: 100%;
        }
        
        form fieldset>legend{
            text-align: center;
        }
        
        .form_btn-writing{
            display: inherit;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        
        `;
    }

    render() { 
        return html`
        <form>
        <h2>Vocabulary by ChameleonSpeak </h2>
        <div class="div_word-lang">
            <label for="word"></label>
            <input type="text" name="word" id="word" placeholder="Introduce la palabra">

            <select name="country" id="country">
                <option value="EN">English</option>
                <option value="PT">Portuguese</option>
                <option value="ZH">Mandarin Chinese</option>
                <option value="FR">French</option>
                <option value="DE">German</option>
                <option value="RU">Russian</option>
                <option value="JA">Japanese</option>
                <option value="KO">Korean</option>
            </select>
        </div>

        <div class="form_meaning">
            <label for="meaning">Significado:</label>
            <input type="text" name="meaning" id="meaning" placeholder="Significado">
        </div>

        <fieldset>
            <legend>Grammatical categories</legend>
            <div class="div_grammatical-categories">
                <label for="regVerb">
                    <input type="radio" name="gramatical" id="regVerb" value="regVerb">
                    <span>reg. verb</span>
                </label>
                <label for="irregVerb">
                    <input type="radio" name="gramatical" id="irregVerb" value="irregVerb">
                    <span>irreg. Verb</span>
                </label>
                <label for="adjective">
                    <input type="radio" name="gramatical" id="adjective" value="adjective">
                    <span>adjective</span>
                </label>
        </fieldset>
        <select name="tense" id="tense">
            <option value="PS">Gramatical Tense</option>
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

        <div class="form_btn-writing">
            <p>Crea:</p>
            <a href="#form_writing" class="btn-writing"><span>Writing</span> <span> by
                    ChamelonSpeak</span></a>
        </div>

        <fieldset class="vocabulary_category">
            <legend>Categoria</legend>
            <div class="div_category-topics">
                <label for="saludos">
                    <input type="checkbox" name="topics" id="saludos" value="saludos">
                    <span>Saludos</span>
                </label>
                <label for="familia">
                    <input type="checkbox" name="topics" id="familia" value="familia">
                    <span>Familia</span>
                </label>
                <label for="casa">
                    <input type="checkbox" name="topics" id="casa" value="casa">
                    <span>Casa</span>
                </label>
                <label for="comida">
                    <input type="checkbox" name="topics" id="comida" value="comida">
                    <span>Comida</span>
                </label>
                <label for="ropa">
                    <input type="checkbox" name="topics" id="ropa" value="ropa">
                    <span>Ropa</span>
                </label>
                <label for="tiempo">
                    <input type="checkbox" name="topics" id="tiempo" value="tiempo">
                    <span>Tiempo</span>
                </label>
                <label for="deportes">
                    <input type="checkbox" name="topics" id="deportes" value="deportes">
                    <span>Deportes</span>
                </label>
                <label for="viajes">
                    <input type="checkbox" name="topics" id="viajes" value="viajes">
                    <span>Viajes</span>
                </label>
                <label for="educación">
                    <input type="checkbox" name="topics" id="educación" value="educación">
                    <span>Educación</span>
                </label>
                <label for="trabajo">
                    <input type="checkbox" name="topics" id="trabajo" value="trabajo">
                    <span>Trabajo</span>
                </label>
                <label for="arte">
                    <input type="checkbox" name="topics" id="arte" value="arte">
                    <span>Arte</span>
                </label>
            </div>
        </fieldset>
        <button>NEW WORD</button>
    </form>
        `;
    }



}

/* time: 18min revision de fallas */
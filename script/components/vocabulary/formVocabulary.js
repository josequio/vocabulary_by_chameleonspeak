import { LitElement, html, css } from 'lit';
import tree from '../../state.js';

export class FormVocabulary extends LitElement {
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
        form h2{
            text-align: center;
            margin:0;
            padding: 0.5rem;
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
            color:red;
        }
        
        .form_btn-writing{
            display: inherit;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        form button{
            cursor: pointer;
        }
        a.title-design{
            text-decoration: none;
            text-align: center;
            background-color: #00539a;
            padding: 0.5rem 0.6rem;
            border-radius: 0.2rem;
        }

        a.title-design:hover{
            background-color: white;
        }
        
        .title-design>span:first-child{
            padding: 0.2rem;
            font-size: 1.1rem;
            text-align: center;
            background-color: #00539a;
            border-radius: 0.3rem;
            color: aliceblue;
        }
        
        .title-design>span:nth-child(2){
            padding: 0.1rem;
            font-size: 0.7rem;
            background-color: #ffd94e;
            border-radius: 0.1rem;
            color: rgb(0, 0, 0);
            font-weight: 400;
            
        }
        
        .title-design>span{
            font-size: 0.9rem;
        }

        
        `;
    }


    static get properties() {
        return {
            user: { type: Object },
            word: { type: String },
            languaje: { type: String },
            meaning: { type: String },
            tenseWord: { type: String }
        }
    }

    constructor() {
        super();

        this.word = "";
        this.languaje = "";
        this.meaning = "";
        this.tenseWord = "";

        import('../../firebase/vocabulary.js').then(({ createVocabulary }) => {
            this.createVocabulary = createVocabulary;
        })


    }

    create(e) {
        e.preventDefault();
        this.createVocabulary(this.word, this.languaje, this.meaning, this.tenseWord);
    }

    render() {
        return html`
        <form @submit=${(e) => this.create(e)} >
        <h2>Vocabulary by ChameleonSpeak </h2>
        <div class="div_word-lang">
            <label for="word"></label>
            <input type="text" name="word" id="word" placeholder="Introduce la palabra" @input=${(e) => { this.word = e.target.value }} required>

            <select name="languaje" id="languaje" @change=${(e) => { this.languaje = e.target.value; }} required>
                <option value="" selected>Languaje</option>    
                <option value="EN" >English</option>
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
            <input type="text" name="meaning" id="meaning" placeholder="Significado" @input=${(e) => { this.meaning = e.target.value }} required>
        </div>

        <fieldset disabled>
            <legend>Grammatical categories (DISABLED)</legend>
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
        <select name="tenseWord" id="tenseWord" @change=${(e) => { this.tenseWord = e.target.value; }} required>
            <option value="" selected>Gramatical Tense</option>
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
            <a href="#writing" class="btn-writing title-design"><span>Writing</span> <span> by ChamelonSpeak</span></a>
        </div>

        <fieldset class="vocabulary_category" disabled>
            <legend>Categoria (DISABLED)</legend>
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
        <button type='submit'>NEW WORD</button>
    </form>
    `;

    }

}

/* time: 18min revision de fallas */
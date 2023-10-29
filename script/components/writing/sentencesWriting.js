import { LitElement, html, css } from 'lit';
import { VOCABULARY_STATUS } from '../../firebase/status.js';

export class Senteces extends LitElement {

    static get properties() {
        return {
            senteceWrt: { type: Object }
        };
    }

    constructor(){
        super();
        
        import('../../firebase/writing.js').then(({deleteWriting, updateWriting })=>{
            this.deleteWriting = deleteWriting;
            this.updateWriting = updateWriting;
        });
    }

    check(e){
        this.updateWriting(this.senteceWrt.id, {
            status: VOCABULARY_STATUS.COMPLETED
        })
    }


    render() {
        return html`
                <div>${this.senteceWrt.sentence} </div>
                <div> ${this.senteceWrt.tense} </div>
                <div> ${this.senteceWrt.status} </div>
                <button @click=${ ()=> this.deleteWriting(this.senteceWrt.id) } >🗑</button>
                <button @click=${ ()=> this.check() } >❇</button>
        `;
    }
}
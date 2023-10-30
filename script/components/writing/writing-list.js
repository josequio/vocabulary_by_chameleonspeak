import { LitElement, html, css } from 'lit';



export class ListWriting extends LitElement {

    static get properties() {
        return {
            imagenSrc: { type: String }
        }
    }


    static get styles() {
        return css`
    
    `;
    }

    constructor() {
        super();
        this.imagenSrc = '/images/barras.png';


    }

    render() {
        return html`
        <div >
            <img src="${this.imagenSrc} " alt="logo de google">
        </div>
    `;
    }
}

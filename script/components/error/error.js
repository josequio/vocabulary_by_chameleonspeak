import {LitElement, css, html} from 'lit';
import tree from '../../state.js';


export class Error extends LitElement {
    static get styles(){
        return css`
            .error{
              background-color: red;
              color:black;  
            }
        `;
    }

    static get properties(){
        return {
            message: { type: String}
        }
    }

    constructor(){
        super();

        tree.select('error').on('update', (e) => {
            console.log(e);
            this.message = e.data.currentData;
        })
    }

    render(){
        /* si no hay erro entonces retorna vacio */
        /* Manejaremps ERRORES para login con google */
        if(!this.message) return;
        return html`
        <div class='error'>
            <p> ${this.message} </p>
            <button @click=${ function(){tree.select('error').set(null) } } ></button>
        </div>
        `;
    }

}
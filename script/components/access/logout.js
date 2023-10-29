import { LitElement, html, css } from 'lit';
import tree from '../../state.js'


export class Logout extends LitElement {

    static get properties() {
        return {
            user: { type: Object },
        }
    }

    static get styles() {
        return css`
        .container_logout{
            display:flex;
            color: white;
        }
        .container_logout>img{
            width: 2rem;
        }
        .container_logout>button{
            cursor:pointer;
        }
      `;
    }

    constructor() {
        super();
        this.user = null;
        /* Esto es un import dinamico */
        import("../../firebase/auth.js").then(({ login, logout }) => {
            this.logout = logout;
        });

        /* Accedemos a state.js para saber la actualizacion del estado de user Y traemos la nueva actualizacion con e.data.currentData */
        tree.select('user').on('update', (e) => {
            /* console.log(e); */
            this.user = e.data.currentData;
        });

    }

    /* ${function(){this.logout()}} o ${this.logout}
    nota: si necesitas que la función se ejecute inmediatamente, puedes usar la primera sintaxis con la expresión de función anónima. Si solo necesitas una referencia a la función sin ejecutarla de inmediato, la segunda sintaxis es suficiente.
   */
    logoutButtons() {
        if (this.user) {
            return html`
            <img src="${this.user.photoURL}" alt="Foto de perfil"> 
            <button id="logout" class="logout" @click=${function () { this.logout() }}>
               Cerrar  sesión
            </button>
         `;
        }

    }

    render() {
        return html`
         <div class = "container_logout">
            ${this.logoutButtons()}
         </div>
      `;
    }
}
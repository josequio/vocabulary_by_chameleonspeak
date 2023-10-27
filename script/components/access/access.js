import { LitElement, html, css } from 'lit';
import tree from '../../state.js'


export class Access extends LitElement {

   static get properties() {
      return {
         user: { type: Object },
         imagenSrc: { type: String }
      }
   }

   static get styles() {
      return css`
      button{
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 1rem;
         padding: 0.2rem 0.6rem;
         background-color: white;
         border-radius: 0.3rem;
         border: none;
         cursor: pointer;
         box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
         color: #11111157;
         }
     
      button:hover{
         box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
         color: #111111a5;
      }
     
      img{
         width: 1.3rem;
         height: 1.3rem;
      }
     
      p{
         font-size: 0.9rem;
      }
      `;
   }

   constructor() {
      super();
      this.user = null;
      this.imagenSrc = 'ruta-de-la-imagen.jpg';
      /* Esto es un import dinamico */
      import("../../firebase/auth.js").then(({ login, logout}) => {
         /* Manejo de error en google */
         this.login = function(){
            login().then(()=>{}).catch(err =>{
               /* con set , estamos enviando al manejador de estados el ERROR capturado */
               tree.select('error').set(err);
            })
         };

         this.logout = logout;
      });

      /* Accedemos a state.js para saber la actualizacion del estado de user Y traemos la nueva actualizacion con e.data.currentData */
      tree.select('user').on('update',(e) => {
         /* console.log(e); */
         this.user = e.data.currentData;
      });

   }

   /* ${function(){this.logout()}} o ${this.logout}
   nota: si necesitas que la función se ejecute inmediatamente, puedes usar la primera sintaxis con la expresión de función anónima. Si solo necesitas una referencia a la función sin ejecutarla de inmediato, la segunda sintaxis es suficiente.
  */
   accessButtons() {
      if (this.user) {
         return html`
            <button id="logout" @click=${function(){this.logout()}}>
               Cerrar  sesión
            </button>
            <p>${this.user.displayName} </p>
         `;
      }
      return html`
            <button @click=${function(){this.login()}} >
               <img src="${this.imagenSrc} " alt="logo de google">
               <p class="btn-description-p">Sign in with Google</p>
            </button>
            `;
   }

   render() {
      return html`
         <div>
            ${this.accessButtons()}
         </div>
      `;
   }
}

/* time 1.185min en adelante codiog pra github */
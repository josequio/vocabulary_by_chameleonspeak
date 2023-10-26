import { LitElement, html, css} from 'lit';


export class Access extends LitElement {

   static get properties(){
      return {
         imagenSrc: {type: String}
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
      this.imagenSrc = 'ruta-de-la-imagen.jpg';
   }

   render() {
      return html`
      <div>
         <button id="login">
            <img src="${this.imagenSrc} " alt="logo de google">
            <p class="btn-description-p">Sign in with Google</p>
         </button>
         <button id="logout">Cerrar sesión</button>
      
      </div>
      `;
   }
}

/* time 19min */
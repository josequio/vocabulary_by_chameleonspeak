import { LitElement, html, css } from 'lit';
import tree from '../../state.js'


export class Footer extends LitElement {

   static get properties() {
      return {
         user: { type: Object },
         imagenSrc: { type: String }
      }
   }

   static get styles() {
      return css`
         :host{
            width: 100%;
         }
         footer{
            position:sticky;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            color: white;
            height: 1.5rem;
         }
         footer p{
            font-size: 0.7rem;
         }
      `;
   }

   constructor() {
      super();
      this.user = null;
      this.imagenSrc = 'ruta-de-la-imagen.jpg';
      /* Accedemos a state.js para saber la actualizacion del estado de user Y traemos la nueva actualizacion con e.data.currentData */
      tree.select('user').on('update', (e) => {
         /* console.log(e); */
         this.user = e.data.currentData;
      });

   }

 /*   footerMain() {
      if (this.user) return;
      return html`
            <footer class = "footer">
                  <p>Copyright © 2022 ChameleonSpeak Todos los derechos Reservados</p>
            </footer>
            
            `;
   } */

   render() {
      return html`
      <footer class = "footer">
            <p>Copyright © 2022 ChameleonSpeak Todos los derechos Reservados</p>
      </footer>
      `;
   }
}


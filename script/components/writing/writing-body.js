import { LitElement, html, css } from 'lit';
import tree from '../../state.js';

export class BodyWriting extends LitElement {
    static get styles() {
        return css`
            .container_writing-body{
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-template-rows: 100%;
                padding: 1rem 0;
            }

            .container_component-writing-list,
            .container_component-writing-form{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            


            @media (max-width: 600px) {
                .container_writing-body{
                    grid-template-columns: 100%;
                    grid-template-rows: 1fr 1fr;
                }

                .container_component-writing-list,
                .container_component-writing-form{
                    max-width: 100% ;
                }
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
        this.user = null;

        tree.select('user').on('update', (e) => {
            /* console.log(e); */
            this.user = e.data.currentData;
        });

    }


    vocabularyComponents() {
        if (this.user) {
            return html`
            <div class="container_writing-body">
                <div class="container_component-writing-form"> 
                    <app-writing-form></app-writing-form>   
                </div>
                <div class="container_component-writing-list">
                    <app-writing-list></app-writing-list> 
                </div>
            </div>
        `;
        }

    }

    render() {
        return html`
            ${this.vocabularyComponents()}
        `;
    }


}
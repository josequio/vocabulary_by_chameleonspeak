import { LitElement, html, css } from 'lit';

export class WritingList extends LitElement{
    static get properties(){
        return {
            writing: { type: Array }
        }
    }

    constructor(){
        super();
        import("../../firebase/writing.js").then(({getWriting}) => {
            getWriting().then(writing => {
                this.writing = writing;
            })
        })
    }

    render(){
        return html`
            <h2>My Writing</h2>
            <div>
                ${
                    this.writing.map(
                        senteceWrt => html`
                            <app-writing-sentences .sentenceWrt=${senteceWrt} ></app-writing-sentences>
                        `
                    )
                }
                        
            </div> 
        `;
    }
}


const reuse =(componentName,component)=>{


    class Reusable extends HTMLElement{
        constructor(){
            super();
            const componentTemplate = document.createElement('template'); 
            componentTemplate.innerHTML=component
            const shadowRoot = this.attachShadow({ mode: 'open' });
        
            this.innerHTML=componentTemplate.content
    
        }
        connectedCallback() {
          }
    }
    customElements.define(componentName,Reusable);

    return Reusable
}



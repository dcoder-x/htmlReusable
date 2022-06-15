
const reuse =(componentName,component)=>{


    class Reusable extends HTMLElement{
        constructor(){
            super();
            const componentTemplate = document.createElement('Div'); 
            componentTemplate.innerHTML=component
            const shadowRoot = this.attachShadow({ mode: 'open' });
        
            shadowRoot.appendChild(componentTemplate.content);
    
        }
        connectedCallback() {
          }
    }
    customElements.define(componentName,Reusable);

    return Reusable
}



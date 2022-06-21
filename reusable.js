
const reuse =(componentName,component,isShadow=false,isBody=true)=>{
    
    


    class Reusable extends HTMLElement{
        constructor(){
            super();
            const componentTemplate = document.createElement('template'); 
            componentTemplate.innerHTML=component
            const shadowRoot = this.attachShadow({ mode: 'open' });
            if(isBody){
                document.body.appendChild(componentTemplate.content);
            }
            else if (isShadow) {
                shadowRoot.appendChild(componentTemplate.content)
            }
    
        }
        connectedCallback() {
            console.log('custom')
          }
    }
    customElements.define(componentName,Reusable);

    return Reusable
}



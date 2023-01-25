 const reuse =(componentName,component,isShadow=false,isBody=true)=>{
    
    
// creating the reusable class

    class Reusable extends HTMLElement{
        constructor(){
            super();
            const componentTemplate = document.createElement('template'); 
            componentTemplate.innerHTML=component
            const shadowRoot = this.attachShadow({ mode: 'open' });

            if (isShadow) {
                isBody=false
                shadowRoot.appendChild(componentTemplate.content)
            }
            else if(isBody){
                isShadow=false
                document.body.appendChild(componentTemplate.content);
            }
         
    
        }
        connectedCallback() {
          }
    }
    customElements.define(componentName,Reusable);

    return Reusable
}

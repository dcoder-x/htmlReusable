# htmlReusable
a simple JavaScript library that allows the creation of reusable HTML components
# Usage 
1 link to the script
add https://dcoder-x.github.io/htmlReusable/reusable.js as src attribute in a script tag (this should be done in the head before other script tags)

2 create the component 
create the html component you want to reuse e.g nav bar 
then copy it and initialize it to a variable using the template literal `` e.g navBar = `<h1> HELLO</h1>`

3 call the reuse function

The reuse function takes in four arguments/parameters, reuse(componentName,component,isShadow,isBody)

### componentName: 
the componentName must start with a lower-case and contain a hyphen to prevent element name conflict in the DOM  

### component: 
the component is the variable you initialized earlier i.e navBar

### isShadow:
this specifies whether the component should be appended to the shadow DOM
this takes a boolean value and has a default value of false

##### read more on shadow elements https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

### isBody
this specifies whether the component should be appended to the body of the html DOM
this takes a boolean value and has a default value of true

## Note

when working with isBody, style the component's element with distinctive names to avoid styling conflict

e.g `reuse('nav-bar', navBar,false,true)`

4 import into html

add the script to the head of the html(below the reuseable.js tag)
then add the custom component where you wish.
e.g `<html> <nav-bar></nav-bar></html>`


good luck 

made with love by ayomikun faluyi

github[ dcoder-x] (https://github.com/dcoder-x/htmlReusable)

# htmlReusable
a simple JavaScript library that allows the creation of reusable HTML components
# Usage 
1 link to the script
add https://dcoder-x.github.io/htmlReusable/reusable.js as src attribute in a script tag (this should be done in the head before other script tags)

2 create the component 
create the html component you want to reuse e.g nav bar 
then copy it and initialize it to a variable using the template literal `` e.g navBar = `<h1> HELLO</h1>`

3 call the reuse function

call the reuse function and pass in these two arguments; the componentName(which must start with a small letter and contain an hyphen) and the component(the variable you initialized earlier)

e.g reuse('nav-bar', navBar)

4 import into html

add the script to the head of the html(below the reuseable.js tag)
then add the custom component where you wish.
e.g <html> <nav-bar></nav-bar></html>


good luck 

made by ayomikun faluyi

github[ dcoder-x] (https://github.com/dcoder-x/htmlReusable)

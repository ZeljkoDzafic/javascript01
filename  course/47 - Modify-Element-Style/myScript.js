// JavaScript - Modify element style

// get heading element/node
var hElement = document.getElementById("my-heading");

/*hElement.style.color = "#fff";
hElement.style.border = "1px solid red";
hElement.style.backgroundColor = "blue";
hElement.style.padding = "12px";
*/

// className 

//hElement.className = "heading-css heading-01-css";

// remove all the css classes
//hElement.className = "";


// add css classess using setAttribute
hElement.setAttribute("class", "heading-css heading-01-css");
// JavaScript - Changing elements content and attributes

// get h1 node value
var hElement = document.getElementById("my-heading");
// get node value
//alert( hElement.nodeValue ); // returns null because each element has single child text node

//alert( hElement.childNodes[0].nodeValue ); // returns text value
//alert( hElement.firstChild.nodeValue ); // returns text value


// hElement.firstChild.nodeValue = "Heading text just changed using nodeValue!";
//hElement.textContent = "Heading text just changed using textContent property.";
//hElement.innerHTML = "<em>Heading text just changed using innerHTML property.</em>";
//hElement.outerHTML = "<h2><em>Heading text just changed using innerHTML property.</em></h2>";

// change the attribute value 
var imgElement = document.getElementsByTagName("img")[0];
imgElement.setAttribute("src", "js-2.png");
//imgElement.src = "js-2.png";

var aElement = document.getElementsByTagName("a")[0];
aElement.href = "https://www.google.com";
aElement.id = "my-link";

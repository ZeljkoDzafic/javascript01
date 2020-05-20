// JavaScript - Accessing elements & attributes using document object

// access an element using getElementById
var hElement = document.getElementById("my-heading");

//alert(hElement);

// get DOM object value
//alert(hElement.innerHTML);

// get DOM object attribute value
//alert(hElement.getAttribute("id"));

// get tag name
//alert(hElement.tagName);

// access elements using class attribute
var pElements = document.getElementsByClassName("my-paragraph"); // NodeList

//alert(pElements);

//alert(pElements[0]);

//alert(pElements[0].innerHTML);

// loop through all paragraphs
for( var i=0; i < pElements.length; i++ ) {
    
  // alert(pElements[i].innerHTML);
    
}

// access elements using tag name
var ulElements = document.getElementsByTagName("ul");

//alert(ulElements);

//alert(ulElements[1].innerHTML);

var liElements = ulElements[1].getElementsByTagName("li");

//alert(liElements[0].innerHTML);

// access elements using name attribute
var naElements = document.getElementsByName("user-name");

//alert(naElements[0].tagName);

// access element using css query
var pElement = document.querySelector("p");
//alert( pElement.innerHTML );

var hElement = document.querySelector("#my-heading");

//alert( hElement.innerHTML );

var pElements = document.querySelectorAll("p");
//alert( pElements[1].innerHTML );

var pElements = document.querySelectorAll("div p");

alert( pElements[1].innerHTML );

















































































































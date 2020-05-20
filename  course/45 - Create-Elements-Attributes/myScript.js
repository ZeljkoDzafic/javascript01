// JavaScript - Creating elements and attributes

// get ul element by id
var ulElement = document.getElementById("my-list");

// create element node
var newLiElement = document.createElement("li");

// create text node
var newLiText = document.createTextNode("This is new list item");

// append text node to list item as child
newLiElement.appendChild(newLiText);

// append list item to unordered list as child
// appendChild add new element as the last child of the parent node.
//ulElement.appendChild(newLiElement);

// alternate way to add new element/node using parent node
// get list item using id
var liElement = document.getElementById("list-item-01");
// append list item accessing parent node 
//liElement.parentNode.appendChild(newLiElement); 
// add new element using insertBefore 
//liElement.parentNode.insertBefore(newLiElement, liElement);
// replace element using repalceChild
liElement.parentNode.replaceChild(newLiElement, liElement);


// get heading element by its id
var hElement = document.getElementById("my-heading");
// add attribute to heading
//hElement.setAttribute("align", "center");

  
// get anchor
var aElement = document.getElementsByTagName('a')[0];
//aElement.setAttribute("id", "my-link");
aElement.id = "my-link";



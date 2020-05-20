// JavaScript - Navigating between elements

var ulElements = document.getElementsByTagName("ul")[0];

//alert("Node name: " + ulElements.nodeName);
//alert("Node type: " + ulElements.nodeType);

// get node parent
//alert( "Node parent: " + ulElements.parentNode.nodeName );

// get child nodes
//alert( "Node Child Nodes: " + ulElements.childNodes);

// get child nodes
//alert( "Child Nodes Length: " + ulElements.childNodes.length);

// get ul child nodes and avoid whitespace

var ulChildNodes = ulElements.childNodes;

for ( var i = 0; i < ulChildNodes.length; i++ ) {
    
    if ( ulChildNodes[i].nodeType == 1 ) {
        
       // alert(ulChildNodes[i].innerHTML);
    }
}

// get first child of a node

var liFirstChild = ulElements.firstChild.firstChild.nodeValue;
//alert(liFirstChild);

// get last child of a node

var liLastChild = ulElements.lastChild.firstChild.nodeValue;
//alert(liLastChild);

// get previous silbing

//alert( ulElements.previousSibling.innerHTML );

// get next silbing

alert( ulElements.nextSibling.innerHTML );












































// JavaScript - Adding & Removing Event Handlers & Event Object

/*
    There are 3 methods/models to add an event handler to an event
		
		1) inline
		2) element.event
		3) element.addEventListener
*/

// 1) inline method
function doSomething() {
	
	alert("You just clicked me!");
	
}


// 2) element.event method
/*var btnElement = document.getElementById("btn");

// event handler or event listner for on click event
btn.onclick = function() {
	
	alert("You just clicked me!");
}

// event handler or event listner for on load event
window.onload = function() { 
	
	alert("This page just finished loading.");
};*/



// get heading element by id (identify element)
var hElement = document.getElementById("my-heading");

// on mouse over handler
hElement.onmouseover = function() {
	
	if ( this.className == "h-normal" ) {
        
        this.className = "h-changed";   // 'this' keyword means, this element or object
    } else {
        
        this.className = "h-normal";
    }
};

// this new event handler will overwrite the previous event handler
//hElement.onmouseover = function() { alert("It just overwrite the previous event handler."); }


// 3) element.addEventListener

// get button 2 element by id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize() {
	this.style.fontSize = "45px";
}

// you can add as many event handlers using addEventListener method
btn2Element.addEventListener("click", changeBtnFontSize);
btn2Element.addEventListener("click", function() { alert("This will not overwrite previous event hanlder"); } );


// remove event handler 
//btn2Element.removeEventListener("click", changeBtnFontSize);


/*
Important Note:

The addEventListener() and removeEventListener() methods are not supported in IE 8 and earlier versions. 

For these specific browser versions, you would need to use specific methods which are attachEvent() method and detachEvent() method. I have a separate video lecture which explains how you can add and remove event handlers for IE8 and earlier version.    

*/

















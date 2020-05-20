// JavaScript - Event Object

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize(event) {
    
    //this.style.fontSize = "40px";
    getTarget(event).style.fontSize = "40px";
    
}

addEvent(btn2Element, "click", changeBtnFontSize);

// remove event handler
//removeEvent(btn2Element, "click", changeBtnFontSize);


// get element by its id
var aElement = document.getElementById("click-me");

function clickMe(event) {
    
    alert("You just clicked me!");
    
    preventDefault(event);
}

addEvent(aElement, "click", clickMe);

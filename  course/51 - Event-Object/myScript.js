// JavaScript - Event Object

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize(event) {
    
    //this.style.fontSize = "40px";
    event.target.style.fontSize = "40px";
    
    alert(event.type);
    
    alert(event.target);
    
    
}

btn2Element.addEventListener("click", changeBtnFontSize);


// get element by its id
var aElement = document.getElementById("click-me");

function clickMe(event) {
    
    alert("You just clicked me!");
    
    event.preventDefault();
}

aElement.addEventListener("click", clickMe);






















// JavaScript Window Object

/*
    - window
*/

// global variable
var x = 15;
//alert(window.x);

// global function
function y() {
    
    //document.write("Global function invoked using window object.<br>");
}
window.y();

//alert("alert invoke without window object.");

//window.alert("alert invoke using window object.");

//window.confirm("confirm invoke using window object.");
//window.prompt("prompt is invoked using window object.");

// width of browser window
document.write("Window width: " + window.innerWidth + " in pixels <br>");

// height of browser window
document.write("Window height: " + window.innerHeight + " in pixels <br>");

// outer width of browser window including scrollbar and toolbars
document.write("Window outer width: " + window.outerWidth + " in pixels <br>");

// height of browser window including scrollbar and toolbars
document.write("Window outer height: " + window.outerHeight + " in pixels <br>");

// set window name
window.name = "Dayan's window";
document.write("Window name: " + window.name + "<br>");

// close window
// window.close();

// open new window
var udemyWindow = window.open("https://www.udemy.com", "Udemy window", "width=150,height=150");

// resize to
udemyWindow.resizeTo(250, 250);

// move to
udemyWindow.moveTo(350,200);

// window.document
// window.screen
// window.navigator
// window.history
// window.location

// JavaScript Functions & Scope

// global scope
var x = 20;

function myFunction1() {
	
	document.write("x = " + x  + " accessed inside a function.<br>");
	
}
myFunction1();

document.write("x = " + x  + " accessed outside of a function.<br>");


// local scope
// function scope

function myFunction2() {
	
	// local scope variable
	var y = 50;
	document.write("y = " + y  + " accessed inside a function.<br>");
	
}
myFunction2();
//document.write("y = " + y  + " accessed outside of function.<br>");

// automatically global
function myFunction3() {
	
	// automatically global - just by initialization
	 z = 100;
	document.write("z = " + z  + " accessed inside a function.<br>");
	
}
myFunction3();
document.write("z = " + 100  + " accessed outside of function.<br>");
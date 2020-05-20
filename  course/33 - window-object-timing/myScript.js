// JavaScript Window Object Timing

function sayHelloToWorld() {
	
	alert("Hello, World");
}

// execute at specified time using setTimeOut method
//window.setTimeout(sayHelloToWorld, 2000);

// without window prefix 
// execute at specified time
var stp1 = setTimeout(sayHelloToWorld, 2000);

// prevent setTimeout from execution
window.clearTimeout(stp1);


// continue calling function at specified intervals
var  stp2 = window.setInterval(sayHelloToWorld, 1000);

// prevent setInterval from execution
window.clearInterval(stp2);



	
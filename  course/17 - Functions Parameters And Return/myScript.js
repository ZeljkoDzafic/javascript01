// JavaScript Functions With Parameters & Return

// function with parameters
function functionWithParameters( p1, p2 ) {
	
	var z = p1 * p2;
	
	document.write("p1 * p2 = " + z + "<br>");
	
}

// function call with arguments
functionWithParameters( 10, 20 );


// accpet function as a value
function parameterAsFunction ( func ) {
	
	func();
	
}

parameterAsFunction( hellWorld );

function helloWorld() {
	
	alert("Hello, World. Function passed as an argument.");
}



// function with return statement
function returnSomeValue ( x, y ) {
	var k = x + y	
	return  k;
}

/*var result = returnSomeValue( 10, 10 );

 document.write("Returned value is " + result);
*/ 

// functions as values

document.write("Returned value is " + returnSomeValue( 10, 10 ) );








// JavaScript Function As Variable & Anonymous Function


function sum( x, y ) {
	
	return x + y;
}

// assgin a fuction to a variable
var s = sum;

// use variable name to invoke the function
var z = s(10, 50); 

document.write(z + "<br>");

// define funciton without name
// anonymous function
var isAdult = function ( age ) {
	
	if ( age  >= 18 )  {
		
		return "Yes";
		
	} else  {
		
		return "No";
	}
};

var  k = isAdult( 25 );

document.write("Adult Status: " + k );

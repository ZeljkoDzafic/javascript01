// JavaScript Array Object

// create array using new keyword
var myColors = new Array("Red", "Green", "Blue");
// alternate syntax
var myColors = ["Red", "Green", "Blue"];

document.write(myColors[0] + "<br>");

// modify array element
myColors[1] = "Yellow";
document.write(myColors[1] + "<br>");

// access all elements of an array
document.write(myColors + "<br>");

// array properties & methods
// find length of an array 
document.write(myColors.length + "<br>");

// sort an array alphabetically
document.write(myColors.sort() + "<br>");

// reverse an array 
document.write(myColors.reverse() + "<br>");

// add element from an array
myColors.push("Pink");
document.write(myColors + "<br>");

// remove elemnt from an array
myColors.pop("Pink");
document.write(myColors + "<br>");

// join two or more arrays
var listOfNumber1 = [1,2,3];
var listOfNumber2 = [4,5,6];
var allNumbers = listOfNumber1.concat(listOfNumber2);
document.write(allNumbers + "<br>");

// loop through array elements
var myCars = ["BMW", "Honda", "Toyota"];

for ( var i = 0; i <= myCars.length - 1; i++ ) {
	
	document.write(myCars[i] + "<br>");
	
}

// array objects
var myCars = [
			{ model: "BMW", year: 2016 },
			{ model: "Honda", year: 2011 },	
			{ model: "Toyota", year: 2015}
];
// k is an array item
for ( var k = 0; k < myCars.length; k++ ) {
	
	var myCar = "";
	// cp is car property
	for ( cp in myCars[k] ) {
		
		myCar = myCar + myCars[k][cp];
		
	}
	document.write(myCar + "<br>");
	
}









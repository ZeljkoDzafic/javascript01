// JavaScript Number Type & Number

// create a number using new keyword

var n = new Number(15);

document.write(n + "<br>");

document.write("Primitive Value: " + n.valueOf() + "<br>");

// create number just by assigning to variable
var n = 15.5;
document.write(n + "<br>");

// check for valid number
var numberCheck = 20 + "t";
document.write(numberCheck + " is not valid number: " + isNaN(numberCheck) + "<br>");

// to string

var myNumber = 555;
document.write(myNumber.toString() + "<br>");

// JavaScript String Type & String Object

// create a string using new keyword

var ss = new String("This is America");

document.write(ss + "<br>");

var s = "This is USA";

document.write(s + "<br>");

// add sepcial characters into string

var myString = "This is \"vanilla\" ice cream";
document.write(myString + "<br>");

var myString = "This is \'vanilla\' ice cream";
document.write(myString + "<br>");

var myString = "This is \\vanilla\\ ice cream";
document.write(myString + "<br>");

// string properties and methods
var myQuestion = "Where do you live?";

// lenght of string
document.write("Lenght: " + myQuestion.length + "<br>");

// index of
document.write("Index Of: " + myQuestion.indexOf("you") + "<br>");

// sbu string
document.write(myQuestion.substring(6, 12) + "<br>");

// replace string
document.write(myQuestion.replace("live", "go") + "<br>");

// uppercase
document.write(myQuestion.toUpperCase() + "<br>");

// lowercase
document.write(myQuestion.toLowerCase() + "<br>");

// character at
document.write(myQuestion.charAt(2) + "<br>");





















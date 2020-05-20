// JavaScript RegExp & Function Object

// create regular expression using new keyword
var regExp1 = new RegExp("adcb");

// alternate syntax
var regExp2 = /adcb/;

var strToSearch = "This srere is a bank name";

var matchFound = regExp2.test(strToSearch);

//alert(matchFound);

// Function object

var functionAsObject = new Function("a", "b", "return a + b");

var x = functionAsObject(10, 25);

//alert(x);

var y = function(a, b) { return (a + b) };

alert(y(25, 20));
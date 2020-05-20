// JavaScript Self Executing Anonymous Function

// self executing anonymous function
(function() {
	
	alert("Auto show up message");
	
})();


// alternate syntax 
(function() {
	
	alert("Auto show up message 2");
	
}());


// pass arugument to self invoking function
(function(x, y) {
	
	alert ("Sum of x & y: " + (x+y));
	
})(10, 50);


// self executing function with return

var  sum = (function(x, y) {
	
	return x + y;
	
})(10, 50);

alert ("Returned: " + sum);

// JavaScript Data Types & Objects

// dynamic type language
var a = 10;
//alert(typeof(a));

var a = "Irfan Dayan";
//alert(typeof(a));


/* 
    Primitive Data Type
    --------------------

	1.	string 		// hello
	2.	number		// 50
	3.	boolean		// true or false
	4.	null		// no value
	5.	undefined	// undefined

*/

var s = "hello"     // string represents sequence of characters e.g. “hello”
var n = 5;          // number represents numeric values e.g. 50
var b = true;       // boolean represents value either true or false
var x = null;       // null represents no value at all
var y = undefined;  // undefined represents value not yet defined

//alert(x);

/* 
    Non - Primitive (reference) Data Type
    ------------------------------------

    1. Object
    2. Array
    3. RegExp
    4. Function
    5. Date
*/

var employee = new Object();        // represents an instance of an object 
var books = new Array();            //  represents group of similar values
var reg = new RegExp();             // represents regular expressions
var myFunc = new Function();        // represents function
var todayDate = new Date();         // represents date

alert(typeof(books));


/* 
    Primitive Data Type Have Corresponding Objects
    ----------------------------------------------

*/

// object versions of primitive data type
// string as primitive data type
var s = "hello";
//alert(typeof(s));

// string as an object
var s = new String("hello");
//alert(typeof(s));


var b = new Boolean(); 		// b declared as Boolean object
var n = new Number(); 		// n declared as Number object


// list of built in object constrcutors in JavaScript

var obj1 = new Object();    // a new Object as object
var obj2 = new String();    // a new String as object
var obj3 = new Number();    // a new Number as object
var obj4 = new Boolean();   // a new Boolean as object
var obj5 = new Array();     // a new Array as object
var obj6 = new RegExp();    // a new RegExp as object
var obj7 = new Function();  // a new Function as object
var obj8 = new Date();      // a new Date as object
// Math() object			// a global Math object


 







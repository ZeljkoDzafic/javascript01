// JavaScript Dialog Boxes 

// alert function
//alert("Welcome to this website.");

// confirm function

/*var v = confirm("Do you want us to send you daily news?");

if ( v ) {
    
    document.write("Ok, we will send you daily news.");
    
} else {
    
    document.write("Ok, we will NOT send you daily news.");
}
*/
// prompt function
var visitorAge = prompt("Enter you age:");

if ( visitorAge >= 18 ) {
    
    document.write("You are GOOD to go!");
    
} else {
    
    document.write("You are NOT good to go!");
    document.write( visitorAge );
}
/*
    ARITHMETIC OPERTORS
        
    +           Addition
    -           Subtraction
    *           Multiplication
    /           Division
    %           Modulus
    ++          Increment
    --          Decrement
*/

var x = 100, y = 20;

// addition
var a = x + y;
document.write("Addition: ");
document.write(a);

document.write("<br>"); // html line break

// subtraction
var s = x - y;
document.write("Subtraction: ");
document.write(s);

document.write("<br>"); // html line break

// multiplication
var m = x * y;
document.write("Multiplication: ");
document.write(m);

document.write("<br>"); // html line break

// division
var d = x / y;
document.write("Division: ");
document.write(d);

document.write("<br>"); // html line break

// modulus
var md = x % y;
document.write("Modulus: ");
document.write(md);

document.write("<br>"); // html line break

// increment operator
var i = 5;

++i; // precrement
i++; // postcrement

document.write("Increment Operator: ");
document.write(i);

document.write("<br>"); // html line breaks

// decrement operator
var k = 10;
--k;
document.write("Decrement Operator: ");
document.write(k);

document.write("<br>"); // html line breaks

// ++ and -- opertors as prefix and postfix


/*
    ++a         <-- Prefix increment operator
    a++         <-- Postfix increment operator

    --a         <-- Prefix decrement operator
    a--         <-- Post decrement operator

*/

// prefix increment operator
var a = 5;
document.write("Prefix increment: ");
document.write(++a);


document.write("<br>"); // html line breaks

// postfix increment operator
var a = 10;
document.write("Postfix Increment:");
document.write(a++);


document.write("<br>"); // html line breaks

// prefix decrement operator
var a = 5;
document.write("Prefix increment: ");
document.write(--a);


document.write("<br>"); // html line breaks

// post decrement operator
var a = 10;
document.write("Postfix Increment:");
document.write(a--);

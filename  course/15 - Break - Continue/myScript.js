// Break & Continue Statements

// break statement

document.write (" Break: <br>");

var i;

for ( i = 0; i <= 10; i++ ) {
    
    if ( i == 7) {
        break;
    }
    
    document.write(i + "<br>");
}



// continue statement
document.write (" Continue: <br>");

var k;

for ( k = 0; k <= 10; k++ ) {
    
    if ( k == 7 ) {
       continue;
    }
    
    document.write(k + "<br>");
}

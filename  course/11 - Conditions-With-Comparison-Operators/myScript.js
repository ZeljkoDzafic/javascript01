// Conditions With Comparison Operators

/*
    Operator        Desc                  
    --------        ----
    
    ==              Equal to
    ===             Equal value & type
    !=              Not Equal to
    !==             Not equal value & Not Type
    >               Greater than
    <               Less than
    >=              Greater than Eqaul to
    <=              Less than Equal to
    
*/

// == Equl to

var studentAge = 18;

if ( studentAge  == 18 ) {
    // perform some action
    document.write("Student age value is equal to 18 <br>");
}


// === Equal to by value & Type

// == VS ====
if ( studentAge === 18 ) {
	// perform some action
    document.write("Student age value and type are same and is equal to 18 <br>");
}

// != Not Equal to
if ( studentAge != 18 ) { // true
    document.write("Student age value is not equal to 18 <br>");
    
}

// !== Not Equal by value & type
if ( studentAge !== 18 ) { // flase
    // perform some action
    document.write("Student age value or type is not same. <br>");
    
}

// > Great than
if ( studentAge > 18 ) {
    document.write("Student age is greater than 18 <br>");
}
// >= Great than & equal to
if ( studentAge >= 18 ) {
    document.write("Student age is greater than & equal to 18 <br>");
}

if ( studentAge < 18 ) {
    document.write("Student age is lese than 18 <br>");
}

// <= Great than & equal to
if ( studentAge <= 18 ) {
    document.write("Student age is less than & equal to 18 <br>");
}




















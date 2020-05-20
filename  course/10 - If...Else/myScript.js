// if..else statements

/*
if () {
    // block of code
}
*/

var classTemperature = 100;

// simple if
if ( classTemperature == 100 ) {
    
    classTemperature = classTemperature - 20;
	document.write("Class temperature just changed to " + classTemperature + "<br>");
}

document.write("Outside of If statement.");

// if else
if ( classTemperature == 100 ) {
	
	classTemperature = classTemperature - 20;
	document.write("Class temperature just changed to " + classTemperature + "<br>");
	
} else {
	
	document.write("No need to change class temperature." + "<br>");
	
}
	
// if....if else
	
if ( classTemperature == 100 ) {
	
	classTemperature = classTemperature - 20;
	document.write("Class temperature just changed to " + classTemperature + "<br>");
	
} else if ( classTemperature == 90) {
	
	classTemperature = classTemperature - 10;
	document.write("Class temperature just changed to " + classTemperature + "<br>");
	
} else {
	
	document.write("No need to change class temperature." + "<br>");
}

// Ternay opertor
var  classTempertureStatus = (classTemperature == 100 ) ? classTemperature - 20 : classTemperature;

document.write("Class current temperature is:  " + classTempertureStatus + "<br>");


if ( classTemperature == 100 ) {
    
    classTemperature = classTemperature - 20;
	document.write("Class temperature just changed to " + classTemperature + "<br>");


	if(color == "blue") {

		console.log("I am blue");

			if(season == "winter") {
				console.log("It is hot in BLUE winter");
			}
	}
}
















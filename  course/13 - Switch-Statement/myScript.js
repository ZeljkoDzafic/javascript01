// Switch Statement

var studentGrade = "B";


/*if ( studentGrade == "A" ) {
    
    document.write("Grade A student.");
    
} else if ( studentGrade == "B" ) {
    
    document.write("Grade B student.");
    
    
} else if ( studentGrade == "C" ) {
    
    document.write("Grade C student.");

} else {

    document.write("No grade found.");
}
*/

// switch statment

switch(studentGrade) {
        
        case 'A':
			document.write("Grade A student.");
			break;
        
        case 'B':
			document.write("Grade B student.");
			break;
        
        case 'C':
			document.write("Grade C student.");
			break;
        
        default:
			document.write("No grade found.");
        
}
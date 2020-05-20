// cross browser add event
var addEvent = function(el, type, func) {
	
	if ( typeof(addEventListener) !== "undefined"  ) {
		
		el.addEventListener(type, func);
		
	} else if ( typeof(attachEvent) !== "undefined") {
		
		el.attachEvent("on" + type, func); // IE 8 and earlier versions
		
	} else {
		
		// obje.property
		// obje[prperty]
		
		// el.onclick
		// e."on"+type - genereate error
		
		el["on" + type] = func;
	} 
};

// cross browser remove event
var removeEvent = function(el, type, func) {
	
	if ( typeof(removeEventListener) !== "undefined"  ) {
		
		el.removeEventListener(type, func);
		
	} else if ( typeof(detachEvent) !== "undefined") {
		
		el.detachEvent("on" + type, func); // IE 8 and earlier versions
		 
	} else {
		
		// obje.property
		// obje[prperty]
		
		// el.onclick
		// e."on"+type
		
		el["on" + type] = null;
	} 
};
// cross browser get target
var getTarget = function(event) {
	
	if ( typeof(event.target) !== "undefined" ) {
		
		return event.target;
	
	} else {
		
		return event.srcElement;	// IE 8 and earlier versions
	}
};

var preventDefault = function(event) {
	
	if ( typeof(event.preventDefault) !== "undefined" ) {
		
		event.preventDefault();
	} else {
		
		event.returnValue = false; // IE 8 and earlier versions
	}
};


























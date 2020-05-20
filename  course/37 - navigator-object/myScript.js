// JavaScript window history object

/*
	- window
		- screen
		- history
		- navigator
*/

// navigator object
// window.navigator 

// check if cookie is enabled or user browsers
document.write("Cookies Enabled: " + window.navigator.cookieEnabled + "<br>");


// browser name, version, code name
document.write("Name: " + navigator.appName + "<br>" + 
			  "Version:" + navigator.appVersion + "<br>" + 
			  "Code Name:" + navigator.appCodeName + "<br>" +
			  "Platform: " + navigator.platform + "<br>" +
			  "Language: " + navigator.language + "<br>" +
			  "Java Enabled: " + navigator.javaEnabled()
			  );
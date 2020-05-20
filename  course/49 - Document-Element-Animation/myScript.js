// JavaScript - Docuemnt Element Animation
(function() {
	
	
	var imgElement = document.getElementById("my-img");
	  
	  var imgTopPosition = 0;
	  var imgLeftPosition = 450;
	  setInterval(moveImage, 10); // 10 milliseconds = 0.01 second
	  
	  
	  function moveImage() {
		
		// move downs
		if (imgTopPosition < 270 && imgLeftPosition == 450) {
			imgTopPosition++;
			imgElement.style.top = imgTopPosition + 'px';
			
		} else if ( imgLeftPosition < 720 && imgTopPosition == 270) {
			
			imgLeftPosition++;
			imgElement.style.left = imgLeftPosition + 'px';
			
		} else if (imgTopPosition > 0) { 
			
			imgTopPosition--;
			imgElement.style.top = imgTopPosition + 'px';
			
		} else if ( imgLeftPosition > 450 ) {
			
			imgLeftPosition--;
			imgElement.style.left = imgLeftPosition + 'px';
			
		}
		
	  }
	
	
})();





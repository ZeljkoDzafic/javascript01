

function addElementToList(task) {
	jQuery(".listItems ul").append("<li>"+task+"<button>X</button></li>");

	jQuery(".listItems li button").on("click", function (event) {

		alert("test");

	
	
	});

}

jQuery("#enter").on("click", function () {

	addElementToList(jQuery("#userInput").val());
	
});




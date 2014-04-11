$('#send').click(sendButtonClicked);
function sendButtonClicked (event) {
	event.preventDefault();
	console.log('sendButtonClicked');
}

// function addNewItem(event) {
	
// 	// Prevent page reload
// 	event.preventDefault();
	
// 	// Get the text the user entered
// 	var newRequest = $('#newRequest').val();
	
// 	// Add an <li> with that text to the <ul>
// 	$('.question-rac').append('<li><div class="howzm-box">' + newRequest + '</div></li>');
	

// }

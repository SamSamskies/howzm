$('#send').click(function(event) {
	event.preventDefault();

	appendUsersTextToTheDom();
	//empty out the input box
	$('#new-request').val('');
});

$('#translations').on("DOMSubtreeModified", function(){
	$('.row').fadeIn();
})

function appendUsersTextToTheDom() {
	//Get the text the user entered
	var newQuestion = $('#new-request').val();

	//Get the template 
	var questionRac = $('#raccoonQ-template').html();

	//Append the user input to DOM
	var $questionRac = $(questionRac);
	$questionRac.find('.howzm-box').text(newQuestion);
	$('#translations').append($questionRac);
}






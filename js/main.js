$('#send').click(function(event) {
	event.preventDefault();
	console.log('sendButtonClicked');

	//Get the text the user entered
	var newQuestion = $('#newRequest').val();

	//Get the template 
	var questionRac = $('#raccoonQ-template').html();

	//Append the user input to DOM
	var $questionRac = $(questionRac);
	$questionRac.find('.howzm-box').text(newQuestion);
	$('#translations').append($questionRac);
});

$('#translations').on("DOMSubtreeModified", function(){
	console.log('test');
	$('.row').fadeIn();
})






$('#send').click(function(event) {

	event.preventDefault();

	//Get the text the user entered
	var newQuestion = $('#new-request').val();

	//Get the template 
	var questionRac = $('#raccoonQ-template').html();

	appendUsersTextToTheDom(newQuestion, questionRac);

	//empty out the input box
	$('#new-request').val('');

	//Get the tempate and show loading dots
	var answerRooster = $('#roosterA-template').html();
	$('#translations').append($(answerRooster)).fadeIn(slow);
	
	//Need to switch loading dots with translation
	// translate(newQuestion);
});

$('#translations').on("DOMSubtreeModified", function(){
	$('.row').fadeIn();
})

function appendUsersTextToTheDom(newQuestion, template) {
	//Append the user input to DOM
	var $template = $(template);
	$template.find('.howzm-box').text(newQuestion);
	$('#translations').append($template);
}

function translate(newQuestion) {
	var url = "http://www.translatefun.com/pidginenglish";
	var data = { q: newQuestion };

	$.getJSON(url, data, function(res) {
		var answerRooster = $('#roosterA-template').html();

		appendUsersTextToTheDom(res.text, answerRooster);
		
	})
}



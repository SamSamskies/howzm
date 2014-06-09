$('#new-request').keyup(function(e) {
	if (e.which == 13) {
		e.preventDefault();
		$('#send').trigger('click');
	}
});

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

	var loadingDots = ($(answerRooster)).appendTo('#translations');
	
	loadingDots.fadeIn('slow');
	translate(newQuestion)

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
		setTimeout (function () {
			$('.loading').text(res.text).fadeIn();
		}, 3000);
		// appendUsersTextToTheDom(res.text, answerRooster);
		
	})
}



$(document).ready(function(){

	// Listen to the form. e - event
	$('#note-form').submit( function( e ){

		// Prevent form from submitting
		e.preventDefault();

		// Grab the note
		if ( $.trim($('#note').val() )  == ''){
			return;
		}

		// Prepare AJAX

		$.ajax({
			url: 'http://sarah.kirby.yoobee.net.nz/project-ajax/ajax-yoobee.php',
			data: { note: $('#note').val() },
			success: function( dataFromServer) {

			 },
			 error: function(){
			 	alert('Cannot connect');
			 }



		});



	});

});
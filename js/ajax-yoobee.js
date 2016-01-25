$(document).ready(function(){

	// Listen to the form. e - event. capture info
	$('#note-form').submit( function( e ){

		// Prevent form from submitting
		e.preventDefault();

		// Grab the note, bit of validation
		if ( $.trim($('#note').val() )  == ''){
			return;
		}

		// Prepare AJAX

		$.ajax({
			url: 'http://sarah.kirby.yoobee.net.nz/ajax-yoobee/ajax-yoobee.php',
			data: { note: $('#note').val() },
			success: function( dataFromServer) {
				console.log( dataFromServer);

			 },
			 error: function(){
			 	alert('Cannot connect');
			 }



		});



	});

});
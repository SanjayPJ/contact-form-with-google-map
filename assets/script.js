$('.closeme').click(function(event) {
	/* Act on the event */
	$('.side').hide();
	$('#map').removeClass('col-md-8');
	$('#map').addClass('col-md-12');
	$('.icon-bar').show();
});
$('.showme').click(function(event) {
	/* Act on the event */
	$('.side').show();
	$('#map').removeClass('col-md-12');
	$('#map').addClass('col-md-8');
	$('.icon-bar').hide();
});
$(document).ready(function() {
	
	$("p").hide();
	$("#MyHtml").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

});
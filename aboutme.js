$(document).ready(function() {
	$("#myinfo").hide();

	$("#aboutme").click(function() {
		$("#myinfo").fadeToggle(500);
	});

	// start of mouse over
	$(".mousechange").mouseenter(function() {

		$(this).css("font-size", "10em");
		$(this).css("color", "#0000FF");

	});
	
	$(".mousechange").mouseleave(function() {

		$(this).css("font-size", "2em");
		$(this).css("color", "#993399");
	});

});

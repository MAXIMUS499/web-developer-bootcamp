$("h1").on('click', function() {
	$(this).css("color", "purple");
});

$("input").on("keypress", function() {
	console.log("keypressed!");
});

$("button").on("mouseleave", function() {
	$(this).css("font-weight", "normal");
});
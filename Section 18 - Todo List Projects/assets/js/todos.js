// Check Out Specific Todos By Clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todos
$("span").click(function(event){
	$(this).parent().fadeOut("slow", function(){
		$(this).remove();
	});
	event.stopPropagation();

});


// Check Out Specific Todos By Clicking
//in the code below we added listener to the entire
//ul parent, which means that all future li
//will be proccessed through the on.click 
//listener
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on('click', "span", function(event){
	$(this).parent().fadeOut("slow", function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//add a new todo
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grabing new todo text from input
		var todoText = $(this).val();
		//clear out the input
		$(this).val("");
		//create a bew li and add to ul.
		//also - create this span which should delete the Todo
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})

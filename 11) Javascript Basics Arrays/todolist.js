var todos = ["test todo"];

var input = prompt("What would you like to do?");


while(input !== "quit") {

	if(input === "new") {
		//ask for new Todo
		var newTodo = prompt("Enter a new todo");
		//add to todos array
		todos.push(newTodo);
	}
	else if(input === "list") {
		console.log(todos);
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");



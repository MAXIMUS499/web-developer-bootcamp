var todos = ["test todo"];

var input = prompt("What would you like to do?");


while(input !== "quit") {

	if(input === "new") {
		//ask for new Todo
		var newTodo = prompt("Enter a new todo");
		//add to todos array
		todos.push(newTodo);
		console.log(newTodo + " added to the list")
	}
	else if(input === "list") {
		// console.log(todos);
		console.log("************");
		for(var i = 0; i < todos.length; i++) {
			console.log(i + ": " + todos[i]);
		}
		console.log("************");
	}
	else if(input === "delete") {
		//ask for index of todo to be deleleted
		var deleteIndex = prompt("Enter index of todo to delete");
		//delete that todo
		if(deleteIndex > todos.length) {
			console.log("You've entered the wrong index");
		}
		else {
			todos.splice(deleteIndex, 1);
			console.log("The todo was deleted");
		}
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");



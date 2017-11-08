var todos = ["test todo"];

var input = prompt("What would you like to do?");


while(input !== "quit") {

	if(input === "new") {
		newTodo();
	}
	else if(input === "list") {
		listTodos();
	}
	else if(input === "delete") {
		deleteTodo();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
		console.log("************");
		todos.forEach(function(todo, index) {
			console.log(index + ": " + todos);
		});
		console.log("************");
}

function newTodo() {
	//ask for new Todo
		var newTodo = prompt("Enter a new todo");
		//add to todos array
		todos.push(newTodo);
		console.log(newTodo + " added to the list")
}

function deleteTodo(){
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
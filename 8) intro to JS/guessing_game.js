//using a loop

// Create secretNumber
var secretNumber = 4;


while(Number(number) !== secretNumber) {

	// Ask user for a guess

	var number = prompt("Guess a number!");

	// Check if it is right
	
	if(Number(number) === secretNumber) {
	alert("Wow! You've guessed the right number");
	}
	else if( number === "" || isNaN(number) ) {
		alert("that is not a number you've entered!");
	}
	else if(number < secretNumber) {
		alert("Too low! Try again.");
	}
	else if(number > secretNumber) {
		alert("Too high! Try again.");
	}
}

// var secretNumber = 4;

// var number = prompt("Guess a number!");

// if((+number) === secretNumber) {
// 	alert("Wow! You've guessed the right number");
// }
// else if(number < secretNumber) {
// 	alert("Too low! Try again.");
// }

// else if(number > secretNumber) {
// 	alert("Too high! Try again.");
// }

// var number = prompt("Guess a number!");


// if (number > 7) {
// 	alert("Too high! Try again.");
// }
// else if (number < 7) {
// 	alert("Too low! Try again.");
// }
// else if (number == 7) {
// 	alert("Wow! You've guessed the right number");
// }
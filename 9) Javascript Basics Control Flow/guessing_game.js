//using a loop
// Create secretNumber
var secretNumber = 4;
while(Number(yourGuessNumber) !== secretNumber) {

	// Ask user for a guess

	var yourGuessNumber = prompt("Guess a number!");

	// conditionals

	if(Number(yourGuessNumber) === secretNumber) {
	alert("Wow! You've guessed the right number");
	}
	else if( yourGuessNumber === "" || isNaN(yourGuessNumber) ) {
		alert("that is not a number you've entered!");
	}
	else if(Number(yourGuessNumber) < secretNumber) {
		alert("Too low! Try again.");
	}
	else if(Number(yourGuessNumber) > secretNumber) {
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
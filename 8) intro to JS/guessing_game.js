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


var secretNumber = 4;
var number = prompt("Guess a number!");


while(Number(number) !== secretNumber) {
	var number = prompt("Guess a number!");
	if(Number(number) === secretNumber) {
	alert("Wow! You've guessed the right number");
	}
	else if(number < secretNumber) {
		alert("Too low! Try again.");
	}

	else if(number > secretNumber) {
		alert("Too high! Try again.");
	}

}
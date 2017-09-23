var age = prompt("Enter your age, please", 0);

// If age is negative or less than 1
if (age <= 0 || isNaN(age) ) {
	alert("Something went wrong!");
}

// If age is 21  
else if (age === 21) {
	alert("Happy Birthday!");	
}

// If age is odd
else if (age % 2 === 0) {
	alert("Your age is odd");
}
// If age is a perfect square
else if(age % Math.sqrt(age) === 0) {
	alert("Perfect qsuare!");
}

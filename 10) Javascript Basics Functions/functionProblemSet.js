'use strict'

//Task #1 isEven();

function isEven(num) {
	return num % 2 === 0;
}

//or another variant

function isEven(num) {
	if( isNaN(num) )
		console.log("It is not a number");
	else if (num % 2 === 0)
		return true;
	else 
		return false;
}

console.log( isEven(10) );
console.log( isEven(101) );
console.log( isEven(102) );

// Task #2 factorial(); my solution
// function factorial(num) {
// 	var fac = 1;
// 	for(var i = num; i >= 1; i--) {
// 		fac = fac * i;
// 	}
// 	return fac;
// }

// or another my solution
function factorial(num) {
	var result = 1;
	for(var i = 0; i < num; i++) {
		result = result * (num - i);
	}
	return result;
}


//Teacher's solution variant1

// function factorial(num) {
// 	//define a result variable
// 	var result = 1;
// 	//calculate factorial and store value in result
// 	for(var i = 2; i <= num; i++) {
// 		result *= i;
// 	}
// //return the result variable
// 	return result;
// }

//Teacher's solution variant2

// function factorial(num) {
// 	var result = num;
// 	if (num === 0) 
// 		return 1;
// 	else
// 		for(var i = num - 1; i >= 1; i--) {
// 			result *= i;
// 		}
// 		return result;
// }

console.log(factorial(4));
console.log(factorial(0));

// Task #3 kebabToSnake();  MY SOLUTION
// I've googled and found a solution which uses global regular expression


function kebabToSnake(str) {
	var str2 = str.replace(/-/g, "_");
	return str2;
}

console.log(kebabToSnake("hello-world-----"));
console.log(kebabToSnake("dogs-are-awesome"));






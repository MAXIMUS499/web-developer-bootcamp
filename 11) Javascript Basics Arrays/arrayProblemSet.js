// Task1 printReverse
console.log("Task1 printReverse");

function printReverse(arr) {
	for(var i = 1; i <= arr.length; i++) {
		console.log(arr[arr.length - i]);
	}
}

var arr0 = [1, 2, 3, 4];
var arr1 = ["a", "b", "c", "d"];

printReverse(arr0);
printReverse(arr1);

//Task2 checks if all elements of an array are identical
console.log("Task2 checks if all elements of an array are identical");

function isUniform(arr) {
	var element = arr[0];
	for(var i = 1; i < arr.length; i++)
		if(arr[i] !== element)
			return false;
	return true;
}

console.log(isUniform([1,1,1,1,1,1,1,0,1,1,1,1]));
console.log(isUniform([1,1,1,1,1,1,1,1,1,1,1,1]));
console.log(isUniform([1,1,5,1]));
console.log(isUniform([1,1,1,0]));

//Task3 returns the sum of all numbers in the array
console.log("Task3 returns the sum of all numbers in the array");

function sumArray(arr) {
	var result = 0;
	for(var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

console.log(sumArray([1,1,100]));
console.log(sumArray([2,2,2]));
console.log(sumArray([-5,2,2]));

//Task4 returns the maximum number in the array
console.log("Task4 returns the maximum number in the array");
function max(arr){
	var theBiggestNumber = 0;
	for(var i = 0; i < arr.length; i++)
		if(arr[i] > arr[i-1])
			theBiggestNumber = arr[i];
		else if(theBiggestNumber > arr[i])
			theBiggestNumber = arr[i];
	return theBiggestNumber;
}

console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,3,10,100]));
console.log(max([-5,-5,-5]));
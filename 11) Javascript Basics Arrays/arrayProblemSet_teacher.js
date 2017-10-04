function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--)
		console.log(arr[i]);
}

var arr0 = [1, 2, 3, 4];
var arr1 = ["a", "b", "c", "d"];

printReverse(arr0);
printReverse(arr1);

function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++)
		if(arr[i] !== first)
			return false;
	return true;
}

// function isUniform(arr) {
// 	var first = arr[0];
// 	arr.forEach(function(element) {
// 		if(element !== first) {
// 			return false;
// 		}
// 	});
// 	return true;
// }

console.log(isUniform([1,1,1,1,1,1,1,0,1,1,1,1]));
console.log(isUniform([1,1,1,1,1,1,1,1,1,1,1,1]));
console.log(isUniform([1,1,5,1]));
console.log(isUniform([1,1,1,0]));

// function sumArray(arr) {
// 	var result = 0;
// 	for(var i = 0; i < arr.length; i++)
// 		result += arr[i];
// 	return result;
// }

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}


console.log(sumArray([1,1,100]));
console.log(sumArray([2,2,2]));
console.log(sumArray([-5,2,2]));


function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++)
		if(arr[i] > max)
			max = arr[i];
	return max;
}

console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,3,10,100]));
console.log(max([-5,-5,-5]));
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
for(var i = -10; i <= 19; i++) {
	console.log(i);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
for(var i = 10; i <= 40; i+=2) {
	console.log(i);
}
//or
// for(var i = 10; i <= 40; i++) {
// 	if(i % 2 ===0) {
// 		console.log(i);
// 	}
// }

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for (var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("4) PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (var i = 5; i <= 50; i++) {
	if(i % 5 === 0 && i % 3 === 0)
		console.log(i + " this number is divisible by both 5 and 3");
	else if (i % 5 === 0 || i % 3 === 0)
		console.log(i);
}
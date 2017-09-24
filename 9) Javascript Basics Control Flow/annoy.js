// var answer = prompt("are we there yet?");

// while(answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY, We made it!");




var answer = prompt("are we there yet?").toLowerCase();

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("are we there yet?").toLowerCase();
}

alert("YAY, We made it!");

// largeSrc.text().toLowerCase().indexOf(search.toLowerCase());


// while( answer.toLowerCase().indexOf("yes") || answer.toLowerCase().indexOf("yeah") )
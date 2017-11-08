function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++) {
	//call func for each item in array
		func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, function(){});
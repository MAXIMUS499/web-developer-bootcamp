var movieArray = [
	{
	  title: "Robocop",
	  rating: 4,
	  hasWatched: true
	},

	{
		title: "The Next Three Days",
		rating: 5,
	  hasWatched: true
	},

	{
		title: "Dunkirk",
		rating: 4.5,
	  hasWatched: false
	}
	
];

//JUST FOR LOOP

// function movieList(arr) {
// 	for(var i = 0; i < arr.length; i++)
// 		if(arr[i].hasWatched === true)
// 			console.log("You have watched " + "\""+arr[i].title+"\""  + " - " + arr[i].rating + " stars.");
// 		else
// 			console.log("You have not watched " + "\""+arr[i].title+"\"" + " - " + arr[i].rating + " stars.");
// }

// USING THE FOR EACH LOOP

// function movieList(arr) {
// 	arr.forEach(function(movie){
// 		if(movie.hasWatched === true)
// 			console.log("You have watched " + "\""+movie.title+"\""  + " - " + movie.rating + " stars.");
// 		else
// 			console.log("You have not watched " + "\""+movie.title+"\"" + " - " + movie.rating + " stars.");
// 	})	
// }
// movieList(movieArray);

//TEACHER'S SOLUTIONS	

	// movieArray.forEach(function(movie){
	// 	var result = "You have ";
	// 	if(movie.hasWatched)
	// 		result += "watched ";
	// 	else
	// 		result += "not seen ";

	// 	result += "\"" + movie.title + "\" - ";
	// 	result += movie.rating + " stars";
	// 	console.log(result);	
	// })	

function buildString(movie) {
		var result = "You have ";
		if(movie.hasWatched)
			result += "watched ";
		else
			result += "not seen ";

		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		return result;
}

movieArray.forEach(function(movie){
	console.log( buildString(movie) );
});

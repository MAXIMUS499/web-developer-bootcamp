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

function movieList(arr) {
	for(var i = 0; i < arr.length; i++)
		if(arr[i].hasWatched === true)
			console.log("You have watched " + "\""+arr[i].title+"\""  + " - " + arr[i].rating + " stars.");
		else
			console.log("You have not watched " + "\""+arr[i].title+"\"" + " - " + arr[i].rating + " stars.");
}

movieList(movieArray);
var express = require("express");
var app = express();

// "/" => "hi there!"
app.get("/", function(req, res) {
	res.send("hi there!");
});


// "/bye" => "Goodbye!"
app.get("/bye", function(reg,res){
	res.send("Goodbye!");
});
// ".dog" => "MEOW!"
app.get("/dog", function(reg, res) {
	console.log("SOMEONE MADE A REQUEST TO /DOG");
	res.send("MEOW!");
});

//tell Express to listen for requests (start server)
app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
		console.log(req.params);
	res.send("WELCOME TO THE COMMENTS PAGE!");
});	

app.get("*", function(req, res) {
	res.send("YOU ARE A STAR!");
});


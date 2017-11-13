var express = require('express');
var app = express();

app.use(express.static("public")); // told express to serve the public folder
app.set("view engine", "ejs"); //all templates have ejs extinsion

app.get("/", function(req, res){
	res.render("home");	
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res) {
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet Bunny", author: "Max"},
		{title: "The best ever cat I had is Junior", author: "Maximus"}
	];
	res.render("posts.ejs", {posts: posts})
})


app.listen(3000, () => console.log("The app is listening on port 3000!"));

// var server = app.listen(3000, function () {
 
//   var host = server.address().address;
//   var port = server.address().port;
 
//   console.log('Example app listening at http://%s:%s', host, port);
 
// });
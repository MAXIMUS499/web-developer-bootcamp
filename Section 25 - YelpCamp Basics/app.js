var express = require('express');
var app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Salmon Creek", image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg"},
		{name: "Granite Hill", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8358/8444469474_8f4b935818.jpg"}
	]

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => console.log("The app is listening on port 3000!"))	
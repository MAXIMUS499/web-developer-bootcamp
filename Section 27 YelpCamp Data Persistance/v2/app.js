var express  	 = require('express'),
		app 			 = express(),
		bodyParser = require('body-parser'),
		mongoose 	 = require("mongoose")

//connect mongoose to 
mongoose.connect("mongodb://localhost/yelp/camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
}); 

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Granite Hill",
// 	  image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"
// 	},
// 	{
// 		name: "Maximus Glory Road",
// 		image: "http://www.planetware.com/photos-large/USNH/usa-new-hampshire-campgrounds-franconia-notch.jpg"
// 	}, 
// 	function(err, campground){
// 		 	if(err) {
// 		 		console.log(err);
// 		 	} else {
// 		 		console.log("NEWLY CREATED CAMPGROUND: ");
// 		 		console.log(campground);
// 		 	}
// 	});



app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	//Get all camps from DB
	Campground.find({}, function(err, allCampgrounds){
		if (err) {
		  console.log(err);
		} else {
			 res.render("campgrounds", {campgrounds: allCampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res){
	//get data from our form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	//Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if (err) {
		  console.log(err);
		} else
				console.log(newlyCreated);
	});
	//redirect back to campgrounds 	page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, () => console.log("The app is listening on port 3000!"))	
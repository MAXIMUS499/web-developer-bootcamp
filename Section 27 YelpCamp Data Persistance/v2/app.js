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
	image: String,
	description: String
}); 

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: 			 "Granite Hill",
// 	  image: 			 "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg",
// 		description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite"
// 	},
// 	{
// 		name: 			 "Maximus Glory Road",
// 		image: 			 "http://www.planetware.com/photos-large/USNH/usa-new-hampshire-campgrounds-franconia-notch.jpg",
// 		description: "This a well-known road!!"
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

//INDEX - show all Campgrounds
app.get("/campgrounds", function(req, res){
	//Get all camps from DB
	Campground.find({}, function(err, allCampgrounds){
		if (err) {
		  console.log(err);
		} else {
			 res.render("index", {campgrounds: allCampgrounds});
		}
	});
});


//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
	//get data from our form and add to campground array
	var name 	= req.body.name;
	var image = req.body.image;
	var desc  = req.body.description;
	var newCampground = {name: name, image: image, description: desc}
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

//NEW - show form to create  new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

//SHOW -show more info about one campground
app.get("/campgrounds/:id", function(req, res){
	//find the campground with provided ID
	//Campground.FindById(id, callbackFunction)
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template with that campground
			res.render("show", {campground: foundCampground});
		}
	});
	
	
	
});

app.listen(3000, () => console.log("The app is listening on port 3000!"))	
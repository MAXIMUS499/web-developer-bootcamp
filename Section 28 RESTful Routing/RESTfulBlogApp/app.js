//1) point all required things
var bodyParser = require("body-parser"),
	  mongoose   = require("mongoose"),
	  express 	 = require("express"),
	  app 			 = express();
	  moment 		 = require('moment');

//2) set up basic things //APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
// in order to ger rid of .ejs we use this:
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//3) MONGOOSE/MODEL CONFIG //create schema
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

//4) compile it into the model
var Blog = mongoose.model("Blog", blogSchema);
// title
// image
// body
// created

//RESTFUL ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err)
			console.log("ERROR");
		else 
			res.render("index", {blogs: blogs});
	});
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
	//create blog
	Blog.create(req.body.blog, function(err, newBlog){
		if (err)
			res.render("new");
		//then, redirect to the index
		else
			res.redirect("/blogs");
	});	
});

// SHOW ROUTE
app.get('/blogs/:id', function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err)
			res.redirect("/blogs");
		else {
			res.render("show", {blog: foundBlog})
		}
	});
});

app.listen(3000, () => console.log("The app is listening on port 3000"));
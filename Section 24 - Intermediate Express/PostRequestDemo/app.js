var express = require('express');
var app = express();
var bodyParser = require("body-parser");

//body-parser package allows you to be able to read req.body 
//(allows console to print "console.log(req.body)" and not show undefined)
app.use(bodyParser.urlencoded({extended: true})); // google it - what does it do?
app.set("view engine", "ejs");
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res) {
	res.render("home");
});

app.post("/addfriend", function(req, res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends")
});

app.get("/friends", function(req, res) {
	res.render("friends", {friends: friends});
});

app.listen(3000, () => console.log("The app is listening on port 3000!"));
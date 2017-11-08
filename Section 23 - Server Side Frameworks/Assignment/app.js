var express = require('express');
var app = express();

app.get('/', (req, res) => res.send("Hi there, welcome to my assignment!"));

app.listen(3000, () => console.log('The app is listening on port 3000!'));

// app.get('/speak/:animal', function(req, res){
// 	//define a dictionary 
// 	var animal = req.params.animal;
// 	var sound = "";
// 	if(animal === 'pig') {
// 		sound = "Oink";
// 	}
// 	else if(animal === 'dog') {
// 		sound = 'Woof! Woof!';
// 	}
// 	res.send("The " + animal + " says " + sound);
// });


app.get('/speak/:animal', function(req, res){
	//define a collection of pairs animal: sound
	var sounds = {
		pig: "Oink",
		dog: "Woof! Woof!",
		cat: "Meow! Meow! I'm the hungriest cat in the world",
		cow: "Moo",
		chicken: "Ko Ko Ko"
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says " + "'"+sound+"'");
});

// app.get('/repeat/:word/:number', function(req, res){
// 	var num = Number(req.params.number);
// 	var word = req.params.word;
// 	var repeatedWord = "";
// 	while(num > 0){
// 		repeatedWord += word + " ";
// 		num--;
// 	}
// 	res.send(repeatedWord);
// });


// app.get('/repeat/:word/:number', function(req, res){
// 	var num = Number(req.params.number);
// 	var word = req.params.word;
// 	var repeatedWord = "";
	
// 	for(var i = 0; i < num; i++)
// 		repeatedWord += word + " ";
// 	res.send(repeatedWord);
// });

app.get('/repeat/:word/:number', function(req, res){
	//should print :word * :number
	var num = req.params.number;
	var word = req.params.word;
	console.log(word);
	res.send((word + " ").repeat(num));
});


app.get('*', (req, res) => res.send("Sorry, page is not found... What are you doing with your life?"));


// app.get('/speak/:animal', (req, res) => res.send("You've just visited an animal section"));

// var animals = ['/speak/pig', '/speak/cow', '/speak/dog', '/speak/cat', '/speak/chicken'];
// function animalVoice(req, res) {
// 	for(var i = 0; i < animals.length; i++) {
// 		if(animals[i] === animals[0]) {
// 			res.send("Oink");
// 		}
// 		else if(animals[i] === animals[1]){
// 			res.send("Moo");
// 		}
// 		else if(animals[i] === animals[2]){
// 			res.send("Woof! Woof!");
// 		}
// 		else if(animals[i] === animals[3]){
// 			res.send("Meow Meow! I'm the hungriest cat in the world");
// 		}
// 		else if(animals[i] === animals[4]) {
// 			res.send("Ko Ko Ko!");
// 		}
// 	}
// }

// app.get(animals, animalVoice);

// app.get(animals, function(req, res){
// 	var animal = 
// 	res.send("You've just visited an animal section")
// });





// app.get('/speak/:animal', function(req, res){
// 	var animal = req.params.animal;
// 	var sound = "";
// 	if(animal === 'pig')
// 		res.send("The pig says 'Oink'");
// 	else if(animal === 'cow')
// 		res.send("Moo!");
// 	else if(animal === 'dog')
// 		res.send("The dog says 'Woof! Woof!'");
// 	else if(animal === 'cat')
// 		res.send("The cat says: 'Meow Meow! I'm the hungriest cat in the world'");
// 	else if(animal === 'chicken')
// 		res.send("The chicken says 'Ko Ko Ko'");
// 	else {
// 		res.send("Don't know that animal");
// 	}
// });
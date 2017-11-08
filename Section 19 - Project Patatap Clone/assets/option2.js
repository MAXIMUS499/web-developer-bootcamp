//dimensions of grid (5x10 grid)
var rows = 10;
var cols = 10;

//center coordinates of any circle being drawn

var x;
var y;

//center coordinates of first circle being drawn
var xstart = 50;
var ystart = 50;

//distance between center coordinates
var xspacing = 100;
var yspacing = 100;

var radius = 10;
var fillColor = randomColor();

//create grid and draw circles
for (var row = 1; row <= rows; row++) {
    y = ystart + (row - 1) * yspacing;
    
    for(var col = 1; col <= cols; col++) {
        x = xstart + (col - 1) * xspacing;
        new Path.Circle(new Point(x, y), radius).fillColor = fillColor;
    }
}

function randomColor() {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b + ")";
}




for(var x = 0; x < 1000; x+= 100) {
    for(var y = 0; y < 1000; y+=100) {
        new Path.Circle(new Point(x, y), 10).fillColor = randomColor();
    }
}

function randomColor() {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b + ")";
}
var button = document.querySelector("button");
var body = document.querySelector("body");

function whiteColor(){
	body.style.background = "white";
	button.removeEventListener("click", whiteColor);
	button.addEventListener("click", purpleColor);
}

function purpleColor(){
	body.style.background = "purple";
	button.removeEventListener("click", purpleColor);
	button.addEventListener("click", whiteColor);
}

whiteColor();
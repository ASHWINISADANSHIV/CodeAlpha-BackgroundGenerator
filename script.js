var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " 
	+ color2.value +")";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());

var button = document.createElement("button");
button.appendChild(document.createTextNode("Random Color"));
button.style.fontFamily='Caveat, cursive'
body.appendChild(button);




const customCursor = document.querySelector(".custom-cursor");

document.body.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX + "px";
  customCursor.style.top = e.pageY + "px";


  

});


const clickableElements = document.querySelectorAll(".clickable");

clickableElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    customCursor.style.transform = "scale(1.5) translate(-50%, -50%)";
  });

  element.addEventListener("mouseleave", () => {
    customCursor.style.transform = "translate(-50%, -50%)";
  });
});




button.addEventListener("click", getRandomColor);

function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
  return color;
}

function getRandomColor() {
	var rndColor1 = randomColor();
	var rndColor2 = randomColor();
	body.style.background = "linear-gradient(to right, " + rndColor1 + ", " 
	+ rndColor2 +")";
	
}


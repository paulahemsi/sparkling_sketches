//made with https://editor.p5js.org/

function setup() {
	createCanvas(600, 600);
	frameRate(20);
  }
  
  function draw() {
	background(240);
	carnivalRain();
  }
  
  function randomColor() {
	return "#" +  Math.floor(Math.random()*16777215).toString(16);
  }
  
  function carnivalRain() {
	for (var i = 0; i < 900; i++)
	{
	  noStroke();
	  fill(randomColor());
	  ellipse(random(200, 400), randomGaussian(20, 200), random(1, 30), random(1, 30));   
	} 
  }

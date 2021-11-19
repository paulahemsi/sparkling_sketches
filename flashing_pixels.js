//apr 2020

function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 200, 250, 50);
  }
  
  function draw() {
	background(220);
	frameRate(50);
	for (var x = 0; x < width; x = x + 20) {
	  for (var y = 0; y < width; y = y + 20) {
		stroke(255);
		fill(random(200), 100, 100);
		rect(x, y, 20, 20);
	  }
	}
  }

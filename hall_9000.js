let offX = 0.0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(12);
  fill(10);
  offX += 0.01;
  drawCircle();
  drawSphere();
}

function drawCircle() {
  strokeWeight(1);
  stroke(30);
  circle(0, 0, 600);
}

function drawSphere() {
  let slices = random(15, 25);
  let size = noise(offX) * (width / 2);
  strokeWeight(0.2);
  stroke(255, 150 - size, 0);
  rotateY(millis() / 100);
  for (let i = 1; i < slices; i++) {
    sphere(size, i, i);      
  }
}

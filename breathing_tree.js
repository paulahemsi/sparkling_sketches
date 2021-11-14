//aug 2020 with https://editor.p5js.org/

let angle;
let size = 100;
let factor;
let xoff = 0;
let palet = 1;

function setup() {
  createCanvas(600, 600);
  noCursor();
}

function draw() {
    
  switch (palet) {
    case 1:
      background(51, 24, 50);
      break;
    case 2:
      background(49, 104, 121);
      break;
    case 3:
      background(194, 215, 233);
      break;
  }
  line(width/2, height, width/2, height - 40);
  translate(width/2, height - 40);
  angle = noise(xoff) * (PI);
  xoff += 0.01;
  factor = 0.67;
  branch(size);

}

function branch(size) {

  let r = noise(xoff) * 255;
  let b = map(mouseY, 0, height, 0, 255);

  if (size > 4) {
      stroke(198, 216, 211);
   }
  else {
    switch (palet) {
      case 1:
        stroke(216, 30, 91);
        break
      case 2:
        stroke (244, 122, 96);
        break;
      case 3:
        stroke (224, 47, 144);
        break;
    }
  }

  line(0, 0, 0, -size);
  translate(0, -size);

  if (size > 1) {
    push();
    rotate(angle * noise(xoff));
    branch(size * factor);
    pop();
    push();
    rotate(-angle);
    branch(size * factor);
    pop();
  }

}

function mousePressed() {
  palet ++;
  if (palet > 3){
    palet = 1;
  }
}

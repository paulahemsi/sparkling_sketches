let imagens = [];
let objetosFrente = [];
let objetosFundo = [];
let imagensMenina = [];
let imgWidth = 877;
let imgHeight = 620;
let xFrente = 0;
let xFundo = imgWidth;
let retorno = imgWidth;
let index = 0;
let executeDeNovo = Date.now();
let frameRateMenina = 100;

function preload() {
  for (let i = 0; i < 6; i++) {
    let img = `floresta${i}.png`;
    imagens.push(img);
    imagens[i] = loadImage(img);
  }
  for (let i = 0; i < 7; i++) {
    let imgMenina = `ela${i}.png`;
    imagensMenina.push(imgMenina);
    imagensMenina[i] = loadImage(imgMenina);
  }
}

function setup() {
  createCanvas(imgWidth, imgHeight);
  for (let i = 0; i < imagens.length; i++) {
    let objetoFrente;
    objetoFrente = new Camada(imagens[i], (i + 1) * 1.3, xFrente);
    objetosFrente.push(objetoFrente);
    let objetoFundo = new Camada(imagens[i], (i + 1) * 1.3, xFundo);
    objetosFundo.push(objetoFundo);
  }

  requestAnimationFrame(animacaoMenina);
}

function draw() {
  background(220);
  for (let i = 0; i < imagens.length; i++) {
    objetosFrente[i].mostrar();
    objetosFrente[i].mover();
    objetosFundo[i].mostrar();
    objetosFundo[i].mover();
  }
  setInterval(function animacaoMenina() {

  }, 1000);
  image(imagensMenina[index], width / 5, height / 1.7);
}

function animacaoMenina() {
  if (Date.now() > executeDeNovo) {
    index++;
    if (index > 6) {
      index = 0;
    }
    executeDeNovo = Date.now() + frameRateMenina;
  }
  requestAnimationFrame(animacaoMenina);
}

//----

let contador;
class Camada {
  constructor(img, velocidade, x) {
    this.img = img;
    this.velocidade = -velocidade;
    this.x = x;
  }

  mostrar() {
    image(this.img, this.x, 0, imgWidth, imgHeight);
  }

  mover() {
    this.x += this.velocidade;
    if (this.x <= -imgWidth) {
    contador ++;
      if (contador < 4){
    this.x = imgWidth;
        }
    }
  }
}

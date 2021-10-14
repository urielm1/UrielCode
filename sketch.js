var beeImage;
var beeFont;
var xloc, yloc;
function preload(){
  beeImage = loadImage('assets/bee.jpg');
  beeFont = loadFont('assets/Honeybee.ttf');
}

function setup() {
  // put setup code here
  createCanvas(600,600);
  xloc = 300;
  yloc = 200;
  noCursor();
}

function draw() {
  // put drawing code here
  background(255);
  image(beeImage, mouseX, mouseY,50,50);
}

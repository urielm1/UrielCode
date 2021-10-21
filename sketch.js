var startSignin;
function preload(){
  startSignin = loadImage('assets/Signin.png');
  homepage = loadImage('assets/Homepage.png');
  menupage = loadImage('assets/Menupage.png');
  plantpage = loadImage('assets/Plantpage.png');
  rosepage = loadImage('assets/RoseFlowerpage.png');
  notespage = loadImage('assets/Notespage.png');
  creatnote = loadImage('assets/Creatingnote.png');
  newnotespage = loadImage('assets/Newnotespage.png');
  waterMethods = loadImage('assets/WaterMethods.png');
}

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background(220);
  image(startSignin,300,30);
  image(homepage,300,30);
  image(menupage,300,30);
  image(plantpage,300,30);
  image(rosepage,300,30);
  image(notespage,300,30);
  image(creatnote,300,30);
  image(newnotespage,300,30);
  image(waterMethods,300,30);
}

function mousePressed(){
  startSignin = homepage;
  homepage = menupage;
  menupage = plantpage;
  plantpage = rosepage;
  rosepage = menupage;
  menupage = notespage;
  notespage = creatnote;
  creatnote = newnotespage;
  newnotespage = menupage;
  menupage = waterMethods;

}

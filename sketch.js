var signIn, homePage, menuPage, plantPage, rosePage, notesPage, creatNote, newNotes, waterMethods;
var start;
function preload(){
  signIn = loadImage('assets/Signin.png');
  homePage = loadImage('assets/Homepage.png');
  menuPage = loadImage('assets/Menupage.png');
  plantPage = loadImage('assets/Plantpage.png');
  rosePage = loadImage('assets/RoseFlowerpage.png');
  notesPage = loadImage('assets/Notespage.png');
  creatNote = loadImage('assets/Creatingnote.png');
  newNotes = loadImage('assets/Newnotespage.png');
  waterMethods = loadImage('assets/WaterMethods.png');
}

function setup() {
  // put setup code here
  createCanvas(350,600);
  start = 1;
}

function draw() {
  // put drawing code here
  background(221);

  if(start == 1){
  image(signIn,0,0, width, height);
}else

  if( start == 2){
    image(homePage,0,0, width, height);
  }else
  if( start == 3){
    image(menuPage,0,0, width, height);

  }else
  if( start == 4){
    image(plantPage,0,0, width, height);

  }else
  if( start == 5){
    image(rosePage,0,0, width, height);

  }else
  if( start == 6){
    image(menuPage,0,0, width, height);

  }else
  if( start == 7){
    image(notesPage,0,0, width, height);

  }else
  if( start == 8){
    image(creatNote,0,0, width, height);

  }else
  if( start == 9){
    image(newNotes,0,0, width, height);

  }else
  if( start == 10){
    image(menuPage,0,0, width, height);

  }else
  if( start == 11){
    image(waterMethods,0,0, width, height);

  }
}


function mousePressed(){

start++;


  //startSignin = homepage;
  //homepage = menupage;
//  menupage = plantpage;
  //plantpage = rosepage;
//  rosepage = menupage;
//  menupage = notespage;
//  notespage = creatnote;
  //creatnote = newnotespage;
//  newnotespage = menupage;
//  menupage = waterMethods;

}

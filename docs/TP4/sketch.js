// p5js Variable 
// mousePressed (Boolean) -> true or false

let img;
let font;

let xPos = 200.0;
let yPos = 150.0;
let xSpeed, ySpeed, ballSize, c;

function preload(){
  img = loadImage("assets/cat1.jpg");
  font = loadFont("assets/Barrio-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  ballSize = random(5, 20);
  xSpeed = random(-10, 10);
  ySpeed = random(-10, 10);
  c = color(255, 0, 0);

  // use this font and use fontsize 24px
  textFont(font, 36);
}

function draw() {
  background(220);
  // CENTER / CORNER
  imageMode(CENTER);

  //image(img, 300, 100, 100, 50);
  image(img, 300, 200, img.width *2, img.height*2);

  fill(c);
  ellipse(xPos, yPos, ballSize, ballSize);

  fill(0);
  text("Hello", width/2, height/2);

  text(mouseX + " / " + mouseY, mouseX,mouseY);

  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;


  // VERKNÜPFUNGSOPERATOREN // CONJUNCTION OPERATORS
  // && (AND) ConditionA && ConditionB -> both must be true
  // || (OR)  ConditionA || ConditionB -> at least one must be true

 /* if(xPos >= width){
    xSpeed = -1 * xSpeed;
  }
  if(xPos <= 0){
    xSpeed = -1 * xSpeed;
  }*/
  // Verbindung der zwei if Bedingung:
  if(xPos >= width || xPos <= 0){
    xSpeed = -1 * xSpeed;
    c = color(random(255), random(255), random(255));
  }

  /*if(yPos >= height){
    ySpeed = -1 * ySpeed;
  }
  if(yPos <= 0){
    ySpeed = -1 * ySpeed;
  }*/
  if(yPos >= height || yPos <= 0){
    ySpeed = -1 * ySpeed;
  }

  if(mouseIsPressed){
    xPos = mouseX;
    yPos = mouseY;
    ballSize = random(5, 20);
    xSpeed = random(-10, 10);
    ySpeed = random(-10, 10);
  } else {
    // wenn maustaste nicht gedrückt ist 
    // ball immer auf 3 Pixel setzen
    ballSize = 3;
  }

}

// Objekte
// empty Object:
// let ball = {};

let ball = {
  x: 200,
  y: 150,
  d: 50,
  xSpeed: 2,
  ySpeed: 1.5
}

let button = {
  x: 250,
  y: 200,
  w: 100,
  h: 70
}

let backgroundStatus = false;

function setup() {
  createCanvas(400, 400);
  button.c = color(255,255,0);
  button.hover = color(255,100, 0);
}

function draw() {
  if(backgroundStatus){
    background(0, 0, 255);
  } else {
    background(220);
  }

  fill(255);
  ellipse(ball.x, ball.y, ball.d, ball.d);
  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;
  // Prototyp ball kann auch eingene Funktionen haben zb:
  // ball.render();

  if(mouseX > button.x && 
    mouseX < button.x + button.w && 
    mouseY > button.y && 
    mouseY < button.y + button.h){
      fill(button.hover);
      if(mouseIsPressed){
        fill(255);

        // toggle die Variable
        // backgroundStatus
        /*if(backgroundStatus){
          backgroundStatus = false;
        } else {
          backgroundStatus = true;
        }*/
      }
  } else {
    fill(button.c);
  }
  rect(button.x, button.y, button.w, button.h);

}

// Eventlistener
// is executet just one time per click
function mouseClicked(){

  if(mouseX > button.x && 
    mouseX < button.x + button.w && 
    mouseY > button.y && 
    mouseY < button.y + button.h){

      if(backgroundStatus){
        backgroundStatus = false;
      } else {
        backgroundStatus = true;
      }
  }
}

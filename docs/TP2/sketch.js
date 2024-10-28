// Processing Variables
// mouseX -> Number: value of current mouse X position
// mouseY -> Number: value of current mouse Y position

// width  -> Number: width of the canvas Element
// height -> Number: height of the canvas Element

// frameCount -> Number: counter of repetitions of the function draw();


function setup() {
  createCanvas(400, 300);
  angleMode(DEGREES);
  
  // sets the frameRate (default frameRate = 60fps)
  // frameRate(1);
  
  
}

function draw() {
  //background(220);
  
  fill(255, random(0, 255), 0, 50);
  
  // random( max ); --> 0 - max
  // random(min , max ) --> min - max
  
  ellipse(mouseY, mouseX, 100, 100);
  
  fill(0);
  ellipse(width/2, height/2, 50, 50);
  
  fill(255);
  rect(0, height - 50, width, 50);
  
  rect(2*width/3, 0, width/2, height- 50);
  
  fill(255, 0, 0);
  // ellipse(x, y, radius);
  ellipse((frameCount*3) % width, height/2, frameCount/10.0);
  // Calculation Operators + - * / %(Modulo)
  // you can use brackets to set the order of calculations
  
}
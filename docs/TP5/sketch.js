function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  

  rect(200, 150, 100, 80);

  translate(200, 150);

  // scale(1, 1); no change
  // scale(0.5, 0.5); half the size
  // scale(-1, 1); mirror in x-Axis
  scale(-0.5, 0.5);

  rect(0, 0, 100, 80);

  rotate(mouseX);
  rect(-50, -40, 100, 80);

  // Oberarm
  rect(0,0, 200, 30);

  translate(200, 0);
  rotate(mouseY);
  // Unterarm
  rect(0, 0, 200, 40);

  // resets all transformations to default
  // left top corner, no rotation, no scale
  resetMatrix();
  text("hello", 20, 20);
}
 
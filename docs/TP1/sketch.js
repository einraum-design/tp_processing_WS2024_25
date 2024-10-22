function setup() {
  // comment - its ignored by the browser
  
  /* multi
     line
     comment
  */
  
  // Winkel in Grad statt Bogenmaß angeben:
  // work with degrees (0-360°) instead of radians (0-TWO_PI)
  angleMode(DEGREES);
  
  // crates a canvas in measers width , height in px
  createCanvas ( 400,  300 );
  
  // 1 Paramter -> greyValue, 3 parameters red, green, blue
  background(200);
  
  
  // Füllfarbe festlegen
  // Farben 0 - 255 --> R, G, B, (A)
  // Farben 0 - 255 --> Grauwert, (A)
  fill(255, 0, 0);
  
  // rectMode(CENTER / CORNER)
  // Referenzpunkt, von wo das Rechteck aus positioniert wird
  rectMode(CENTER);
  
  // rect(x, y, w, h);
  rect(150, 100, 100, 60);
  
  
  // ellipseMode(CENTER / CORNER);
  
  // fill(red, gree, blue, alpha)
  fill(0, 0, 255, 100);
  
  // ellipse(x, y, w, h);
  ellipse(150, 100, 100, 60);
  

  // Referenzpunkt, von wo der Kreis aus positioniert wird
  // CENTER / CORNER
  ellipseMode(CORNER);
  
  // noFill() -> no fill color
  noFill();
  stroke(0, 255, 0);
  strokeWeight(6);
  ellipse(150, 100, 100, 60);
  
  // fill(greyValue) --> red green and blue are equal
  fill(120);
  ellipse(250, 100, 100, 60);
  
  line(20, 200, 35, 25);
  
  fill(255, 255, 0);
  // arc(x, y, w, h, startangle, stopangle, paintMode)
  arc(200, 200, 100, 100, 45, 360-45, PIE)
}

function draw() {
}
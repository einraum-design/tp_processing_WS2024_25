

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  translate(width/2, height/2);
  //translate(30, 30);

  scale(0.5, 1);
  // second() -> int 0 - 60
  let secondRotation = map(second(), 0, 60, 0, 360);

  rotate(secondRotation);
  stroke(255, 0, 0);
  strokeWeight(1);
  line(0, 0, 0, -180);

  // Zurücksetzen der Rotation vom Sekundenzeiger
  // Option 1:
  // resetMatrix();
  // translate(width/2, height/2);

  // Option 2:
  // zurückdrehen der vorherigen Rotation
  rotate(-secondRotation);


  // Option 3
  // aktuellen Zustand der Transformationen zwischenspeichern
  push();

  // minute() -> int 0 - 60
  let minuteRotation = map(minute() +second()/60.0, 0, 60, 0, 360);

  rotate(minuteRotation);
  stroke(0);
  strokeWeight(3);
  line(0, 0, 0, -190);

  pop();

  push();
  // hour() -> int 0 - 24
  let hourRotation = map(hour() + minute()/60.0, 0, 24, 0, 720);

  rotate(hourRotation);
  stroke(0);
  strokeWeight(5);
  line(0, 0, 0, -150);


  pop();

}

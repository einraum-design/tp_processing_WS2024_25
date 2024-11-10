// Elemenatry variables
// bool: (Boolean) true / false
// int: (Integer) 0, 2, 345, -23, ... Ganzzahlen
// float: (Floating point numbers Fließkommazahlen) 0.234, -3.234
// char: (Character) 'a', 'b', ' ', '2'

// Objecte
// p5.image Bilder
// p5.font Schriften
// String Zeichenkette (collection von characters) "Hello world", "25a", "", 
// bliebige eine Objekte möglich ... 

// create own Variable
// let name; create Variable without content
// key let + nameOfVariable;    // optional add a value   = value;
let name = "Paul";
let xPos = 0.0;
let yPos = 0.0;

function setup() {
  createCanvas(400, 400);

  name = "Anna";
}

function draw() {
  //background(220);
  fill(255);
  ellipse(xPos, yPos, 30,30);

  xPos = xPos + 1;
  yPos = yPos + 2.3;

  fill(0);
  text(name, 20, 40);


  // Comparison Operators
  // a == b --> a equals b
  // a > b  --> a bigger than b
  // a < b  --> a smaller than b
  // a >= b --> a bigger or equals b
  // a <= b --> a smaller or equals b
  // a != b --> a not equals b


  // if Conditions
  // if(CONDITION){ Code } 
  // Code is executed only if CONDITION is true
  if(xPos >= width){
    xPos = 0;
  }

  if(yPos >= height){
    yPos = 0;
  }

}

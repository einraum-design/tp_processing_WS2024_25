// Arrays - geordnete Sammlung von Variablen
// leeres Array
let names = [];

let auto = {
  ps: 68,
  motor: {
    baureihe: 23923,
    id: 2098,
  },
  farbe: "rot",
  baujahr: 1992,
  controlltermine: 
    [
      1994/4/21,
      1996/5/3,
      1998/3/23,
      //...
    ],
}

// auto.ps -> enthält 68 


// array mit Werten:
let teilnehmer = ["Paul", "Tina", "Stefan", "Luise", "Tom", "Kevin", "Stefanie"];
let index = 0;

function setup() {
  createCanvas(400, 400);
  teilnehmer[0] = "Franz";
}

function draw() {
  background(220);

  fill(0);
  text(index, 20, 30);
  text(teilnehmer[index], 30, 30);

  /*text(teilnehmer[0], 30, 50);
  text(teilnehmer[1], 30, 60);
  text(teilnehmer[2], 30, 70);
  text(teilnehmer[3], 30, 80);
  text(teilnehmer[4], 30, 90);*/

  // COUNTER
  let counter = 0;

  // Wiederhole alles im { RUMPF }
  // bis die CONDITION nicht mehr erfüllt ist
  while(counter < teilnehmer.length){
    text(teilnehmer[counter], 30, 50 + counter * 15);
    // INCREMENTOR
    counter = counter + 1;
  }
  


}

function mousePressed(){
  index = index + 1;

  if(index >= teilnehmer.length){
    index = 0;
  }
}

// wird bei jedem Tastendruck aufgerufen
function keyPressed(){
  // push() hängt eine weiteres Element ans Ende des Arrays
  teilnehmer.push(key);
}




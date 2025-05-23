let backgroundColor;
let video;
let canvas;
let sound;

function preload(){
  sound = loadSound("assets/sound.mp3");
}

function setup() {

  backgroundColor = color(255, 255, 255);

  canvas = createCanvas(400, 400);
  canvas.parent("p5canvas");

  let button = createButton("click me");
  button.parent("nav");

  button.mouseClicked(() => {
    
    let button2 = createButton("neuerButton");
    button2.parent("nav");
    button2.mouseClicked(() => {
      backgroundColor = color(random(255), random(255), random(255));
    });
  });

  let soundButton = createButton("Play Sound!");
  soundButton.mouseClicked(() => {
    sound.play();
  });
  soundButton.position(200, 200);

  video = createVideo("assets/video.mp4");
  video.parent("videoDiv");
  video.showControls();
  video.play();
  video.onended(() => {
    // do something ...
  });
  video.hide();
  // end function setup()
}

function draw() {
  background(backgroundColor);
  ellipse(random(width), random(height), 5, 5);
}

function mouseClicked(){
  video.show();
  video.play();
  canvas.hide();
}

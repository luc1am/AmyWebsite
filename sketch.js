
let video = [];
let x = 100;
let y = 0;
let frame;




function preload(){
  video[0] = loadImage("assets/head/Layer 1.png");
  video[1] = loadImage("assets/head/Layer 2.png");
  video[2] = loadImage("assets/head/Layer 3.png");
  video[3] = loadImage("assets/head/Layer 4.png");
  video[4] = loadImage("assets/head/Layer 5.png");
  video[5] = loadImage("assets/head/Layer 6.png");
  video[6] = loadImage("assets/head/Layer 7.png");
  video[7] = loadImage("assets/head/Layer 8.png");
  video[8] = loadImage("assets/head/Layer 9.png");
  video[9] = loadImage("assets/head/Layer 10.png");
  video[10] = loadImage("assets/head/Layer 11.png");
  video[11] = loadImage("assets/head/Layer 12.png");
  video[12] = loadImage("assets/head/Layer 13.png");
  video[13] = loadImage("assets/head/Layer 14.png");
  video[14] = loadImage("assets/head/Layer 15.png");
  video[15] = loadImage("assets/head/Layer 16.png");
  video[16] = loadImage("assets/head/Layer 17.png");
  video[17] = loadImage("assets/head/Layer 18.png");
  video[18] = loadImage("assets/head/Layer 19.png");
  video[19] = loadImage("assets/head/Layer 20.png");
  video[20] = loadImage("assets/head/Layer 21.png");
  video[21] = loadImage("assets/head/Layer 22.png");
}

function setup() {
    let canvas = createCanvas((windowWidth), windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  //blendMode(OVERLAY)
  //BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT
  background(255);
}

function draw() {
  background(255);
 
  

  x = 450;
  y = -50;
  if (mouseX<windowWidth){
    let t = map(mouseX, 0, windowWidth, 0, video.length);
    
    frame = video[floor(t)]
  }
  else if (mouseX>windowWidth){
    frame = video[21]
  }
  else if (mouseX<0){
    frame = video[0]
  }
  push();
  //blendMode(OVERLAY);
  frame.resize(300, 400)
  image(frame, x, y)
  pop();

}

function windowResized(){
  resizeCanvas((windowWidth), windowHeight);
  text_x = 50;
  text_y = (height/2)-50;
}


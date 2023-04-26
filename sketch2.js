let myString = "lucia mumma"


function setup() {
    let canvas = createCanvas(100, 100);
  canvas.parent('sketch-container-1');
  textFont("Georgia", 50);
  

}

function draw() {
  background(255);
  let tracking = 40;
  textAlign(CENTER);
  text(myString, width/2, height*0.25);
  for (let i=0; i<myString.length; i++){
     // push();
    let myChar = myString.charAt(i);
    let startX = width/2 - textWidth(myString)/2;
    let x = startX + tracking*i;
    //let x = startX + textWidth(myChar)*i;

    let noiseValue = noise(frameCount * 0.01, i * 0.1);
    let scaledNoise = (noiseValue - 0.5) * 100;
    
    text(myChar, x, height*0.5 + scaledNoise/2);

      // let angle = noiseValue * TWO_PI;

      // translate(i,x);
    
      text(myChar, x, height*0.75+ scaledNoise + i);
 
    let bounce = 0;
    let offset = 20;
    if ((mouseX < x+offset) && (mouseX> x-offset)){
        if ((mouseY < height*.9 +offset)&& (mouseY> height*.9 -offset)){
            bounce = 2;
        }
    }
    text(myChar, x, height*.9 + bounce)
    
  }
}


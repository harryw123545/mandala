function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(10, 20, 30);
  
  noFill();
  let time = frameCount;
  let iter = map(mouseX, 0, width, 0, 6);
  
  translate(width/2, height/2);
  
  for(var i = 0; i < 200; i++){
    push();
    rotate(cos(frameCount + i * iter) * 80);
    stroke(127 + 127 * sin(i * 12 + time), 127 + 127 * sin(i * 11.5 + time), 127 + 127 * sin(i * 11.1 + time));
    rect(0, 0, 500 - i * 2.5, 500 - i * 2.5, 200 - i+5);
    pop();
  }
}
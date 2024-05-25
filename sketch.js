function setup() {
  createCanvas(400, 400);
  background("black")
}

function draw() {
  stroke("white");
  fill("pink");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
}

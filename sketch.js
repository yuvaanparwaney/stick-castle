var p1;

function setup() {
  createCanvas(400,400);
  createSprite(200, 400, 50, 400);
  createSprite(145, 400, 50, 500);
  createSprite(255, 400, 50, 500);
  createSprite(90, 400, 50, 600);
  createSprite(310, 400, 50, 600);
  createSprite(35, 400, 50, 700);
  createSprite(365, 400, 50, 700);
}

function draw() {
  background("yellow");  
  drawSprites();
}
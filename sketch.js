
var spritefixa, spritemovendo;

function setup() {
  createCanvas(800,400);
  spritefixa =  createSprite(400, 200, 50, 50);
  spritefixa.shapeColor = "white";
  spritemovendo =  createSprite(200, 200, 50, 50);
  spritemovendo.shapeColor = "white";
}

function draw() {
  background(155,0,255);  
  spritemovendo.x = mouseX;
  spritemovendo.y = mouseY;

  if(spritefixa.isTouching(spritemovendo)){
    spritefixa.shapeColor = "red";
    spritemovendo.shapeColor = "red";
  }
  else{
    spritefixa.shapeColor = "white";
    spritemovendo.shapeColor = "white";
  }
  drawSprites();
}
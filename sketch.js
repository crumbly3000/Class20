var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 80, 20, 100);
}

function draw() {
  background("black"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "purple";

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor = "white";
      movingRect.shapeColor = "white";
    }

    else{
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "purple";
    }

  drawSprites();
}
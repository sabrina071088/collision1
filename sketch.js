var fixedRect1,fixedRect2,fixedRect3, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(500, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(400, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching()){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
}
  
  drawSprites();
}
function isTouching(){
  if (movingRect.x - fixedRect1.x < fixedRect1.width/2 + movingRect.width/2
    && fixedRect1.x - movingRect.x < fixedRect1.width/2 + movingRect.width/2
    && movingRect.y - fixedRect1.y < fixedRect1.height/2 + movingRect.height/2
    && fixedRect1.y - movingRect.y < fixedRect1.height/2 + movingRect.height/2) {
 return true;
}
else {
  return false;
}
}
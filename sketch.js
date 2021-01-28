var fixedRect, movingRect, ab, bc, cd, de;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 3;
  movingRect.velocityY = 3.5;
  fixedRect.velocityY = 4;
  fixedRect.velocityX = 5;
ab = createSprite(500,500,100,20);
ab.shapeColor = "pink";
ab.velocityY = 4;
ab.velocityX = 5;
bc = createSprite(40,200,10,60);
bc.shapeColor = "brown";
bc.velocityY = 4;
bc.velocityX = 5;
cd = createSprite(100,10,40,50);
cd.shapeColor = "purple";
de = createSprite(420,360,80,75);
de.shapeColor = "blue";
}

function draw() {

  background("yellow");  
  ab.x = World.mouseX;
  ab.y = World.mouseY;
 
  if ( gj(ab, bc)){
    ab.shapeColor = "orange";
  bc.shapeColor = "red";
  }
  else {
 ab.shapeColor = "pink";
 bc.shapeColor = "brown";
     }
bounce(ab, bc);
  drawSprites();
}

function gj(obj1 , obj2){
  if (obj1.x -  obj2.x <  obj2.width/2 + obj1.width/2
      &&  obj2.x - obj1.x <  obj2.width/2 + obj1.width/2
      && obj1.y -  obj2.y <  obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y <  obj2.height/2 + obj1.height/2) {
 return true
 
  }
  else {
 
 return false
  }
}

function bounce(obj1 , obj2){
  if(obj1.y - obj2.y <=  obj2.height/2 + (obj1.height/2) && obj2.y - obj1.y <=  obj2.height/2 +(obj1.height/2)){
   obj2.velocityY = -1 * fixedRect.velocityY;
    obj1.velocityY = -1 * obj1.velocityY;
  }
  
  if(obj1.x - obj2.x <= obj2.width/2 + (obj1.width/2) && obj2.x - obj1.x <=  obj2.width/2 + obj1.width/2){
   obj2.velocityX = -1 * obj2.velocityX;
    obj1.velocityX = -1 * obj1.velocityX;
  }
}
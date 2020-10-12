var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 150, 180);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,260,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if (movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  //fixedRect.depth=0
  textSize(20);
  fill("white")
  
  drawSprites();
  //text(fixedRect.x + "," + fixedRect.y, fixedRect.x-30, fixedRect.y+35)
  //text(movingRect.x + "," + movingRect.y, movingRect.x-30, movingRect.y+25)
  text(fixedRect.x , fixedRect.x-30, fixedRect.y+35)
  text(movingRect.x , movingRect.x-30, movingRect.y+25)
  text(movingRect.x-fixedRect.x , fixedRect.x+30, fixedRect.y+55)
  stroke("blue")
  text(fixedRect.width/2 , fixedRect.x+25,fixedRect.y-10)
  line(fixedRect.x,fixedRect.y,fixedRect.x+fixedRect.width/2,fixedRect.y)
  stroke("blue")
  text("+"+ movingRect.width/2 , movingRect.x-80,movingRect.y-10)
  line(movingRect.x-movingRect.width/2,movingRect.y,movingRect.x,movingRect.y)

}

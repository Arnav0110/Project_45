var spaceShipImg, spaceShip;
var astroidImg, astroid, astroidGroup;
var backgroundImg, earth;
var laserImg, laser, laserGroup;

function preload() {
  spaceShipImg = loadImage("images/images.png");
  backgroundImg = loadImage("images/earth.png");
  laserImg = loadImage("images/laser.png");
}
function setup() {
  createCanvas(400,600);
  
  earth = createSprite(200, 550, 50, 50);
  earth.addImage(backgroundImg);
  earth.scale = 0.4
  
  spaceShip = createSprite(200, 400, 50, 50);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;
  
  astroidGroup= createGroup();
  laserGroup = createGroup();

}

function draw() {
  background(0,0,0);   
  if (keyWentDown("space")) {
    createLaser();
  }
  if (keyDown("right")) {
    spaceShip.x = spaceShip.x + 2 ; 
  }

  if (keyDown("left")) {
    spaceShip.x = spaceShip.x - 2 ; 
  }

  drawSprites();
}

function createLaser() {
  var laser= createSprite(200, 300, 60, 10);
  laser.addImage(laserImg);
  laser.x = 360;
  laser.x=spaceShip.x;
  laser.velocityY = -4;
  laser.lifetime = 100;
  laser.scale = 0.3;
  laserGroup.add(laser);
  return laser;
}

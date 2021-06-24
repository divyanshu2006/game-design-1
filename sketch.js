
var plane, planeImg;
var back, backImg;
var obstacle, obstacleImg, obstaclesGroup;
var bullet, bulletImg;

function preload(){
  planeImg = loadImage("fly_1.png")
  backImg = loadImage("backImg.jpg")
  obstacleImg = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png","obstacle5.png","obstacle6.png","obstacle7.png","obstacle8.png");
  bulletImg = loadAnimation("bullet1.png","bullet2.png","bullet3.png","bullet4.png","bullet5.png");
  planeDead = loadImage("dead.png")

}
function setup() {

  createCanvas(1000,500);

  back = createSprite(500,250);
  back.addImage("back",backImg);
  back.scale = 2
 
  plane = createSprite(120, 180, 50, 50);
  plane.addImage("plane",planeImg)
  plane.addImage("dead",planeDead)
  plane.scale = 0.25

  obstaclesGroup = new Group()

  bulletsGroup = new Group()
}

function draw() {
  background(0);
  back.velocityX = -2;
   if(back.x < 400){
      back.x = 500

    }

   spawnObstacles();

   if(keyDown("space")){
     bullet = createSprite(140,180)
     bullet.addAnimation("bullet",bulletImg);
     bullet.scale = 0.6;
     bullet.velocityX = 4;
     bulletsGroup.add(bullet);
   }

   if(obstaclesGroup.isTouching(plane)){
   plane.changeAnimation("dead",planeDead);

   }

   if (keyDown(UP_ARROW)){
    plane.y = plane.y-3;
   }

   if (keyDown(DOWN_ARROW)){
     plane.y = plane.y+3  
    }

    if (obstaclesGroup.isTouching(bulletsGroup)){
      obstaclesGroup.destroyEach()
    }
  
  drawSprites();
}

function spawnObstacles(){
       if(frameCount%100===0){
         obstacle = createSprite(1000,180);
         obstacle.velocityX = -3;
         obstacle.addAnimation("flyingBird", obstacleImg);
         obstacle.scale = 0.8
         obstacle.y = Math.round(random(70,250))
         obstaclesGroup.add(obstacle);
       }

}


var backgroundImg;
var balloonImg, balloonAnimation;
var balloonObstacle, birdObstacle;
var upObstacles, downObstacles;
var building1, building2, pole;

function preload(){

  backgroundImg = loadImage("./assets/bg.png");
  balloonAnimation = loadAnimation("./assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
  balloonObstacle = loadImage("./assets/obsTop1.png");
  birdObstacle = loadImage("./assets/obsTop2.png");

  building1 = loadImage("./assets/obsBottom1.png");
  building2 = loadImage("./assets/obsBottom3.png");
  pole = loadImage("./assets/obsBottom2.png");

}

function setup() {

    createCanvas(windowWidth - 25, windowHeight - 25);
    balloonImg = createSprite(372,716);
    balloonImg.addAnimation("balloonAnimation",balloonAnimation);
    balloonImg.scale = 1.2;
    balloonImg.frameDelay = 15;
}

function draw() {

    background("green")
    image(backgroundImg,0,0,windowWidth - 25,windowHeight - 25);
    //console.log(mouseX);
    //console.log(mouseY);

    if(keyDown("UP_ARROW")){
balloonImg.velocityY = - 5;
}

balloonImg.velocityY += 3;
    DownObstacles();
    UpObstacles();
    drawSprites();
}

function UpObstacles(){

    if(World.frameCount%60 === 0){
        upObstacles = createSprite(width, 50,50,50);
        upObstacles.velocityX = -25
        upObstacles.y = Math.round(random(1,height/2));
        upObstacles.lifetime = 60*4 

        var switchObstacle = Math.round(random(1,2));

        switch(switchObstacle){
            case 1: upObstacles.addImage(balloonObstacle);
            upObstacles.scale = 0.70;

            break;

            case 2: upObstacles.addImage(birdObstacle);
            upObstacles.scale = 0.45;

            break;

            default: break;
        }

        
    }
}

function DownObstacles(){

    if(World.frameCount%60 === 0){
        downObstacles = createSprite(width,height- 100,50,50);
        downObstacles.velocityX = -25
        downObstacles.lifetime = 60*4 

        var switchObstacle = Math.round(random(1,3));

        switch(switchObstacle){
            case 1: downObstacles.addImage(building1);
            downObstacles.scale = 0.70;
            downObstacles.y = height - 600

            break;

            case 2: downObstacles.addImage(building2);
            downObstacles.scale = 0.70;
            downObstacles.y = height - 670;

            break;

            case 3: downObstacles.addImage(pole);
            downObstacles.y = height - 250
            downObstacles.scale = 0.45;

            break;

            default: break;
        }

        
    }
}
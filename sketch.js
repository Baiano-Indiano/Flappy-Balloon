var backgroundImg;
var balloonImg, balloonAnimation;
function preload(){
  backgroundImg = loadImage("./assets/bg.png");
  balloonAnimation = loadAnimation("./assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

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


    drawSprites();
}
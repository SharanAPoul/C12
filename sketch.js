var ground ;
var trex ,trex_running;
var groundimg
var invisibleGround;
var cloudimg;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground2.png")
  cloudimg = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(200,100);
  trex.addAnimation("run",trex_running);
  trex.scale = 0.5;


//Creating Ground
  ground = createSprite(300,170,600,10);
  ground.addImage(groundimg);
  ground.velocityX = -5;
 // console.log(ground);
 // console.log(groundimg)

 invisibleGround = createSprite(300,175,600,10);
 invisibleGround.visible = false;
 // trex.debug = true;
}

function draw(){
  background("white")
  //Jumping
  if(keyDown("space")&&trex.isTouching(ground)){
    trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY+ 0.5;
 trex.collide(invisibleGround);

 //reseting ground
 if(ground.x <0){
   ground.x = 300;
 }

  
 //caling Cloud
 createCloud();
drawSprites();
}

function createCloud(){

  if(frameCount%100 ==0){// Checking Wether the frame Count is multiply Of control
    var cloud = createSprite(610,30,20,20);
    cloud.velocityX = -5;
    cloud.addImage(cloudimg);
    cloud.scale = 0.5;
    cloud.y = Math.round(random(150,170))
    cloud.depth = trex.depth
    trex.depth = trex.depth+1
  }
  
}

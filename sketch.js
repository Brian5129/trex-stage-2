var ground
var clouds
var cloudimage
var fakeground
var groundimage
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,180,20,50)
 trex.addAnimation("run",trex_running)
 trex.scale=0.5


 //creating the ground
ground=createSprite(200,180,400,5)
ground.addImage(groundimage)
//moving the ground
ground.velocityX=-2
//making the fake ground
fakeground=createSprite(200,187,400,5)
fakeground.visible=false
//Testing the random function
var r32=Math.round(random(3,8))

}

function draw(){
  background("steelblue")
  if(keyDown("space") && trex.collide(ground) ){
    trex.velocityY=-20
  }
  //making the ground infinite by scrolling it
  if(ground.x<0){
    ground.x=200
  }
  //Adding gravity to trex
  trex.velocityY=trex.velocityY+2
  //making trex stand on the ground
  trex.collide(fakeground)
  //spawning the clouds
  clouds()
drawSprites()
}
function clouds(){
  if (frameCount%50==0){
    cloud=createSprite(600,100,40,10)
    cloud.scale=0.7
    cloud.addImage(cloudimage)
  cloud.velocityX=-5
  cloud.y=Math.round(random(10,160))
  trex.depth=cloud.depth+1
  }
}
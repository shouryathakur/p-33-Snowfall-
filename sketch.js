const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var bg;
var snow1=[]
function preload(){
bg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  Engine.update(engine);
  background(bg); 
  if(frameCount%5===0){
snow=new Snow(random(0,800),30,30);
snow1.push(snow);
  }
  for(var j=0;j<snow1.length;j++)
  {
    snow1[j].display();
   
    
  }



  drawSprites();
}
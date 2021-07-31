
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var tree;
var boy;
function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground= createSprite(900,600,1760,10);
tree = createSprite(700,500,50,50);
boy = createSprite(200,500,10,10);
	//Create the Bodies Here.
	boy.addImage("boy")


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
}




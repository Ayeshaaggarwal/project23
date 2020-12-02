var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	log1=createSprite(400,height-35,120,15);
	log1.shapeColor=color("red");
	log2=createSprite(347,height-65,15,60);
	log2.shapeColor=color("red");
	log3=createSprite(452,height-65,15,60);
	log3.shapeColor=color("red");

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:0, isStatic:true});
	World.add(world,packageBody);
	log = Bodies.rectangle(400,height-48,120,15, {isStatic:true} );
	World.add(world,log);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	



	Engine.run(engine);
  
}


function draw() {
	
	  
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed();
  drawSprites();
  
}

function keyPressed() {
	
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
 Matter.Body.setStatic(packageBody,false);
 
  }

}



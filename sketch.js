var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground;
var bottom, left, right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	World.add(world, ground);

	bottom = createSprite(width/2,650,200,20,{isStatic: true});
	bottom.shapeColor = color("white");

	left = createSprite(300,610,20,100);
	left.shapeColor = color("white");

	right = createSprite(500,610,20,100);
	right.shapeColor = color("white");
	
	ball = createSprite(20,610,20,20);
	ball.shapeColor = color("green");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Create a Ground
	ground = new Ground(width/2, 650, width, 10 );
	World.add(world, ground);

	ball = new Paper(100,620,20);
    World.add(world, ball);

	box1 = new Box(620, 640, 160, 10);
	box2 = new Box(540, 615, 10, 60);
	box3 = new Box(700,615, 10,60);
	World.add(world, box1);
	World.add(world, box2);
	World.add(world, box3);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55})
	 }
   }
   




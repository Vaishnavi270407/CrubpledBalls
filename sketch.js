
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin1Img;

var ball;

function preload()
{
	dustbin1Img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbin1=createSprite(620, 530, 70,70);
	dustbin1.addImage(dustbin1Img)
	dustbin1.scale = 0.7

	//Create the Bodies Here.
	//Create a Ground
	ground = new Ground(width/2, 650, width, 10 );
	World.add(world, ground);

	ball = new Paper(100,620,70);
    World.add(world, ball);

	box1 = new Box(620, 640, 160, 10);
	box2 = new Box(540, 560, 10, 160);
	box3 = new Box(700,560, 10,160);
	World.add(world, box1);
	World.add(world, box2);
	World.add(world, box3);

	Engine.run(engine);
  
}

function draw() {
 // rectMode(CENTER);
  background(125);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-280})
	 }
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:0})
	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-20,y:0})
	}
	

   }
   





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	ground=new Ground(600,height,1200,20);
}


function draw() {
  rectMode(CENTER);
  background(-100);
 Engine.update(engine); 
drawSprites();
ground.display();
keyPressed();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85});

}
}


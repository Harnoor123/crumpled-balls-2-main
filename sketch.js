const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var D1,D2,D3,paper,ground;

function preload(){
}

function setup() 
{
	createCanvas(1100, 680);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(600,height,1200,20);
	D1= new Dustbin(950,655,200,15);
    D2=new Dustbin(850,580,12,140);
    D3=new Dustbin(1050,580,12,140);
    paper= new Paper (100,600,50);

  }

function draw() 
{
 background("lightblue");
 drawSprites();
 paper.display();
 ground.display();
 D1.display();
 D2.display();
 D3.display();
}

function keyPressed()
{

 if(keyCode === UP_ARROW) 
 {

 Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-500});

 }
}


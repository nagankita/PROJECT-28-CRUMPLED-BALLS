
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1=new Ground(600,780,1200,20)
papers1=new Paper(100,300,10)
papers2=new Paper(200,300,10)
papers3=new Papers(150,300,10)
papers4=new Papers(250,300,10)
dustbin1=new Dustbin(700,760,200,20)
dustbin2=new Dustbin(610,700,20,100)
dustbin3=new Dustbin(790,700,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 ground1.display();
 papers1.display();
 papers2.display();
 papers3.display()
 papers4.display()
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(papers1.body,papers1.body.position,{x:13,y:-13.5})
Matter.Body.applyForce(papers2.body,papers2.body.position,{x:12,y:-13})
Matter.Body.applyForce(papers3.body,papers3.body.position,{x:13,y:-14})
Matter.Body.applyForce(papers4.body,papers4.body.position,{x:11,y:-12})



	}
	
}


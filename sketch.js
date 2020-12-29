const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box2,box3,box4;


function setup(){

  createCanvas(1600,700);
  rectMode(CENTER);
  
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.rectangle(50,650,30,30,{restitution : .2, isStatic : false, density : 2});
  World.add(world,ball);

  ground = Bodies.rectangle(800,680,width,10,{isStatic : true});
  World.add(world,ground);

  //noStroke();
  box2 = new box(1480,625,20,100);
	box3 = new box(1280,625,20,100);
	box4 = new box(1380,665,180,20);

}

function draw(){
  background(0);

  Engine.update(engine);

  rect(ball.position.x,ball.position.y,30,30);

  rect(ground.position.x,ground.position.y,width,10);

  box2.display();
	box3.display();
	box4.display();


}

function keyPressed(){

  if (keyCode === RIGHT_ARROW){
   // Body.setVelocity(ball,{x: 2,y: 0});
    //Body.setStatic(ball,false);
    Body.applyForce(ball,ball.position,{x:60,y:-60});

    
  }

  if (keyCode === LEFT_ARROW){
    // Body.setVelocity(ball,{x: 2,y: 0});
     //Body.setStatic(ball,false);
     Body.applyForce(ball,ball.position,{x:-60,y:60});
 
     
   }

}
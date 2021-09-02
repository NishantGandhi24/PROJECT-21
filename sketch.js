const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;

var ball,ground;
var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,590,600,20);

  var ball_option={
   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2
}
ball = Bodies.circle(200,300,20,ball_option);
World.add(world,ball);

  
}

function draw() {
  background("white"); 

  rectMode(CENTER);
  ellipseMode(RADIUS);

  Engine.update(engine);

  ground.display();

  ellipse(ball.position.x,ball.position.y,20,20);

  
}
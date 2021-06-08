const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1;
var ball;
var rope;

function setup() {
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(600, 600, 1200, 20);
    box1   = new Box(900,100,30,30);
    ball   = new Ball(200,200,80,80);
    rope = new Rope(ball.body, { x: 500, y: 50 });
}

function draw(){
background("cyan");
Engine.update(engine);
ground.display();
box1.display();
ball.display();
rope.display();


    
}

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world;
var pooltable;
var ball1,ball2,ball3;
var stick;
var tlWall,trWall,blWall,brWall,lWall,rWall;
function preload() {
 pooltable = loadImage("assets/bg.png")
}

function setup() {
  createCanvas(1200, 600);
 engine = Engine.create();
 world = engine.world;
 world.gravity.y = 0
 ball1= new Ball(200,180)
 ball2 = new Ball(200,200)
 ball3= new Ball(200,220)
 tlWall = new Wall(200,200,400,20)
}
function draw() {
 background(pooltable)
 //image(pooltable,0,0,1200,600)
 stick = new Stick(mouseX,mouseY);
 Engine.update(engine)
  ball1.display();
  ball2.display();
  ball3.display();
  stick.display();
  tlWall.display();
 
}

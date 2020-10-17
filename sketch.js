
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var bgimage,mango;
var mango1;
function preload()
{
bgimage=loadImage("sprites/background.png");	
//mango=loadImage("sprites/mango.png")

}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new TREE(600,530,380,350);
ground=new Ground(600,700,1200,20);
boy=new Boy(100,630,150,250);
mango1=new Mango(500,450);
mango2=new Mango(650,400);
mango3=new Mango(600,500);
mango4=new Mango(700,450);
mango5=new Mango(750,450);
mango6=new Mango(610,450);
stone=new Stone(90,650,40,40);
shot = new Chain(stone.body,{x:300,y:600});
//mango1=createSprite(100,150,40,20);
//mango1.addImage("mango1",mango);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimage);
  tree.display();
  ground.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  shot.display();
  //detectCollision(stone,mango1);
  //detectCollision(stone,mango2);
  //detectCollision(stone,mango3);
  //detectCollision(stone,mango4);
  //detectCollision(stone,mango5);
  //detectCollision(stone,mango6);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
  shot.fly();
}

function keyPressed(){
  if(keyCode===32){
shot.attach(stone.body);
Matter.Body.setPosition(stone.body,{x:235,y:420})
  }
}
function detectCollision(lmango,lstone){
 //mangoBodyPosition=lmango.body.setPosition
//stoneBodyPosition=lstone.body.setPosition

//var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
//if(distance<=lmango.r+lstone.r){
//Matter.Body.setStatic(lmango.body,false);
}


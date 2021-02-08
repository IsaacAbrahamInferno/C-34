const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constriant=Matter.Constriant;

var Universe,Earth;
var floor1;
var box1,box2;
var ball1;
var chain1;

function setup(){
createCanvas(1000,500);
Universe=Engine.create();
Earth=Universe.world;

floor1 = new Floor(500,490,1000,10);
box1= new Box (250,100,50,50);
box2= new Box (250,100,50,50);
ball1= new ball (800,250,20)
chain1= new Chain (ball1.body,{x:800,y:250})

}

function draw (){
Engine.update(Universe);
background("black");



floor1.display();
box1.display();
box2.display();
ball1.display();
chain1.display();
}
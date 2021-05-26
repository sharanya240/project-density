const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;
var rubber;
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron= new Iron(300,350,80,50);
    rubber= new Rubber(250,120,70);
    stone= new Stone(300,120,60,60);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    rubber.display();
    iron.display();
    hammer.display();
    
   
    

    
 
}
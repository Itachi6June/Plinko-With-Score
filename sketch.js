const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinkos = [];
var divisions =[];
var circle;
var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create(world);
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground.display();
  textSize(18);
  text("Score : "+score,20,40);
  fill("white");

  textSize(12);
  text("You have 5 chances to increase your score",200,20);
  fill("white");
  
  textSize(23)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  if ( gameState ==="end") {
    
    gameOver_Sound.play();
    textSize(90);
    text("GameOver", 150, 300);
  }

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 75; i <=width; i=i+50) {
    plinkos.push(new Plinkos(i,75));
  }

  for (var i = 50; i <=width-10; i=i+50) {
    plinkos.push(new Plinkos(i,175));
  }

  for (var i = 75; i <=width; i=i+50) {
  plinkos.push(new Plinkos(j,275));
  }

  for (var i = 50; i <=width-10; i=i+50) {
    plinkos.push(new Plinkos(i,375));
  }
    
}

function draw() {
  background("black");
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
 
  if(circle!=null){
    circle.display();
    if (circle.body.position.y>760){
      if (circle.body.position.x < 300) { 
        score=score+500;    
        circle=null;
        if(count >= 5){
          gameState = "end";
        }
      }
      else if (circle.body.position.x < 600 && circle.body.position.x > 301 ){
        circle=null;
        score = score + 100;
        if(count >= 5){
          gameState = "end";
        }

      }
      else if (circle.body.position.x < 900 && circle.body.position.x > 601 ){
        circle=null;
        score = score + 200;
        if(count >= 5){
          gameState = "end";
        }
      }              
    }
  
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed()
{
  if(gameState==="start")
  {
    count + 1;
    circle=new Circle(mouseX, 10, 10, 10); 
  }   
}
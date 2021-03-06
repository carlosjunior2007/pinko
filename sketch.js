const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=85; k = k + 85) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=185; g = g + 185) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=280; g = g + 280) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=380; g = g + 380) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=480; g = g + 480) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=580; g = g + 580) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=680; g = g + 680) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 0; g <=790; g = g + 790) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }5
  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  
  //crea la cuarta fila de objetos plinko
  for (var j = 55; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }

  for (var j = 55; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,475));
  }
    
}
 


function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  
  //crea los objetos part??cula
  if(frameCount%100===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

console.log(frameCount);

  //muestra las part??culas 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
  }
  
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }


  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
}
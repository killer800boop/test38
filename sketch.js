const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 

var canvas, database, game, form, runner, playerIndex, allPlayers;
var p1,p2;
var gameState = 0;
var PlayerCount = 0;
var message = 0
var engine,world;

function setup(){
  canvas = createCanvas(800,600);
  database = firebase.database()
  engine = Engine.create()
  world = engine.world
  game = new Game()
  game.getState()
  game.start()
  //p1 = new Player(400,700,10,10)
  Engine.run(engine)
}

function draw(){
background("pink"); 
Engine.update(engine)
if (PlayerCount === 2) {
  gameState = 1  
}
if (gameState === 1) {
  game.play()  
  }
}

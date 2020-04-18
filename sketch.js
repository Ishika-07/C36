var canvas,backgroundImg;
var gameState=0;
var playerCount;
var database;
var Form, Player, Game;
var allPlayers;
var Distance =0;

function preload(){

}

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();
  Game = new game();
  Game.getState();
  Game.start();
  
  
}

function draw(){
    background("white");
   
    drawSprites();
}


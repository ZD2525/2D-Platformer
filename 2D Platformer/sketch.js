/*
Coursework 2.2 Game Project Submission
By Goh Zhong Da

I had a lot of fun creating this project with the help of the lecture videos guiding through the basics.

Extensions:
1. Add advanced graphics 
  I tried using the particle system to create a snow effect, where small white circles(representing snow) will fall from the sky randomly.

  The lecture video of the particle system really helped me in creating my own particles for this effect to work.

  I've also used an image taken from https://www.flaticon.com/free-icon/igloo_1604030, for my igloo at the end, to represent the home.

2. Add Sounds
	I sourced sounds and music online - all attributed in attached License Info.txt

  In my opinion, sounds helps to elevate the experience of the game, as they aid in indicating certain actions, such as falling, dying, picking up an item etc. They are vital in making the gameplay experience much better, therefore I found sounds that might be familiar, as they are from older games, such as mario.

  Initially, I had issues with implementing sounds, as even though I followed the p5js reference for loudSound, I didn't add the p5.sound.min.js into my folder, therefore the preload will just be stuck at loading when I ran the liveserver.
  

Having no knowledge of programming at the start of the module, I struggled with creating the game at first, but with the help of the lecture videos, and by just trial and error by experimenting with different codes and changing one thing at a time to see what it does, helped me understand the codes much much better. Through this, I have learnt a lot, such as the basics of p5js, the interaction between keypresses and movement, and even the refactoring of the codes.
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var treePos_y;
var canyons;
var collectables;

var lives;
var gameOver;
var game_score;
var flagpole;
var jumpSound;

var emitter;

let img;

// To Load the Sounds for Gameplay.
function preload() {
  soundFormats("mp3");
  jumpSound = loadSound("assets/jump.mp3");
  collectableSound = loadSound("assets/collect.mp3");
  falling = loadSound("assets/death.mp3");
}

function setup() {
  createCanvas(1024, 576);
  img = loadImage('assets/igloo.png');
  floorPos_y = (height * 3) / 4;
  lives = 3;
  gameOver = false;
  startGame();
}

function draw() {
  // Draw the sky.
  drawSky();

  // Draw the ground.
  drawGround();

  push();
  translate(scrollPos, 0);

  // Draw clouds.
  drawClouds();

  // Draw mountains.
  drawMountains();

  // Draw sun.
  drawSun();

  // Draw trees.
  drawTrees();

  // Draw canyons.
  for (const c of canyons) {
    drawCanyon(c);
    checkCanyon(c);
  }

  // Draw collectable items.
  for (const col of collectables) {
    if (!col.isFound) {
      drawCollectable(col);
      checkCollectable(col);
    }
  }

  // Draw snow.
  drawSnow();

  // Draw Flagpole.
  drawFlagpole();

  // Checking functions.
  checkFlagpole();
  checkPlayerDie();
  pop();

  // Draw game character.
  drawGameChar();

  // Draw the scoreboard and lives.
  fill(0);
  noStroke;
  textSize(32);
  text("Lives:  " + lives, 20, 30);
  text("Score: " + game_score, 20, 60);

  // End the game if the lives reach 0.
  if (lives < 1) {
    gameOver = true;
    background(100, 155, 255);
    fill(0);
    noStroke;
    textSize(70);
    text("Game Over", 325, 200);
    text("Final Score: " + game_score, 300, 300);
    text("Press Space To Restart", 125, 400);
    return;
  }

  // End the game if the flagpole is reached.
  if (flagpole.isReached) {
    fill(0);
    noStroke;
    textSize(70);
    text("You Made It Back Home!", 150, 200);
    text("Press Space To Play Again", 125, 300);
    return;
  }

  // Logic to make the game character move or the background scroll.
  if (isLeft) {
    if (gameChar_x > width * 0.2) {
      gameChar_x -= 5;
    } else {
      scrollPos += 5;
    }
  }

  if (isRight) {
    if (gameChar_x < width * 0.8) {
      gameChar_x += 5;
    } else {
      scrollPos -= 5; // negative for moving against the background
    }
  }

  // Logic to make the game character rise and fall.
  if (isFalling == true && gameChar_y < floorPos_y) {
    gameChar_y += 2;
  }

  if (gameChar_y == floorPos_y) {
    isFalling = false;
  }

  if (isPlummeting) {
    gameChar_y += 10;
  }

  // Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;
}

// Function to check if the flagpole is reached.
function checkFlagpole(){
  if(flagpole.isReached==false){
      var d = dist(gameChar_world_x,gameChar_y,
                   flagpole.x_pos,floorPos_y);
      if(d<10){
          flagpole.isReached = true;   
      }
  }
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon) {
  if (
    gameChar_world_x > t_canyon.x_pos &&
    gameChar_world_x < t_canyon.x_pos + t_canyon.width &&
    gameChar_y == floorPos_y
  ) {
    isPlummeting = true;
    falling.play();
  }
}


// Function to draw collectable objects.
function drawGameChar()
{
  if(isLeft){
      drawWalkingLeft();
  }
  else if(isRight){
      drawWalkingRight();
  }
  else if(isLeft && isFalling)
  {
      drawJumpingLeft();
  }
  else if(isRight && isFalling)
  {
      drawJumpingRight();
  }
  else if(isLeft)
  {
      drawWalkingLeft();
  }
  else if(isRight)
  {
      drawWalkingRight();
  }
  else if(isFalling || isPlummeting)
  {
      drawJumpingFacingForwards();
  }
  else
  {
      drawStandingFrontFacing();
  }
}

// Function to check if character has collected an item.
function checkCollectable(t_collectable) {
  if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos,
      t_collectable.y_pos
    ) < 20
  ) {
    t_collectable.isFound = true;
    collectableSound.play();
    game_score += 1;
  }
}

// Function to check if game is over.
function checkIsGameOver(){
  var gameOver = false;
  
  if(flagpole.isReached || lives<1){
      gameOver = true;   
  }
  return gameOver;
}

// Function to check if player died.
function checkPlayerDie(){
  if(gameChar_y>height){
    lives--;
    if(lives>0){
        startGame();
    }
  }
}

// Function to Start Game
function startGame() {
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  treePos_y = floorPos_y - 145;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Variable to store the real position of the gameChar in the game
  // world. Needed for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  // Initialise arrays of scenery objects.
  clouds=[
    {x_pos: -900, y_pos: 100, size: 50},
    {x_pos: -600, y_pos: 100, size: 40},
    {x_pos: -300, y_pos: 100, size: 70},
    {x_pos: 0, y_pos: 100, size: 50},
	  {x_pos: 300, y_pos: 100, size: 50},
  	{x_pos: 600, y_pos: 100, size: 30},
    {x_pos: 900, y_pos: 100, size: 40},
    {x_pos: 1200, y_pos: 100, size: 70},
    {x_pos: 1500, y_pos: 100, size: 40},
    {x_pos: 1800, y_pos: 100, size: 50},
	];

  // Mountains array
  mountains = [
    {x_pos: -1024, y_pos:floorPos_y, width: 400},
    {x_pos: -600, y_pos:floorPos_y, width: 200},
    {x_pos: -300, y_pos:floorPos_y, width: 300},
    {x_pos: 0, y_pos:floorPos_y, width: 350},
    {x_pos: 300, y_pos:floorPos_y, width: 200},
    {x_pos: 500, y_pos:floorPos_y, width: 500},
    {x_pos: 800, y_pos:floorPos_y, width: 350},
    {x_pos: 1124, y_pos:floorPos_y, width: 300},
    {x_pos: 1524, y_pos:floorPos_y, width: 400},
  ];

  // Trees_x position array
  trees_x = [-1024, -600, -300, 0, 50, 500, 1024, 1124, 1524, 1800];

  // Canyons array
  canyons = [
    {x_pos: -200, y_pos:floorPos_y, width: 100},
    {x_pos: 85, y_pos:floorPos_y, width: 100},
    {x_pos: 385, y_pos:floorPos_y, width: 80},
    {x_pos: 700, y_pos:floorPos_y, width: 90},
    {x_pos: 1300, y_pos:floorPos_y, width: 90},
  ];

  // Collectables array
  collectables = [
    {x_pos: -650, y_pos: floorPos_y, size: 40, isFound: false},
    {x_pos: -350, y_pos: floorPos_y-100, size: 30, isFound: false},
    {x_pos: 300, y_pos: floorPos_y, size: 40, isFound: false},
    {x_pos: 600, y_pos: floorPos_y-100, size: 30, isFound: false},
    {x_pos: 800, y_pos: floorPos_y, size: 40, isFound: false},
    {x_pos: 1000, y_pos: floorPos_y-75, size: 30, isFound: false},
    {x_pos: 1200, y_pos: floorPos_y-100, size: 30, isFound: false},
    {x_pos: 1500, y_pos: floorPos_y, size: 40, isFound: false},
    {x_pos: 1800, y_pos: floorPos_y-100, size: 30, isFound: false},
  ];

  game_score = 0;
  flagpole = { x_pos: 2300, isReached: false };

  // Creating the emitters for the snow particles
  emitter1 = new Emitter(400,-300, 0, 2, 12, color(255,255,255));
  emitter1.startEmitter(1000,50000);

  emitter2 = new Emitter(900,-300, 0, 2, 12, color(255,255,255));
  emitter2.startEmitter(1000,50000);

  emitter3 = new Emitter(1400,-300, 0, 2, 12, color(255,255,255));
  emitter3.startEmitter(1000,50000);

  emitter4 = new Emitter(1900,-300, 0, 2, 12, color(255,255,255));
  emitter4.startEmitter(1000,50000);

  emitter5 = new Emitter(-100,-300, 0, 2, 12, color(255,255,255));
  emitter5.startEmitter(1000,50000);

  emitter6 = new Emitter(-600,-300, 0, 2, 12, color(255,255,255));
  emitter6.startEmitter(1000,50000);
}

// Key Control Functions

// Character Movement
function keyPressed() {
  if (keyCode == 39 || key == "D") {
    isRight = true;
  }

  if (keyCode == 37 || key == "A") {
    isLeft = true;
  }

  if (gameChar_y === floorPos_y && (keyCode == 32 || key == "W")) {
    gameChar_y -= 100;
    jumpSound.play();
    isFalling = true;
  }


  // Reload the game if user presses 'space' when gameover or flagpole is reached.
  if (flagpole.isReached && keyCode == 32) {
    document.location.reload(true);
    return;
  }

  if (gameOver && keyCode == 32) {
    document.location.reload(true);
    return;
  }
}

// Character Movement
function keyReleased() {
  if (keyCode == 39 || key == "D") {
    isRight = false;
  }

  if (keyCode == 37 || key == "A") {
    isLeft = false;
  }

  if (keyCode == 32 || key == "W") {
    isFalling = true;
  }
}

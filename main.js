let backgroundImage = null;

function createBackground() {
 backgroundImage = new Graphic(width, height);
 backgroundImage.background(0);
 for (let i = 0; i < 1000; i++) {
   let x = random(width);
   let y = random(height);
   backgroundImage.fill(Color.White);
   backgroundImage.stroke(Color.White);
   backgroundImage.ellipse(x, y, 1, 1);
 }
}
function drawBackground() {
 image(backgroundImage, 0, 0);
}



function doUserControls() {
 if (keyIsDown(MOVE_FORWARD_KEY)) ship.accelerate();
 if (keyIsDown(MOVE_BACKWARDS_KEY)) ship.decelerate();
 if (keyIsDown(TURN_LEFT_KEY)) ship.turnLeft();
 if (keyIsDown(TURN_RIGHT_KEY)) ship.turnRight();
 //if (keyIsDown(FIRE_WEAPON_KEY)) ship.fireWeapon();
}
function keyPressed() {
 if (keyCode == FIRE_WEAPON_KEY) ship.fireWeapon();
}



function checkCollisions() {
 //REMOVE BULLETS AND ASTEROIDS THAT HAVE COLLIDED
 for (let b of bullets) {
  for (let a of asteroids) {
    if (a.contains(b.x, b.y)) {
      a.explode();
      b.hitAnAsteroid();
      ship.kills++;
    }
  } 
 }

 //CHECK IF SHIP HAS BEEN HIT BY ASTEROID
 for (let a of asteroids) {
   if (a.contains(ship.x, ship.y))
     ship.blowUp();
 }
}



function checkForWin() {
 if (asteroids.length == 0) return true;
}

function checkForLoss() {
 if (ship.isDestroyed()) return true;
}

function printGameOverMessage(msg) {
 push();
   stroke(Color.Green);
   noFill();
   textAlign(CENTER, CENTER);
   textSize(48);
   text(msg, width/2, height/2);
 pop();
}

function displayScoreBoard() {
 push();
   fill(Color.Red);
   noStroke();
   textAlign(LEFT, TOP);
   textSize(24);
   text("Kills: " + ship.kills, 0, 0);
 pop();
}


//***********************************************
//GAME STARTS HERE - ONE TIME RUN ***************
//***********************************************

function setup() {
  createCanvas(1280, 768);
  createBackground();
  createShip();
  createAsteroids();
}

//***********************************************
//GAME LOOP
//***********************************************

function draw() {

 //DRAW SCREEN
 drawBackground();
 displayScoreBoard();
 ship.draw();
 for (let a of asteroids)
    a.draw();
 for (let b of bullets)
    b.draw();

 //UPDATE POSITIONS
 ship.updatePosition();
 for (let a of asteroids)
    a.updatePosition();
 for (let b of bullets)
    b.updatePosition();

 //USER INPUT AND GAME LOGIC CHECKS
 doUserControls();
 checkCollisions();
 updateShipGuns();
 removeDeadBullets();
 removeDeadAsteroids();
 
 //IS GAME OVER?
 let gameOverMessage = "";
 if (checkForWin()) gameOverMessage = "YOU WIN";
 if (checkForLoss()) gameOverMessage = "GAME OVER";
 if (gameOverMessage != "") {
  drawBackground();
  printGameOverMessage(gameOverMessage);
  noLoop();
 }

}

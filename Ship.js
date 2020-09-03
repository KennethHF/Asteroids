let ship = null;

function createShip() {
  ship = new Ship();
}

function updateShipGuns() {
  if (ship.kills == 5) ship.setWeapon(DOUBLE_GUN);
  if (ship.kills == 10) ship.setWeapon(TRIPLE_GUN);
}


class Ship extends PhysicsObject {
 constructor() {
   super(width / 2, height / 2, SHIP_INITIAL_DIRECTION, SHIP_INITIAL_SPEED);
   
   this.destroyed = false;
   this.engines = false;
   this.brakes = false;
   this.kills = 0;
   
   this.shipImg = getShipArt();
   this.engineImg = getShipExhaustArt();
   this.brakesImg = getShipBrakesArt();

   this.weaponType = SINGLE_GUN;
 }

 isDestroyed() { return this.destroyed; }
 blowUp() { this.destroyed = true; }

 setWeapon(type) {
   this.weaponType = type;
 }

 draw() {
  push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(radians(this.angle + 90));
    image(this.shipImg, 0, 0);
    if (this.engines) image(this.engineImg, 0, 16);
    if (this.brakes) image(this.brakesImg, 0, -8);
  pop();
 }

 applyGravityDrag() {
  this.engines = false;
  this.brakes = false;
   if (this.speed > 0) 
     this.speed -= (SHIP_DRAG_SPEED >= this.speed ? this.speed : SHIP_DRAG_SPEED);
   if (this.speed < 0) 
     this.speed += (SHIP_DRAG_SPEED <= this.speed ? this.speed : SHIP_DRAG_SPEED);
 }

 updatePosition() {
   this.applyGravityDrag();
   super.updatePosition();
 }

 accelerate() {
   this.speed += SHIP_ACCELERATION;
   if (this.speed > SHIP_MAX_SPEED) this.speed = SHIP_MAX_SPEED;
   this.engines = true;
 }

 decelerate() {
   this.speed -= SHIP_ACCELERATION;
   if (this.speed < -SHIP_MAX_SPEED) this.speed = -SHIP_MAX_SPEED;
   this.brakes = true;
 }

 turnLeft() {
   this.angle -= SHIP_TURN_RATE;
   if (this.angle <= 0) this.angle += 360;
 }

 turnRight() {
   this.angle += SHIP_TURN_RATE;
   if (this.angle >= 360) this.angle -= 360;
 }
 
 fireWeapon() {
   switch (this.weaponType) {
      case (DOUBLE_GUN):
	fireRateDouble(this.x, this.y, this.angle);
	break;
      case (TRIPLE_GUN):
	fireRateTriple(this.x, this.y, this.angle);
	break;
      default:
	fireRateSingle(this.x, this.y, this.angle);
	break;
   }
 }
}

//******************************************
//**** UTILITY FUNCTIONS FOR SHIP CLASS ****
//******************************************

function getShipArt() {
 let sImage = new Graphic(32, 32);
   sImage.noFill();
   sImage.stroke(Color.White);
   sImage.beginShape();
      sImage.vertex(16, 4);
      sImage.vertex(8, 28);
      sImage.vertex(16, 22);
      sImage.vertex(24, 28);
   sImage.endShape(CLOSE);
 return sImage;
}

function getShipExhaustArt() {
 let eImage = new Graphic(8, 8);
   eImage.noFill();
   eImage.stroke(Color.White);
   eImage.beginShape();
      eImage.vertex(3, 0);
      eImage.vertex(1, 6);
      eImage.vertex(4, 4);
      eImage.vertex(7, 6);
      eImage.vertex(5, 0);
   eImage.endShape();
 return eImage;
}

function getShipBrakesArt() {
 let bImage = new Graphic(32, 32);
   bImage.noFill();
   bImage.stroke(Color.White);
   bImage.line(12, 12, 8, 24);
   bImage.line(19, 12, 23, 24);
 return bImage;
}

function fireRateSingle(x, y, a) {
  bullets.push(new Bullet(x, y, a));
}
function fireRateDouble(x, y, a) {
  bullets.push(new Bullet(x, y, a - 5));
  bullets.push(new Bullet(x, y, a + 5));
}
function fireRateTriple(x, y, a) {
  bullets.push(new Bullet(x, y, a - 10));
  bullets.push(new Bullet(x, y, a));
  bullets.push(new Bullet(x, y, a + 10));
}

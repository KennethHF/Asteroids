let bullets = [];

function removeDeadBullets() {
 for (let i = bullets.length-1; i >= 0; i--) {
   if (bullets[i].isOutOfFuel() || bullets[i].hasHitAsteroid()) bullets.splice(i,1);
 }
}

class Bullet extends PhysicsObject {
  constructor(x, y, angle) {
    super(x, y, angle, BULLET_SPEED);
    this.fuel = BULLET_MAX_FUEL;
    this.hitAsteroid = false;
  }

  isOutOfFuel() { return (this.fuel <= 0); }
  hasHitAsteroid() { return this.hitAsteroid; }

  hitAnAsteroid() { this.hitAsteroid = true; }


  draw() {
    let trailX = this.x - (4 * cos(this.angle * (PI/180)));
    let trailY = this.y - (4 * sin(this.angle * (PI/180)));
    push();
      noFill();
      stroke(BULLET_COLOR_RED, BULLET_COLOR_GREEN, BULLET_COLOR_BLUE);
      line(this.x, this.y, trailX, trailY);
    pop();
  }

  updatePosition() {
    this.fuel--;
    super.updatePosition();
  }
}

let asteroids = [];

function createAsteroids() {
 for (let i = 0; i < ASTEROID_COUNT; i++)
   asteroids.push(new Asteroid());
}


function removeDeadAsteroids() {
  for (let i = asteroids.length-1; i >= 0; i--) {
   if (asteroids[i].isDestroyed()) asteroids.splice(i,1);
 }
}


class Asteroid extends PhysicsObject {
 constructor() {
   let randomX =  floor(random(width));
   let randomY = floor(random(height));
   let randomDirection = floor(random(360));
   let randomSpeed = random(ASTEROID_MIN_SPEED, ASTEROID_MAX_SPEED);
   super(randomX, randomY, randomDirection, randomSpeed);

   this.radius = random(ASTEROID_MIN_RADIUS, ASTEROID_MAX_RADIUS);
   this.destroyed = false;
 }

 explode() { this.destroyed = true; }
 isDestroyed() { return this.destroyed; }

 contains(x, y) {
   let centerDist = dist(this.x, this.y, x, y);
   return (centerDist <= this.radius);
 }

 draw() {
  push();
   noFill();
   stroke(Color.White);
   ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  pop();
 }
}

class PhysicsObject {
  constructor(x, y, degreeDir, initSpeed) {
    this.x = x;
    this.y = y;
    this.angle = degreeDir;
    this.speed = initSpeed;
  }

  updatePosition() {
    if (this.x <= 0) this.x += width;
    if (this.x >= width) this.x -= width;
    if (this.y <= 0) this.y += height;
    if (this.y >= height) this.y -= height;

    this.x = this.x + (this.speed * cos(radians(this.angle)));
    this.y = this.y + (this.speed * sin(radians(this.angle)));

    
  }

  draw() {
    console.error("Override required by inheriting class.");
  }
}

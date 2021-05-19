class Meteors {
  constructor() {
    this.r = 250;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 4;
  }


  display() {
    //rect(this.x, this.y, this.r, this.r);
    image(meteorsImg, this.x, this.y, this.r, this.r);
  }

  move() {
    this.y += this.speed;
  }
}

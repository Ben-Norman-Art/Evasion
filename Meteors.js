class Meteors {
  constructor() {
    this.r = 300;
    this.x = random(w);
    this.y = 0 - this.r;
  }


  display() {
    //rect(this.x, this.y, this.r, this.r);
    image(meteorsImg, this.x, this.y, this.r, this.r);
  }

  move() {
    this.y++
  }
}

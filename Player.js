class Player {
  constructor() {
    this.r = 50;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    //rect(this.x, this.y, this.r, this.r)
    rect(this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':

        break;

      case 'right':
        if (this.x < w - this.r) {
          this.x -= this.speed;
        }
        break;
      case 'left':
        if (this.x > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;
    }

  }
}

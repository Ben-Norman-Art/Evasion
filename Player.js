class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    //rect(this.x, this.y, this.r, this.r)
    image(playerImg, this.x, this.y, this.r, this.r)
  }

  move() {

    switch (this.direction) {
      case 'still':

        break;
      case 'up':

        this.y -= speed;
        break;
      case 'down':
        this.y -= speed;
        break;
      case 'right':

        this.x -= speed;
        break;
      case 'left':

        this.x -= speed;
        break;
      default:
        break;
    }

  }
}

class Player {
  constructor() {
    this.r = 150;
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

        if (this.y > 0){
          this.y -= speed;
        }
        break;
      case 'down':

      if (this.y < h - this.r){
        this.y -= speed;
      }
        this.y -= speed;
        break;
      case 'right':
      if (this.x < w - this.r){
        this.y -= speed;
      }
        this.x -= speed;
        break;
      case 'left':
      if (this.x > 0){
        this.x -= this.speed;
      }
        break;
      default:
        break;
    }

  }
}

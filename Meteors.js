
class Meteors {
  constructor(){
    this.r = 250;
    this.x = random(w);
    this.y = 0 - this.r;
  }


  display(){
    //rect(this.x, this.y, this.r, this.r);
    rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y++
  }
}

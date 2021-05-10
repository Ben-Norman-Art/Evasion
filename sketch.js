'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;

function setup() {
  cnv = createCanvas(w, h);

  textFont('bahnschrift');

  player = new Player();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'You Win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }
}



function title() {
  background(15);
  textSize(75);
  fill(255);
  textAlign(CENTER);
  text('WELCOME', w/2, h/4);


  textSize(35);
  text('Click Anywhere To Begin', w/2, h/2);
}

function titleMouseClicked() {
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  //text('Click for points', w/2, h - 30);

  player.display();
}

function level1MouseClicked() {
  points++;

  if (points >= 10){
    state = 'You Win';
  }
}

function youWin(){
  background(255, 50, 80);
  textSize(75);
  stroke(255);
  text('YOU WIN', w/2, h/2);


  textSize(45);
  text('Click Anywhere To Restart', w/2, h * 3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}

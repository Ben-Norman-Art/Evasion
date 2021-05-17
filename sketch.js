'use strict'

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;



function setup() {
  cnv = createCanvas(w, h);

  textFont('monaco');

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
      cnv.mouseClicked(level1MousedClicked);
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
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w/2, h/5);


  textSize(30);
  text('Click anywhere to start', w/2, h/2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  text('Click for Points', w/2, h - 30);
}

function level1MousedClicked() {
  points++;
  console.log('canvas is clicked on level 1' + points);

  if (points >= 10){
    state = 'You Win';
  }
}

function youWin(){
  background(255, 50, 90);
  textSize(80);
  stroke(0);
  text('You Win', w/2, h/2);


  textSize(30);
  text('Click anywhere to restart', w/2, h * 3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}

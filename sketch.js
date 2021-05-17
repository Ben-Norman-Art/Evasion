'use strict'

let state = 'title';
let cnv;
let points = 0;



function setup() {
  cnv = createCanvas(600, 600);
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
      break
  }

}

function title() {
  background(100);
  textSize(80);
  stroke(0);
  text('MY GAME', 100, 100);


  textSize(30);
  text('Click anywhere to start', 100, 300);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  text('Click for Points', 0, height - 30);
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
  text('You Win', 100, 100);


  textSize(30);
  text('Click anywhere to restart', 100, 300);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}

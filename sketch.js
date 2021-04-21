'use strict';



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
      cnv.mouseClicked(titleMouseCLicked);
      break;
    case ' level 1':
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
  background(220);
  textSize(75);
  stroke(255);
  text('WELCOME', 100, 100);


  textSize(45);
  text('Click Anywhere To Begin', 100, 300);
}

function titleMouseClicked() {
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  text('Click for points', 0, height - 30);
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
  text('YOU WIN', 100, 100);


  textSize(45);
  text('Click Anywhere To Restart', 100, 300);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0; 
}

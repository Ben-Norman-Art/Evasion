'use strict'

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let meteors;



function setup() {
  cnv = createCanvas(w, h);

  textFont('back-to-1982');

  player = new Player();

  meteors = new Meteors();
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

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right'
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


  player.display();
  player.move();

  meteors.display();
  meteors.move();

  if (dist(player.x, player.y, meteors.x, meteors.y) <= (player.r + meteors.r) / 2){
    points++
    console.log(points);
  }

  text('Points: ' + points, w/4, h - 30);

}

function level1MousedClicked() {
  //points++;
  //console.log('canvas is clicked on level 1' + points);
  //
  //if (points >= 10){
  //  state = 'You Win';
  //}
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

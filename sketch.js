'use strict'

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let meteors = [];
let playerImg;
let meteorsImg;

function preload(){
  playerImg = loadImage('assets/First_Character_Sprite.png');
  meteorsImg = loadImage('assets/Meteor_Pixelated.png');
}



function setup() {
  cnv = createCanvas(w, h);

  textFont('bahnscrift');

  player = new Player();

  //meteors[0] = new Meteors();
  meteors.push(new Meteors());
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

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  }
}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w / 2, h / 5);


  textSize(30);
  text('Click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);

  if (random(1) <= 0.01){
    meteors.push(new Meteors());
  }

  player.display();
  player.move();


  for (let i = 0; i < meteors.length; i++) {
    meteors[i].display();
    meteors[i].move();
  }

  for (let i = meteors.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, meteors[i].x, meteors[i].y) <= (player.r + meteors[i].r) / 2) {
    points++
    console.log(points);
    meteors.splice(i, 1);
  }
}
  text(`Points: ${points}`, w / 4, h - 30);

}

function level1MousedClicked() {
  //points++;
  //console.log('canvas is clicked on level 1' + points);
  //
  //if (points >= 10){
  //  state = 'You Win';
  //}
}

function youWin() {
  background(255, 50, 90);
  textSize(80);
  stroke(0);
  text('You Win', w / 2, h / 2);


  textSize(30);
  text('Click anywhere to restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}

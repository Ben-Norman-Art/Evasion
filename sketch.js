'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];

function setup() {
  cnv = createCanvas(w, h);

  textFont('bahnschrift');

  player = new Player();

  //coins[0] = new Coins();
  coins.push(new Coin());
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

function keyPressed() {
  if (key == LEFT_ARROW) {
    player.direction = 'left'
  } else if (key == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (key == UP_ARROW) {
    player.direction = 'up'
  } else if (key == DOWN_ARROW) {
    player.direction = 'down'
  }
}


function title() {
  background(15);
  textSize(75);
  fill(255);
  textAlign(CENTER);
  text('WELCOME', w / 2, h / 4);


  textSize(35);
  text('Click Anywhere To Begin', w / 2, h / 2);
}

function titleMouseClicked() {
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  //text('Click for points', w/2, h - 30);
  if (random(1) <= 0.01){
    coins.push(new Coin());
  }

  player.display();
  player.move();


  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  for (let i = coins.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, coins.x, coins.y) <= (player.r + player.r) / 2) {
    points++;
    console.log(points);
  }
}

  text(`points: ${points}`
    w / 4, h - 30);

}

function level1MouseClicked() {
  points++;

  if (points >= 10) {
    state = 'You Win';
  }
}

function youWin() {
  background(255, 50, 80);
  textSize(75);
  stroke(255);
  text('YOU WIN', w / 2, h / 2);


  textSize(45);
  text('Click Anywhere To Restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}

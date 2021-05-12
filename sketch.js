'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 750;
let h = 750;
let player;
let coins = [];
let playerImg;
let coinImg;
let forestImg;
let mountainImg;
let cityImg

function preload() {
  playerImg = loadImage('assets/First_Character_Sprite.png');
  coinImg = loadImage('assets/Meteor_Pixelated.png');
  forestImg = loadImage('assets/Wilderness_Background.png');
  mountainImg = loadImage('assets/Mountain_Background.png');
  cityImg = loadImage('assets/City_Background.png')

}

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
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  }
}


function title() {
  background(15);
  textSize(75);
  fill(255);
  textFont(joystix)
  textAlign(CENTER);
  text('WELCOME', w / 2, h / 4);


  textSize(35);
  text('Click Anywhere To Begin', w / 2, h / 2);
}

function titleMouseClicked() {
  state = 'level 1'
}

function level1() {
  image(cityImg);
  //text('Click for points', w/2, h - 30);
  if (random(1) <= 0.01) {
    coins.push(new Coin());
  }

  player.display();
  player.move();

  //using for loop
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  // using forEach loop
  //coins.forEach(function(coin){
  //  coins.display();
  //  coins.move();
  //})

  //using for of loop
  //for (let coin of coins){
  //  coins.display();
  //  coins.move();
}

for (let i = coins.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, coins.x, coins.y) <= (player.r + player.r) / 2) {
    points++;
    console.log(points);
    coins.splice(i, 1);
  } else if (coins[i].y > h) {
    coins.splice(i, 1);
  }



text(`points: ${points}`, w / 4, h - 30);

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

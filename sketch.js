'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 750;
let h = 750;
let player;
let meteors = [];
let playerImg;
let meteorsImg;
let arraybackground = [];
let imageCounter = 0;

function preload() {

  player = loadImage('assets/First_Character_Sprite.png');
  meteors = loadImage('assets/Meteor_Pixelated.png');

}


function setup() {
  cnv = createCanvas(w, h);

  textFont('bahnschrift');

  player = new Player();

  //coins[0] = new Coins();
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
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'You Win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

  image(arraybackground[imageCounter], w, h);
    if (imageCounter < arraybackground.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  }
}

function keyReleased(){
  player.direction = 'still';
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
  background(arraybackground[i]);
  //text('Click for points', w/2, h - 30);
  if (random(1) <= 0.01) {
    meteors.push(new Meteors());
  }

  player.display();
  player.move();

  //using for loop
  for (let i = 0; i < meteors.length; i++) {
    meteors[i].display();
    meteors[i].move();
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

for (let i = meteors.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, meteors.x, meteors.y) <= (player.r + player.r) / 2) {
    points++;
    console.log(points);
    meteors.splice(i, 1);
  } else if (meteors[i].y > h) {
    meteors.splice(i, 1);
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
}

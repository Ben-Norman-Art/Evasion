'use strict'

let state = 'title';
let cnv;
let points = 0;
let w = 750;
let h = 750;
let player;
let meteors = [];
let playerImg;
let meteorsImg;
let mountainImg;
let bgImg = [];
let imgNum = 0;
let pressStart;


function preload() {
  playerImg = loadImage('assets/First_Character_Sprite.png');
  meteorsImg = loadImage('assets/Meteor_Pixel.gif');
  bgImg[0] = loadImage('assets/Background_1.png');
  bgImg[1] = loadImage('assets/Background_0.png');
  bgImg[2] = loadImage('assets/Background_2.png');

  pressStart = loadFont('assets/ka1.ttf');
}

function setup() {
  cnv = createCanvas(w, h);
  frameRate(300);

  imageMode(CENTER);

  textFont(pressStart);

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

function keyReleased() {

  let numKeyPressed = 0;

  if (keyIsDown(LEFT_ARROW)){
    numKeyPressed++;
  }
  if (keyIsDown(RIGHT_ARROW)){
    numKeyPressed++;
  }

  console.log(numKeyPressed);


  if (numKeyPressed == 0){
  player.direction = 'still';
}
}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Evasion', w / 2, h / 5);


  textAlign(CENTER);
  textSize(30);
  text('Use the Right and Left Keys', w / 2, h / 3.5);
  text('to Evade the objects ', w / 2, h / 3);


  textSize(30);
  text('Click anywhere to start', w/2, h - 30);
}

function titleMouseClicked() {
  state = 'level 1';
  imgNum = int(random(bgImg.length));
}

function level1() {
  background(50, 150, 200);
  image(bgImg[imgNum], w/2, h/2);

  if (random(1) <= 0.04) {
    meteors.push(new Meteors());
  }

  player.display();
  player.move();


  for (let i = 0; i < meteors.length; i++) {
    meteors[i].display();
    meteors[i].move();
  }

  for (let i = meteors.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, meteors[i].x, meteors[i].y) <= (player.r + meteors[i].r) / 2) {
      points++;
      console.log(points);
      meteors.splice(i, 1);
    } else if (meteors[i].y > h) {
      meteors.splice(i, 1);
    }
  }
  fill(225, 0, 0);
  text(`Points: ${points}`, w / 7, h/8);

  if (points >= 10){
    state = 'You Win';
  }

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

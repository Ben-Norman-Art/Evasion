'use strict'

let state = 'title';



function setup() {
  createCanvas(750, 750);
}

function draw() {

  if (state === 'title') {
    title();
  } else if (state === 'level 1') {
    level1();
  }
}

function title() {
  background(100);
  textSize(80);
  stroke(0);
  text('MY GAME', 100, 100);
}

function level1(){
  background(50, 150, 200);
}

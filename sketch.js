'use strict'

let state = 'title';
let cnv;



function setup() {
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(canvasClicked);
}

function draw() {

  if (state === 'title') {
    title();
  } else if (state === 'level 1') {
    level1();
  }
}

function mousePressed(){
  state = 'level 1';
}

function canvasClicked(){

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

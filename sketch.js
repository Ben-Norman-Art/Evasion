'use strict'

let state = 'title';
let cnv;



function setup() {
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(function(){

  });
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

function title() {
  background(100);
  textSize(80);
  stroke(0);
  text('MY GAME', 100, 100);


  textSize(30);
  text('Click anywhere to start', 100, 300);
}

function level1(){
  background(50, 150, 200);
}

'use strict'

let state = 'title';
let cnv;



function setup() {
  cnv = createCanvas(600, 600);
}

function draw() {

  if (state === 'title') {
    title();
    cnv.mouseClicked(function(){
      console.log('canvas is clicked');
      state = 'level 1'
    });

  } else if (state === 'level 1') {
    level1();
    cnv.mouseClicked(function(){
      console.log('canvas is clicked');
    });
  }
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

'use strict'

let state = 'title';



function setup(){
  createCanvas(750, 750);
}

function draw(){

  if (state === 'title'){
  title();
  }
}

function title(){
  background(100);
  textSize(80);
  stroke(0);
  text('MY GAME', 100, 100);
}

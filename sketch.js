'use strict';



let state = 'title';

function setup(){
  createCanvas(600, 600);

}

function draw(){

  if (state === 'title'){
    title();
  } else if (state === 'level 1'){
    level1();
  }
}

function mousePressed(){
  state = 'level 1';
}

function title(){
  background(220);
  textSize(75);
  stroke(255);
  text('WELCOME', 100, 100);
}

function level1(){
  background(50, 150, 200);
}

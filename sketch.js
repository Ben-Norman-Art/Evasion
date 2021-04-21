'use strict';



let state = 'title';

function setup(){
  createCanvas(600, 600);

}

function draw(){

  if (state === 'title'){
    title();
  }
}

function title(){
  background(220);
  textSize(75);
  stroke(255);
  text('WELCOME TO MY GAME', 100, 100);
}

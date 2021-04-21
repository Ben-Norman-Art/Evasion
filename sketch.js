'use strict';



let state = 'title';
let cnv;

function setup() {


}

function draw() {

  switch (state){
  case 'title':
    title();
    cnv.mouseClicked(titleMouseCLicked);
    break;
  case ' level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
break;
  default:
    break;
  }
}



function title() {
  background(220);
  textSize(75);
  stroke(255);
  text('WELCOME', 100, 100);


  textSize(45);
  text('Click Anywhere To Begin', 100, 300);
}

function titleMouseClicked(){
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
}

function level1MouseClicked(){

}

let xpos, ypos; // Starting position of shape

let xpos1, ypos1;

let xpos2, ypos2;

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let fontsize = 25;

function setup() {
  createCanvas(720, 720);
  noStroke();
  frameRate(30);
  // Set the starting position of the shape
  xpos = width / 3;
  ypos = height / 2;
  xpos1 = width / 2.3;
  ypos1 = height / 2;
  xpos2 = width /1.9;
  ypos2 =  height /2;
  textSize(fontsize);
}

function draw() {
  background(0);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  
  xpos1 = xpos1 + xspeed * xdirection;
  ypos1 = ypos + yspeed *  ydirection;

  xpos2 = xpos2 + xspeed * xdirection;
  ypos2 = ypos + yspeed * ydirection;
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos2 > width - fontsize * 3|| xpos < fontsize-5) {
    xdirection *= -1;
  }
  if (ypos > height - fontsize || ypos < fontsize ) {
    ydirection *= -1;
  }

  // Draw the shape
  // drawWords(xpos, ypos);
  fill('#BB8FCE');
  text('wash', xpos, ypos);
  fill('#85C1E9 ');
  text('your', xpos1, ypos1);
  fill('#76D7C4');
  text('hands', xpos2, ypos2);
}

// function drawWords(x, y) {
//   fill(0);
//   text('wash', x, y);

  // fill(65);
  // text('your', x-10, y-10);

  // fill(190);
  // text('hands', x-15, y-15);
// }
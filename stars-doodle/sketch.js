let fontsize = 12;
let lx = 106.5;
let ly = 60;
let l1x = 8.875;
let l1y = 2.5;
let l2x = 11.09;
let l2y = 1.25;
let l3x = 6.66;
let l3y = -2.5;
let l4x = -2.22;
let l4y = 11.25;
let l5x = -12.70;
let l5y = 6.70;
let l6x = -14.99;
let l6y = -9.70;
let l7x = -6.45;
let l7y = -16.36;

function setup() {
  createCanvas(710,400);
}

function draw() {
  background(10);
  fill(255);

  push();
  translate(width * 0.15, height * 0.15);
  rotate(frameCount / 300.0);
  stroke(255);
  star(0, 0, 3, 9, 5);
  pop();

  push();
  translate(width * 0.35, height * 0.25);
  rotate(frameCount / -170.0);
  stroke(255);
  star(0, 0, 2.5, 7.5, 5);
  pop();

  push();
  translate(width * 0.60, height * 0.30);
  rotate(frameCount / 200.0);
  stroke(255);
  star(0, 0, 5, 15, 5);
  pop();

  push();
  translate(width * 0.75, height * 0.20);
  rotate(frameCount / -150.0);
  stroke(255);
  star(0, 0, 4, 12, 5);
  pop();

  push();
  translate(width * 0.85, height * 0.45);
  rotate(frameCount/300.0);
  stroke(255);
  fill(15);
  star(0, 0, 2, 6, 7);
  pop();

  push();
  translate(width * 0.15, height * 0.75);
  rotate(frameCount/300.0);
  stroke(255);
  fill(15);
  star(0, 0, 2, 6, 7);
  pop();

  push();
  translate(width * 0.50, height * 0.10);
  rotate(frameCount/-300.0);
  stroke(255);
  fill(15);
  star(0, 0, 2, 6, 7);
  pop();

  push();
  translate(width * 0.10, height * 0.35);
  rotate(frameCount/300.0);
  stroke(255);
  fill(15);
  star(0, 0, 1, 3, 7);
  pop();

  push();
  translate(width * 0.90, height * 0.85);
  rotate(frameCount/300.0);
  stroke(255);
  fill(15);
  star(0, 0, 1, 3, 7);
  pop();

  push();
  translate(width * 0.25, height * 0.60);
  rotate(frameCount / 250.0);
  stroke(255);
  star(0, 0, 4, 12, 5);
  pop();

  push();
  translate(width * 0.50, height * 0.85);
  rotate(frameCount / 200.0);
  stroke(255);
  star(0, 0, 5, 15, 5);
  pop();

  push();
  translate(width * 0.70, height * 0.65);
  rotate(frameCount / -100.0);
  stroke(255);
  star(0, 0, 2.5, 7.5, 5);
  pop();

  push();
  stroke(0);
  textAlign(CENTER);
  textFont("Times New Roman");
  text("we are made of star-stuff", width * 0.50, height * 0.5);
  pop();

 push(); 
 stroke(255);
 strokeWeight(3);
  if ((lx >= 106 && lx <= 107 && ly >= 59 && ly <= 60) || 
    (lx >= 115 && lx < 248.5 && ly >= 60 && ly < 90) ||
    (lx >= 213 && lx <= 214 && ly >= 90 && ly <= 91) ||
    (lx >= 221 && lx <= 222 && ly >= 92 && ly <= 93) ||
    (lx >= 230 && lx <= 231 && ly >= 94 && ly <= 96) ||
    (lx >= 239 && lx <= 240 && ly >= 97 && ly <= 98) ){
    line(lx, ly, lx + l1x, ly + l1y);
    lx += l1x;
    ly += l1y;
  }
  pop();

  push();
  stroke(255);
  strokeWeight(3);
  if (lx >= 248.5 && lx < 426 && ly >= 99 && ly <= 120) {
      line(lx, ly, lx + l2x, ly + l2y);
      lx += l2x;
      ly += l2y;
  }
  pop(); 

  push();
  stroke(255);
  strokeWeight(3);
  if ((lx >= 426 && lx < 498 && ly <= 125 && ly >= 98) || 
   (lx <= 504 && lx >= 503 && ly <= 97 && ly >= 95) || 
   (lx > 510 && lx < 511 && ly <= 94 && ly >= 93) || 
   (lx >= 516 && ly <= 517 && ly >= 91 && ly <= 92) || 
   (lx >= 523 && ly <= 524 && ly >= 88 && ly <= 89) 
    ) {
    line(lx, ly, lx + l3x, ly + l3y);
    lx += l3x;
    ly += l3y;
  }
  pop();

  push();
  stroke(255);
  strokeWeight(3);
  if (lx < 523 && lx > 496 && ly >= 121 && ly <=260 || 
    (lx >= 530 && lx <= 531 && ly >= 86 && ly <= 87) ||
    (lx >= 528 && lx <= 530 && ly >= 97 && ly <= 98) ||
    (lx >= 525 && lx <= 526 && ly >= 108 && ly <= 109) ||
    (lx >= 523 && lx <= 524 && ly >= 119 && ly <= 121)) {
    line(lx, ly, lx + l4x, ly + l4y);
    lx += l4x;
    ly += l4y;
  }
  pop();

  push();
  stroke(255);
  strokeWeight(3);
  if (lx <= 496 && lx > 355 && ly >= 255 && ly <= 340) {
      line(lx, ly, lx + l5x, ly + l5y);
      lx += l5x;
      ly += l5y;
  }
  pop(); 

  push();
  stroke(255);
  strokeWeight(3);
  if (lx <= 343 && lx > 177 && ly >= 240 && ly <= 347) {
      line(lx, ly, lx + l6x, ly + l6y);
      lx += l6x;
      ly += l6y;
  }
  pop();

  push();
  stroke(255);
  strokeWeight(3);
  if (lx <= 178 && lx > 106 && ly > 100 && ly <= 240 || 
    (lx >= 119 && lx <= 120 && ly >= 92 && ly <= 93) ||
    (lx >= 112 && lx <= 113 && ly >= 76 && ly <= 77)) {
      line(lx, ly, lx + l7x, ly + l7y);
      lx += l7x;
      ly += l7y;
      if(lx >= 106 && lx <= 107 && ly >= 59 && ly <= 60) {
        lx = 106.5;
        ly = 60;
      }
  }
  pop();
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}



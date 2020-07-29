let xspacing = 25; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 200.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let fontsize = 25;
let words = ["wash", "your", "hands"];

function setup() {
  createCanvas(710, 710);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  textSize(fontsize);
}

function draw() {
  background(0);
  calcWave();
  renderWave();
  renderWave2();
  textAlign(LEFT);
}

function calcWave() {
  theta += 0.02;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x-= dx;
  }
}

function renderWave() {
  noStroke();
  fill('#66b2ff');
  for (let x = 0; x < yvalues.length; x++) {
      text(words[x%3],x * xspacing, height / 2 + yvalues[x]);
    }
}

function renderWave2() {
  noStroke();
  fill('#FF5733');
  for (let x = 0; x < yvalues.length; x++) {
      text(words[x%3],x * xspacing-3, height / 2 + yvalues[x]+3);
    }
}

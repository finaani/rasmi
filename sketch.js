let osc, fft;
let song;

function setup() {
  createCanvas(800, 800);


  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.1);

  fft = new p5.FFT();
  osc.start();
}

let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();


function draw() {
  //background (random(255),random(255),random(255));
  background (255,97,121);




  let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -2, 2, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  let freq = map(mouseX, 0, width, -50, 400);
  osc.freq(freq);

  let amp = map(mouseY, 0, height, 4, 0.5);
  osc.amp(amp);
}

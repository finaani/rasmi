let grade = [];
let value = 0;


function setup() {
  createCanvas(720, 360);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    grade[i] = abs(cos(amount));
  }
  background(255)

  //noLoop();
  noStroke();
  fill(0);

fill(value);
}

function draw() {

  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*80, x, height);
  }
}

   //line(mouseX, 0, mouseX, 360);


  let y1 = 0;
  let y2 = height / 3;
  let y3 = width / 3;
  for (let i = 0; i < width; i += 3) {
   // stroke(grade[i] * 51, 204, 255);
    //stroke(grade[i] * 206, 171, 251);
    stroke(grade[i] * 250, 255, 153 + mouseX, mouseY);
    line(i, y1, i, y2);
  }


  y1 = y2;
  y2 = y1 + y1;
  for (let i = 0; i < width; i += 3) {
    stroke(grade[i] * 206, 171, 251 - mouseX, mouseY);
    line(i, y1, i, y2);
  }


  y1 = y2;
  y2 = height;
  for (let i = 0; i < width; i += 3) {
    stroke(255 - grade[i] * 255, 153, 204 - mouseX, mouseY);
    line(i, y1, i, y2);

  }


  y1 = y2;
  y3 = width ;
  for (let i = 0; i < width; i += 3) {
  stroke(grade[i] * 255, 89, 126 -  mouseX, mouseY);
  line(i, y1, i, y2);

  }

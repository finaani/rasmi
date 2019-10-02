function setup() {
  createCanvas(600, 600);
  background(193, 176, 255);

  translate(-width/2, -height/2);
    noStroke();

  strokeWeight(5)
}

function draw() {

  if (mouseIsPressed == true){
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - mouseX, height- pmouseY);
    //line(mouseX, mouseY, mouseX, pmouseY);

  }

}

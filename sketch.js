function setup() {
  createCanvas(600, 600);
  background(193, 176, 255);

  strokeWeight(5)
}

function draw() {

  if (mouseIsPressed){
    stroke(map(mouseX, 0, 400, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height- pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

function keyTyped(){

if (key === 's'){

//save this image
saveCanvas('fileName', 'png')

}

return false;

}

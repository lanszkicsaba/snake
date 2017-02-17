//Készítette: Lanszki Csaba 
//Minden jogot fentartva @ 2017

var s;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}


function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === 87) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW || keyCode === 65) {
    s.dir(-1, 0);
  }
}
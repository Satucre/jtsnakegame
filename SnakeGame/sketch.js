// Sprites : Christel Paquette
// Code : Samuel Paquette
// Snake Game

var snake;
var scl = 40;
var backgroundimage;
var snakebg;
var foodbg;
var food;
var micro;
var directionsnake;

function setup() {
  backgroundimage = loadImage("Sprites/background.png");
  snakebg = loadImage("Sprites/snakebg.png");
  foodbg = loadImage("Sprites/foodbg.png");
  createCanvas(1280, 720);
  micro = new p5.AudioIn()
  micro.start();
  snake = new Snake();
  frameRate(8);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  snake.total++;
}

function draw() {
  
  background(backgroundimage);

  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();

 image(foodbg, food.x, food.y);
}



function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, (this.yspeed * -1));
    directionsnake = 1;
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, (this.yspeed));
    directionsnake = 2;
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir((this.xspeed), 0);
    directionsnake = 3;
  } else if (keyCode === LEFT_ARROW) {
    snake.dir((this.yspeed * -1), 0);
    directionsnake = 4;
  }
}

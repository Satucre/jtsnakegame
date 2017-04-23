// Sprites : Christel Paquette
// Code : Samuel Paquette
// Snake Game

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('Debut de snake');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    if (directionsnake === 1) 
    {
      this.yspeed = ceil((micro.getLevel() * -1) * 5) - 1;
    }
    else if (directionsnake === 2) 
    {
      this.yspeed = floor(micro.getLevel() * 5) + 1;
    } 
    else if (directionsnake === 3) 
    {
      this.xspeed = floor(micro.getLevel() * 5) + 1;
    } 
    else if (directionsnake === 4) 
    {
      this.xspeed = ceil((micro.getLevel() * -1) * 5) - 1;
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    for (var i = 0; i < this.tail.length; i++) {
      image(foodbg, this.tail[i].x, this.tail[i].y);
    }
    
    image(snakebg, this.x, this.y);
  }
}

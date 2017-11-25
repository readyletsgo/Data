
var range_s = 2;
var ax_s = [];
var ay_s = [];
var range_m = 6;
var ax_m = [];
var ay_m = [];
var range_h = 12;
var ax_h = [];
var ay_h = [];


function setup() {
  createCanvas(400, 400);
  for ( var i = 0; i < 2000; i++ ) {
    ax_s[i] = width / 2;
    ay_s[i] = height / 2;
    ax_m[i] = width / 2;
    ay_m[i] = height / 2;
    ax_h[i] = width / 2;
    ay_h[i] = height / 2;
  }
  frameRate(15);
}

function draw() {
  

  var date = new Date(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  ms = date.getMilliseconds();

  if (hour<7 || hour> 20) {background(204);}
  else {background(51);}

  // Shift all elements 1 place to the left
  for ( var i = 1; i < seconds; i++ ) {
    ax_s[i - 1] = ax_s[i];
    ay_s[i - 1] = ay_s[i];
  }
  for ( var i = 1; i < minutes; i++ ) {
    ax_m[i - 1] = ax_m[i];
    ay_m[i - 1] = ay_m[i];
  }
  for ( var i = 1; i < hours; i++ ) {
    ax_h[i - 1] = ax_h[i];
    ay_h[i - 1] = ay_h[i];
  }

  // Put a new value at the end of the array
  ax_s[seconds - 1] += random(-range_s, range_s);
  ay_s[seconds - 1] += random(-range_s, range_s);
  ax_m[minutes - 1] += random(-range_m, range_m);
  ay_m[minutes - 1] += random(-range_m, range_m);
  ax_h[hours - 1] += random(-range_h, range_h);
  ay_h[hours - 1] += random(-range_h, range_h);

  // Constrain all points to the screen
  ax_s[seconds - 1] = constrain(ax_s[seconds - 1], 0, width);
  ay_s[seconds - 1] = constrain(ay_s[seconds - 1], 0, height);
  ax_m[minutes - 1] = constrain(ax_m[minutes - 1], 0, width);
  ay_m[minutes - 1] = constrain(ay_m[minutes - 1], 0, height);
  ax_h[hours - 1] = constrain(ax_h[hours - 1], 0, width);
  ay_h[hours - 1] = constrain(ay_h[hours - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < seconds; j++ ) {
    var val = j / seconds * 204.0 + 51;
    stroke(color(255,0,0,val));
    line(ax_s[j - 1], ay_s[j - 1], ax_s[j], ay_s[j]);
  }
  for ( var j = 1; j < minutes; j++ ) {
    var val = j / minutes * 204.0 + 51;
    stroke(color(25,255,0,val));
    line(ax_m[j - 1], ay_m[j - 1], ax_m[j], ay_m[j]);
  }
  for ( var j = 1; j < hours; j++ ) {
    var val = j / hours * 204.0 + 51;
    stroke(color(0,90,255, val));
    line(ax_h[j - 1], ay_h[j - 1], ax_h[j], ay_h[j]);
  }
}
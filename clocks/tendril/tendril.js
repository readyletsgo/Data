var numSegments = 15,
  x = [],
  y = [],
  angle = [],
  segLength = 26,
  targetX, targetY;

var numSegments_min = 16,
  x_min = [],
  y_min = [],
  angle_min = [],
  segLength_min = 26,
  targetX_min, targetY_min;

var numSegments_hour = 17,
  x_hour = [],
  y_hour = [],
  angle_hour = [],
  segLength_hour = 26,
  targetX_hour, targetY_hour;

for (var i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

for (var i = 0; i < numSegments_min; i++) {
  x_min[i] = 0;
  y_min[i] = 0;
  angle_min[i] = 0;
}

for (var i = 0; i < numSegments_hour; i++) {
  x_hour[i] = 0;
  y_hour[i] = 0;
  angle_hour[i] = 0;
}

function setup() {
  createCanvas(500, 500);
  strokeWeight(20);
  stroke(255, 100);

  x[x.length-1] = width/4; // Set base x-coordinate
  y[x.length-1] = height;  // Set base y-coordinate

  x_min[x_min.length-1] = width/2; // Set base x-coordinate
  y_min[x_min.length-1] = height;  // Set base y-coordinate

  x_hour[x_hour.length-1] = 3*width/4; // Set base x-coordinate
  y_hour[x_hour.length-1] = height;  // Set base y-coordinate
}

function draw() {
  background(54);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

    // Hour hand
    t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
    v_h = p5.Vector.fromAngle(t);
    v_h.mult(200);

    // Minute hand
    t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
    v_m = p5.Vector.fromAngle(t);
    v_m.mult(200);

    // Second hand
    t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
    v_s = p5.Vector.fromAngle(t);
    v_s.mult(200);


  strokeWeight(20);
  stroke(color(0,0,255,150));
  reachSegment(0, v_s.x+250, v_s.y+250);
  for(var i=1; i<numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for(var j=x.length-1; j>=1; j--) {
    positionSegment(j, j-1);
  }
  for(var k=0; k<x.length; k++) {
    segment(x[k], y[k], angle[k], (k+1)*2);
  }


  strokeWeight(20);
  stroke(color(0,255,0,100));
  reachSegment_min(0, v_m.x+250, v_m.y+250);
  for(var i=1; i<numSegments_min; i++) {
    reachSegment_min(i, targetX_min, targetY_min);
  }
  for(var j=x_min.length-1; j>=1; j--) {
    positionSegment_min(j, j-1);
  }
  for(var k=0; k<x_min.length; k++) {
    segment_min(x_min[k], y_min[k], angle_min[k], (k+1)*2);
  }

  strokeWeight(20);
  stroke(color(255,0,0,100));
  reachSegment_hour(0, v_h.x+250, v_h.y+250);
  for(var i=1; i<numSegments_hour; i++) {
    reachSegment_hour(i, targetX_hour, targetY_hour);
  }
  for(var j=x_hour.length-1; j>=1; j--) {
    positionSegment_hour(j, j-1);
  }
  for(var k=0; k<x_hour.length; k++) {
    segment_hour(x_hour[k], y_hour[k], angle_hour[k], (k+1)*2);
  }
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}



function positionSegment_min(a, b) {
  x_min[b] = x_min[a] + cos(angle_min[a]) * segLength;
  y_min[b] = y_min[a] + sin(angle_min[a]) * segLength;
}

function reachSegment_min(i, xin, yin) {
  var dx = xin - x_min[i];
  var dy = yin - y_min[i];
  angle_min[i] = atan2(dy, dx);
  targetX_min = xin - cos(angle_min[i]) * segLength;
  targetY_min = yin - sin(angle_min[i]) * segLength;
}

function segment_min(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function positionSegment_hour(a, b) {
x_hour[b] = x_hour[a] + cos(angle_hour[a]) * segLength;
y_hour[b] = y_hour[a] + sin(angle_hour[a]) * segLength;
}

function reachSegment_hour(i, xin, yin) {
  var dx = xin - x_hour[i];
  var dy = yin - y_hour[i];
  angle_hour[i] = atan2(dy, dx);
  targetX_hour = xin - cos(angle_hour[i]) * segLength;
  targetY_hour = yin - sin(angle_hour[i]) * segLength;
}

function segment_hour(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

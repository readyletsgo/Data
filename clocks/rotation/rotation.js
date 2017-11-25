function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
  textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
}

function draw() {
  translate(width / 2.0, height / 2.0);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;

  background(192);

  // Draw clock
  fill(255);
  stroke(0);
  strokeWeight(10);
  ellipse(0, 0, 450, 450);

  // Seconds
  fill(0);
  strokeWeight(.5);
  for (i = 0; i < 60; i++) {
    v = p5.Vector.fromAngle((i - seconds - 14) / 60.0 * TAU - HALF_PI);
    v.mult(210);
    if (i % 5 == 4) {
      textSize(12);
      text(i + 1, v.x, v.y);
    } else {
      textSize(12);
      text(i + 1, v.x, v.y);
    }
  }

  // Minutes 
  fill(0);
  strokeWeight(.5);
  for (i = -1; i < 59; i++) {
    v = p5.Vector.fromAngle((i - minutes + 16) / 60.0 * TAU - HALF_PI);
    v.mult(180);
    if (i % 5 == 4 || i == -1) {
      textSize(16);
      text(i + 1, v.x, v.y);
    } else {
      noStroke();
      textSize(10);
      text(i + 1, v.x, v.y);
    }
  }

  // Numbers
  textSize(36);
  fill(0);
  noStroke()
  for (i = 0; i < 12; i++) {
    v = p5.Vector.fromAngle((i - hours%12 + 1) / 12.0 * TAU - HALF_PI);
    v.mult(130);
    text(i + 1, v.x, v.y);
  }

  noFill();
  stroke(0);
  strokeWeight(3);
  rect(-222,-14,26,26);
  fill(0);
  rect(-198,-14,222,26);


  noFill();
  stroke(0);
  strokeWeight(3);
  rect(192.5,-14,-26,26);
  fill(0);
  rect(165,-14,-192.5,26);

  noFill();
  stroke(0);
  strokeWeight(3);
  rect(-20,-150,42,40);
  fill(0);
  rect(-20,-110,42,100);
  ellipse(0,0,220,220);

  noFill();
  strokeWeight(19);
  ellipse(0,0,317,317);
  strokeWeight(10);
  ellipse(0,0,393,393);
}
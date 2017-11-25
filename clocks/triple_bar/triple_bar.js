function setup() {
	createCanvas(500,500);
}
function draw() {
	background(225);

	fill(150);
	noStroke();
	ellipse(250,250,400,400);

	var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v_h,
    v_m,
    v_s,
    t;

    // Hour hand
  	stroke(0);
  	strokeWeight(4);
  	t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
  	v_h = p5.Vector.fromAngle(t);
  	v_h.mult(125);
  	line(250, 250, v_h.x+250, v_h.y+250);

  	// Minute hand
  	strokeWeight(2);
  	t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  	v_m = p5.Vector.fromAngle(t);
  	v_m.mult(50);
  	line(v_h.x+250, v_h.y+250, v_m.x+v_h.x+250, v_m.y+v_h.y+250);

  	// Second hand
  	stroke(255, 0, 0);
  	strokeWeight(1);
  	t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  	v_s = p5.Vector.fromAngle(t);
  	v_s.mult(25);
  	line(v_m.x+v_h.x+250, v_m.y+v_h.y+250, v_s.x+v_m.x+v_h.x+250, v_s.y+v_m.y+v_h.y+250);
}

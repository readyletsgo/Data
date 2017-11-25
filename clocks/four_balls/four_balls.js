function setup() {
	createCanvas(500,500);
}
function draw() {
	background(100);

	fill(225);
	noStroke();
	ellipse(250,250,150,150);

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
  	noStroke();
    fill(175);
    t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
  	v_h = p5.Vector.fromAngle(t);
  	v_h.mult(120);
  	ellipse(v_h.x+250, v_h.y+250,90,90);

  	// Minute hand
    fill(125);
  	t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  	v_m = p5.Vector.fromAngle(t);
  	v_m.mult(70);
  	ellipse(v_m.x+v_h.x+250, v_m.y+v_h.y+250, 50, 50);

  	// Second hand
    fill(65);
    tint(255,75);
  	t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  	v_s = p5.Vector.fromAngle(t);
  	v_s.mult(33);
  	ellipse(v_s.x+v_m.x+v_h.x+250, v_s.y+v_m.y+v_h.y+250, 15, 15);
}

function setup() {
  createCanvas(500,500);
  background(192);
}
function draw() {
	fill(255);
	stroke(0);
	strokeWeight(4);
	ellipse(250,250,450,450);

	textFont('Arial',96);
	textAlign(CENTER);

	push();
	noStroke();
	fill(0);
	text("YOU'RE\n"+"LATE",250,230);
	pop();
}
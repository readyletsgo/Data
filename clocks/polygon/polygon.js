var old_sec = 0;
var hour_color = 225;

function setup() {
  createCanvas (500, 500);
}

function draw() {
    var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

  background(240);

  noStroke();
  
  fill(0);

  push();

  translate(width*0.5, height*0.5);
  rotate(frameCount/(60.0*60.0*60.0));
  polygon(0, 0, 225, hours%12); 

  pop();

  push();

  if (minutes%5 == 0){fill(color('#60dd8e'));stroke(color('#60dd8e'),2);}
  if (minutes%5 == 1){fill(color('#3f9f7f'));stroke(color('#3f9f7f'),2);}
  if (minutes%5 == 2){fill(color('#188a8d'));stroke(color('#188a8d'),2);}
  if (minutes%5 == 3){fill(color('#17577e'));stroke(color('#17577e'),2);}
  if (minutes%5 == 4){fill(color('#141163'));stroke(color('#141163'),2);}
  
  if (minutes<6) {
    ellipse(width*.5, height*.5, 200, 200);
    fill(hour_color);
    ellipse(width*.5, height*.5, 165, 165 );
  }
  else{
    translate(width*0.5, height*0.5);
    rotate(frameCount/360.0);
    polygon(0, 0, 75*2, floor(minutes/5)); 
  }
  
  pop();
  
  push();

  if (seconds%5 == 1){fill(color('#881b08'));stroke(color('#881b08'),2);}
  if (seconds%5 == 2){fill(color('#8e481a'));stroke(color('#8e481a'),2);}
  if (seconds%5 == 3){fill(color('#787c3b'));stroke(color('#787c3b'),2);}
  if (seconds%5 == 4){fill(color('#6d91b9'));stroke(color('#6d91b9'),2);}
  if (seconds%5 == 0){fill(color('#7377b3'));stroke(color('#7377b3'),2);}

  if (seconds<6) {
    ellipse(width*.5, height*.5, 75, 75);
  }

  else{translate(width*0.5, height*0.5);
  rotate(frameCount/60.0);
  polygon(0, 0, 75, floor(seconds/5)); 
  rotate(frameCount/60.0);
  }

  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
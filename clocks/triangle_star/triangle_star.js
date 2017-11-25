var x;
var y;


function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
}

function draw() {
  background(3*255/4);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();
    var outsideRadius = 180;
    var insideRadius = minutes*2;
  
  var numPoints = seconds;
  var angle = 0;
  var angleStep = 180.0/numPoints;

  var hour_colors = ['#87889c','#bea9de','#312f66','#0232dd','#00d7ff','#dbcf20','#e67fcd','#4e3622','#d8dfb8','#adae87','#686513','#98735c','#a9afa1','#87bad7','#c37349','##4a7f8b','#ee7373','#a98484','#5050a9','#747ef2','#131862','#2e4482','#352d28','#546bab'];

  fill(color(hour_colors[hours]));
    
  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) * outsideRadius;
    var py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
}

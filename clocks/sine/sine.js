function setup() {
	createCanvas(500,500);
}
function draw() {
	background(127);


	var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

    frameRate(50);

    var a = 0.0;
	var inc = TWO_PI/((seconds+1)/2);
	for (var i = 0; i < frameCount; i++) {
		stroke(255);	
		line(i, 300, i, 300+sin(-a)*minutes+sin(a)*hours+sin(a/seconds+minutes)*hours+sin(a/minutes+seconds)*minutes+sin(a/minutes+hours)*seconds);
		stroke(0);
		line(i, 300, i, 300+sin(a)*minutes+sin(a)*hours);

  		a = a + inc;
	}

	var string_hours = String(hours), string_minutes = String(minutes), string_seconds = String(seconds);
	if (hours<10){var string_hours = "0"+String(hours);}
	if (minutes<10){var string_minutes = "0"+String(minutes);}
	if (seconds<10){var string_seconds = "0"+String(seconds);}
	

	textSize(24);
	textFont("Verdana");
	textAlign(CENTER);
	text(string_hours + ':'+ string_minutes + ':' + string_seconds,200,height/6,100,100);
}
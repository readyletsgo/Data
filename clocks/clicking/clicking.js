var r, g, b;
var x_rand, y_rand;
var clicks, clicks_check;
var date_start, hour_start, minute_start, second_start, ms_start;
var date, hours, minutes, seconds, ms;
var hour_check, minute_check, seconds_check, hours_since, minutes_since, seconds_since;

function setup() {
	clicks = floor(random(10,25));
	clicks_check = 0;
	createCanvas(500,500);
	r = random(255);
  	g = random(255);
  	b = random(255);
  	x_rand = random(-(398-250),(398-250));
  	y_rand = random(-(398-250),(398-250));
  	date_start = new Date(),
    hour_start = date_start.getHours(),
    minute_start = date_start.getMinutes(),
    second_start = date_start.getSeconds(),
    ms_start = date_start.getMilliseconds();
    hour_check = hour_start;
    minute_check = minute_start;
    seconds_check - floor(seconds);
    hours_since = 0;
    minutes_since = 0;
    seconds_since = 0;
  	
}
function draw() {

	var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

    var string_hours = String(hours%12), string_minutes = String(minutes), string_seconds = String(seconds);
	if (hours%12<10){var string_hours = "0"+String(hours);}
	if (minutes<10){var string_minutes = "0"+String(minutes);}
	if (seconds<10){var string_seconds = "0"+String(seconds);}

  	background(127);
  	// Draw a circle

  	if(seconds_check != floor(seconds))
  		{
  			seconds_since += 1; 
  			seconds_check = floor(seconds);
  			if (seconds_since == 60)
  			{
  				minutes_since += 1;
  				seconds_since = 0;
  			}
  			if(minutes_since == 60)
  			{
  				minutes_since = 0;
  				hours_since += 1;
  			}
  			
  		}

  	if(clicks == clicks_check){
  		textSize(24);
  		fill(0);
  		noStroke();
  		text("Well, the time is: " + string_hours + ':' + string_minutes + ':' + string_seconds + "\n" + "But it has been: " + (hours_since) + ':' + (minutes_since) + ':' + (seconds_since) + " since you came here." + '\n' + "Time is fleeting. Stop looking at a website to tell the time." + "\n" + "\n" + "\n" + "Buy a watch.",0,50,500,500);
  	}
  	else{
  	strokeWeight(2);
  	stroke(r, g, b);
  	fill(r, g, b, 127);
  	ellipse(x_rand+250, y_rand+250, 25, 25);
  	// strokeWeight(.5);
  	// stroke(0);
  	noStroke();
  	fill(r,g,b,255);
  	textAlign(CENTER);
  	textSize(12);
  	text("Click Me!", x_rand+152, y_rand+220, 200, 50);
  	//text(clicks_check + ' ' + clicks, x_rand+150, y_rand+230, 200, 50);

  	}

}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  	var d = dist(mouseX, mouseY, x_rand+250, y_rand+250);

  	if (d < 25/2) {
    	// Pick new random color values
    	r = random(255);
    	g = random(255);
    	b = random(255);
    	x_rand = random(-(398-250),(398-250));
  		y_rand = random(-(398-250),(398-250));
    	clicks_check += 1;
 	}
}
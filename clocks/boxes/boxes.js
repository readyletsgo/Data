var height_second = 2,
length_second = 2,
boarder_second = 0,
height_minute = 10*height_second+12*boarder_second,
length_min = 6*length_second+8*boarder_second+2,
boarder_hour = 5,
boarder_min = 2,
height_hour = height_minute+2*boarder_min,
length_hour = length_min*60+boarder_min*59+2*boarder_min;


function setup() {
	createCanvas(length_hour+2*boarder_hour,height_hour*12+boarder_hour*13);
}
function draw(){

	var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

    if (hours<7||hours>19){background(30);}
    else{background(230);}

    fill(255);
   	noStroke();

    for (var i = 0; i < hours%12; i++) {
    	rect(boarder_hour,boarder_hour+i*boarder_hour+i*height_hour,length_hour,height_hour);
    }

    fill(100);

    for (var i = 0; i < 60; i++) {
    	for (var j = 0; j < hours%12; j++) {
    		if (j < (hours%12) - 1)
    		{
    			rect(boarder_hour+boarder_min+i*boarder_min+i*length_min,boarder_hour+boarder_min+2*j*boarder_min+j*boarder_hour+j*height_minute,length_min,height_minute);
    		}
    		else if (i<minutes)
    		{
    			rect(boarder_hour+boarder_min+i*boarder_min+i*length_min,boarder_hour+boarder_min+2*j*boarder_min+j*boarder_hour+j*height_minute,length_min,height_minute);
    		}
    	}
    }

    noStroke();
    fill(color(255,0,0));
    
    var rows = ceil(seconds/6);
    var second = seconds;

    for (var i = 0; i <= rows; i++) {

    	if (second<6){
    		for (var j = 0; j <= second; j++) {
    		rect(boarder_hour+minutes*boarder_min+(minutes-1)*length_min+j*boarder_second+j*length_second,i*boarder_second+i*height_second+(hours%12)*boarder_hour+boarder_min+((hours%12)-1)*height_hour,length_second,height_second);
    		}
    	}
    	else{
    		for (var j = 0; j <= 6; j++) {
    		rect(boarder_hour+minutes*boarder_min+(minutes-1)*length_min+j*boarder_second+j*length_second,i*boarder_second+i*height_second+(hours%12)*boarder_hour+boarder_min+((hours%12)-1)*height_hour,length_second,height_second);
    		}
    	}
    	
    	second = second - 6;
    }
}

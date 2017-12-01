var vert_space = 560;
var total = 0;
var points = [];
var num = 1; 

function setup() {
	createCanvas(1100,560);
	background("#6f7c85");
	frameRate(4);
}

function draw(){
	var history = [0,1,2,1,3,1,4,0,0,2,3,4];
	var space = 950/num;
	var vert_space = 30*history.length/num;
	stroke(0);
	strokeWeight(1);
	var total = 0;
	background("#6f7c85");
	if(space > 950/history.length && vert_space>30){
		for (var i = 0; i < history.length; i++) {
			if (history[i]-2 == -2){
				stroke("#ff71ce");
				fill("#ff71ce");
			}
			if (history[i]-2 == -1){
				stroke("#01cdfe");
				fill("#01cdfe");
			}
			if (history[i]-2 == 0){
				stroke("#05ffa1");
				fill("#05ffa1");
			}
			if (history[i]-2 == 1){
				stroke("#b967ff");
				fill("#b967ff");
			}
			if (history[i]-2 == 2){
				stroke("#fffb96");
				fill("#fffb96");
			}
			line((i+1)*space, height/2+total*vert_space, (i+2)*space, height/2+(total+(history[i]-2))*vert_space);
			ellipse((i+2)*space,height/2+(total+(history[i]-2))*vert_space,10,10);
			total += (history[i]-2);
		}
		num += 1;
		console.log("scaling");
	}
	else{
		for (var i = 0; i < history.length; i++) {
			if (history[i]-2 == -2){
				stroke("#ff71ce");
				fill("#ff71ce");
			}
			if (history[i]-2 == -1){
				stroke("#01cdfe");
				fill("#01cdfe");
			}
			if (history[i]-2 == 0){
				stroke("#05ffa1");
				fill("#05ffa1");
			}
			if (history[i]-2 == 1){
				stroke("#b967ff");
				fill("#b967ff");
			}
			if (history[i]-2 == 2){
				stroke("#fffb96");
				fill("#fffb96");
			}
			line((i+1)*950/num, height/2+total*30, (i+2)*950/num, height/2+(total+(history[i]-2))*30);
			ellipse((i+2)*950/num,height/2+(total+(history[i]-2))*30,10,10);
			total += (history[i]-2);
		}
		noStroke();
		rect((history.length+1)*950/num-100,height/2+(total)*30,100,100);
		fill("#ff71ce");
		rect(950/num, height/2, 100, 100);

		fill(225);
		textAlign(CENTER,CENTER);
		
		textSize(40);
		text("You took " + history.length + " steps to get to the final product.", width/2,height-50);
	}
	
}

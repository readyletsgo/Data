var pic_height = 180;
var pic_width = 180;
var small_pic_height = 100;
var small_pic_width = 100;
var spacing = 10;
var game_state = 0;
var halfway_down = pic_height +spacing*(4) + small_pic_height*2.5;
var boxes = [];
var headers = [];
var active_box;
var past = new Array();
var new_ele = 0;
var current = new Box(66, 7, clearance_yellow);
var goal = new Box(42, 42, walmart_blue);
var new_display = 1;
var clicked_already = 0;
var vert_scale = 3;
var total = 0;

var walmart_blue = "#1C75CF";
var spark_yellow = "#ffc220";
var dark_blue = "#041e42";
var clearance_yellow = "#fff200";
var background_color = "#ffffff";
var light_blue = "#8DBDE8";
var market_green = "#5fb446";
headers[0] = new big_ones("Starting Point", 0, 0);


function setup() {
	if (game_state == 0) {
		noStroke();
		canvas = createCanvas(1200,750);
		canvas.parent("thing");
		background(walmart_blue);
		canvas.mouseOver(mouse_over_pre);
		canvas.mouseClicked(start_game);
	}

	if(game_state == 1){
		noStroke();
		canvas = createCanvas(1200,750);
		canvas.parent("thing");
		background(walmart_blue);

		for (var i = 0; i < 5; i++) {
	    // create a box with number "i", at a random x and y location
	    	var name_of_this_one = Math.floor(random(20,45));
	    	boxes[i] = new Box(i, name_of_this_one, spark_yellow);
	  	}
	  	
	  	headers[1] = new big_ones("Goal Product", 1,42);
	  	if (headers[0].id == headers[1].id) {
	  		game_state = 2;
	  		setup();
	  	}

	  	fill(dark_blue);
	  	rect(spacing/2,spacing/2,width-spacing,spacing+pic_height);

	  	draw_line();

		textSize(64);
		noStroke();
		textAlign(CENTER, CENTER);
		fill(color(spark_yellow));
		text(past.length, width/2, spacing + pic_height/2);
	}

	if (game_state == 2) {
		background(walmart_blue);
		fill(dark_blue);
	  	rect(spacing/2,spacing/2,width-spacing,spacing+pic_height);


		textSize(48);
		noStroke();
		textAlign(CENTER, CENTER);
		fill(color(spark_yellow));
		text("FROM", spacing, spacing,180,180);
		text("TO", spacing + 2*pic_width, spacing, 180, 180);
		text("IN " + past.length + " MOVES!", spacing+4*pic_width, spacing, 360, 180);
		
		fill(255);
		rect(spacing+pic_width, spacing, 180,180);
		fill(color(clearance_yellow));
		rect(spacing+pic_width+10, spacing+10, 160,160);
		fill(255);
		rect(spacing+3*pic_width, spacing, 180,180);
		fill(color(market_green));
		rect(spacing+3*pic_width+10, spacing+10, 160,160);
		//loadImage("https://ec-us-i5.wal.co/asr/6d088fee-c283-492a-9a6e-832b148be4ec_1.d69492c20b046d74b0ad24ee729a85a5.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff", function(img) {image(img, spacing+pic_width, spacing)});
    		//loadImage("https://ec-us-i5.wal.co/asr/ce4fc094-a0f3-4c5a-bf61-45ab1e460423_1.8f12ad68fc3ab012d5032aaac353921b.jpeg?odnWidth=180&odnHeight=180&odnBg=ffffff", function(img_2) {image(img_2, spacing+3*pic_width, spacing)});

		

		stroke(color("#000000"));
		fill(spark_yellow);
		total = 0;
		strokeWeight(3);
		line(100,halfway_down, 1100, halfway_down);
		stroke(0);
		strokeWeight(.25);

		for (var i = 0; i < (2*vert_scale)-1; i++) {
			line(100, halfway_down - (vert_scale-1)*260/(vert_scale) + i*260/vert_scale, 1100, halfway_down - (vert_scale-1)*260/(vert_scale) + i*260/vert_scale);
		}
		
		strokeWeight(1);


		for (var i = 0; i < past.length; i++) {
				line((100) + i*1000/past.length, halfway_down + total*260/vert_scale, (100) + (i+1)*1000/past.length, halfway_down + (total+((past[i]-2)))*260/vert_scale);	
				total += ((past[i]-2));
		}
		total = 0;
		ellipse((100), halfway_down + total*260/vert_scale,10,10);
		for (var i = 0; i < past.length; i++) {
				ellipse((100) + (i+1)*1000/past.length,halfway_down + (total+((past[i]-2)))*260/vert_scale,10,10);
				total += ((past[i]-2));
		}

	}
		
}

function draw() {
	if (game_state == 0) {
	}
	
	if (game_state == 1) {
		active_box = null;
		for (var i = 0; i < boxes.length; i++) {
	    // run each bubble's update and display functions

		    boxes[i].update();
		    boxes[i].display();
		    // check if the current bubble is "active" and save that number
		    if(boxes[i].active==true){
		    	active_box = boxes[i];
		    }
		}
		if(new_display == 1){
			for (var i = 0; i < headers.length; i++) {
				headers[i].display();
			}
			
		}	
	}
	
}

function mouse_over_pre() {
	if (game_state == 0) {
		background(dark_blue);
		textAlign(CENTER, CENTER);
		textSize(48);
		fill(spark_yellow);
		text("Click to Start the Game!", width/2, height/2);
	}
	
}

function start_game() {
	if(game_state == 0){
		game_state = 1;
		new_display = 1;
		setup();
	}
}


function Box(number, name, color){

	this.number = number;
	this.name = name;
	this.x = spacing + pic_width/2 - small_pic_width/2;
	this.y = spacing + pic_height +spacing*(this.number+1) + small_pic_height*this.number;
	this.height = small_pic_height;
	this.width = small_pic_width;
	this.col = color;
	this.active = false;

	this.get_children = function(){
		for (var i = 0; i < 5; i++) {
    	// create boxes with random stuff
    		var name_of_this_one = Math.floor(random(10000));
    		boxes[i] = new Box(i, name_of_this_one, spark_yellow);
  		}
	}

	this.display = function(){
		noStroke();

		fill(walmart_blue);
    	rect(2*spacing + pic_width/2 - small_pic_width/2 +small_pic_width, spacing + pic_height +spacing*(this.number+1) + small_pic_height*this.number , 100, 100);

		fill(260);
    	rect(this.x, this.y, this.width-1, this.height-1);


    	fill(dark_blue);
    	textSize(16);
    	text("The name of this product is: " + this.name, 2*spacing + pic_width/2 - small_pic_width/2 +small_pic_width, spacing + pic_height +spacing*(this.number+1) + small_pic_height*this.number , 100, 100);

		if (this.active) {
			stroke("#000000");
		}

		
    	// fill(this.col);
    	// rect(this.x+20, this.y+20, this.width-40, this.height-40);
    	fill(0);  
    	textSize(64);
    	text(this.number+1, this.x+this.width/2, this.y+this.height/2);
    	
    	
	}

	this.update = function(){



		if(mouseX>this.x && mouseX< this.x+this.width && mouseY > this.y && mouseY< this.y+this.height ){
	      // if yes, make this box active and change the color to red
	      this.active = true; 
	    }

	    else {
	      this.active = false;
	    }


	}


}

function mouseClicked() {
	if (game_state == 1){
		if(active_box != null){
			append(past, active_box.number);
			headers[0] = new big_ones(active_box.name, 0, active_box.name);
			new_display=1;
			setup();
		}
	}

}


function big_ones(name, type, id){
	
	this.name = name;
	this.type = type;
	this.id = id;
	
	this.display = function(){
		push();
		if (type == 0){
			fill(color(clearance_yellow));
			rect(spacing+10, spacing+10, 160, 160);
			noStroke();
			textSize(32);
			fill(color("white"));
			textAlign(LEFT, CENTER);
			text(name, 2*spacing + pic_width, spacing , 180, 180);
		}
		if (type == 1) {
			fill(color(market_green));
			rect(width - spacing - pic_width, spacing, 180, 180);
			textAlign(RIGHT, CENTER);
			noStroke();
			textSize(32);
			fill(color("white"));
			text(name, width - 2*spacing - 2*pic_width, spacing , 180, 180);
		}
		new_display = 0;
		pop();
	}
	
}


function draw_line() {

	total = -1*(total+past[past.length-1]-2);
	console.log(total);
	if (total>vert_scale) {
		vert_scale = total;
	}
	if (total<-vert_scale) {
		vert_scale = -total;
	}
	console.log("vert_scale " + vert_scale);
	total = 0;

	var initial_x = 4*spacing + pic_width/2 + 1.5*small_pic_width;
	var final_x = width - spacing - pic_width/2;

	stroke(0);
	strokeWeight(.25);

	for (var i = 0; i < (2*vert_scale)-1; i++) {
		line(initial_x, halfway_down - (vert_scale-1)*260/(vert_scale) + i*260/vert_scale, final_x, halfway_down - (vert_scale-1)*260/(vert_scale) + i*260/vert_scale);
	}

	stroke(color("#000000"));
	strokeWeight(1);

	for (var i = 0; i < past.length; i++) {
			line((initial_x) + i*820/past.length, halfway_down + total*260/vert_scale, (initial_x) + (i+1)*820/past.length, halfway_down + (total+((past[i]-2)))*260/vert_scale);	
			ellipse((initial_x) + (i+1)*820/past.length,halfway_down + (total+((past[i]-2)))*260/vert_scale,10,10);
			total += ((past[i]-2));
	}




	stroke(color("#000000"));
  	fill(0);
	line(2.5*spacing + pic_width/2 + 1.5*small_pic_width, 3*spacing + pic_height, 2*spacing + pic_width/2 + 1.5*small_pic_width, height- 2*spacing);
	line(2.5*spacing + pic_width/2 + 1.5*small_pic_width, halfway_down,width - spacing - pic_width/2,halfway_down);
	ellipse(4*spacing + pic_width/2 + 1.5*small_pic_width, halfway_down, 10,10);

}

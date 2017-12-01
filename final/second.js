//Variables
var s = function (p){
	var game_state = 0;
	var canvas;
	var pic_height = 180;
	var pic_width = 180;
	var spacing = 10;
	var small_pic_height = 100;
	var small_pic_width = 100;
	var points = [];
	var space = 10;
	var vert_space = 10;
	var children = [];
	var history = [current];
	var highlit = 0;

var current = new Picture(0,0,0,"blue",1); // make the "current" picture, will do this with a random number & fill in data with api
var goal = new Picture (0,0,60000,"gold", 2); // same as above but goal
var old_current = new Picture(0,0,0,"blue",1); 

p.setup = function() {


	p.noStroke();

	if (game_state == 0){ // pre game stuff
		canvas = p.createCanvas(900, 560);
		p.background("#6f7c85");

	}

	if (game_state == 1){ // set up board
		var width = p.width;
		var height = p.height;
		p.background("#6f7c85");
		p.fill("#8c9da9");
		p.noStroke();
		p.rect(0,0,pic_width+2*spacing,height);
		p.rect(width-pic_width-2*spacing,0,pic_width+2*spacing,height);
		p.fill(255);
		p.rect(spacing, height/2 - pic_height/2,pic_width,pic_height);
		p.rect(width - spacing - pic_width, height/2 - pic_height/2,pic_width,pic_height);
		p.fill(110);
		p.rect(width/2 - small_pic_width/2, spacing, small_pic_width, small_pic_height);
		p.rect(width/2 - small_pic_width/2, 2*spacing + small_pic_height, small_pic_width, small_pic_height);
		p.rect(width/2 - small_pic_width/2, 3*spacing + 2*small_pic_height, small_pic_width, small_pic_height);
		p.rect(width/2 - small_pic_width/2, 4*spacing + 3*small_pic_height, small_pic_width, small_pic_height);
		p.rect(width/2 - small_pic_width/2, 5*spacing + 4*small_pic_height, small_pic_width, small_pic_height);
		p.fill("#6f7c85");
		p.rect(0,0,pic_width+2*spacing, p.height/2-pic_height/2-2*spacing-50);
		p.rect(0,p.height/2+pic_height/2+2*spacing+50,pic_width+2*spacing, p.height);
		p.fill("#7e8d98");
		p.rect(spacing,p.height/2-pic_height/2-spacing,pic_width, -50);
		p.rect(spacing,p.height/2+pic_height/2+spacing,pic_width, 50);
		p.rect(p.width-spacing, spacing, -pic_width, pic_height-spacing);
		p.rect(p.width-spacing, p.height - spacing, -pic_width, -pic_height+spacing);
		p.fill(0);
		p.textAlign(p.CENTER, p.CENTER);
		p.textSize(25);
		p.text("BACK", spacing+pic_width/2,p.height/2-pic_height/2-spacing-25);
		p.text("RANDOM", spacing+pic_width/2,p.height/2+pic_height/2+spacing+25);
		p.text("PRODUCT \n NAME", p.width-spacing- pic_width/2, spacing+pic_height/2 );
		p.textSize(15);
		p.text("Short \n Product \n Description", p.width-spacing- pic_width/2, p.height - spacing - pic_height/2);


		children = current.get_children(); // setting/loading images as few times as possible
	}

	if (game_state == 2){ // post game showing what your path looked like 
		// small animation will come if I have time
		p.background("#6f7c85");
		p.frameRate(4);
	}

	console.log("setup", game_state);
}

p.draw = function() {

	if (game_state == 0){ // pregame
		canvas.mouseClicked(p.start_game);
		console.log(game_state);
		canvas.mouseOver(p.mouse_over_pre);
		if(p.dist(p.mouseX, p.mouseY, p.width/2,p.height/2)>1000){
			p.background("#a9b3ba");
		}

	}

	if (game_state == 1){ // in game

		current.render(spacing, p.height/2 - pic_height/2); // draw the current picture where it should be
		goal.render(p.width-spacing- pic_width, p.height/2 - pic_height/2);

		if(current.id != old_current.id){ // see if working with a new product
			children = current.get_children();
			old_current = current;
		}
		if(current.id == goal.id){ // stop condition
			game_state = 2;
			setup();
		}

		for (var i = 0; i < children.length; i++) { // cycle through children

			//where the other pictures will go 
			var x = p.width/2 - small_pic_width/2; 
			var y = spacing + children[i].number*small_pic_height + children[i].number*spacing;

   			if(p.mouseX>x && p.mouseX< x+small_pic_width && p.mouseY > y && p.mouseY< y+small_pic_height){ //check if on picture & highlight
      			p.fill(200,10);
      			p.rect(x,y,small_pic_width,small_pic_height);
      			p.push();
      			p.textAlign(p.LEFT, p.CENTER);
      			p.textSize(20);
      			p.noStroke();
      			p.fill(0);
      			p.text("Product name here", x+small_pic_width+spacing, y+ small_pic_height/2);
      			p.pop();
      			highlit = children[i].number;

    		}

    		else{ //redraw image once not hovering anymore
      			children[i].render(x,y);
    		}
    		

    		// children[i].p.mouseClicked(p.reset(children[i])); // make children[i] the new current

		}	

	}

	if (game_state == 2){

		var history = [0,1,2,1,3,1,4,0,0,2,3,4];
		var space = 1100/num;
		var vert_space = 30*history.length/num;
		p.stroke(0);
		p.strokeWeight(1);
		var total = 0;
		p.background("#6f7c85");
		if(space > 1100/history.length && vert_space>30){
			for (var i = 0; i < history.length; i++) {
				line(i*space, height/2+total*vert_space, (i+1)*space, height/2+(total+(history[i]-2))*vert_space);
				total += (history[i]-2);
			}
			num += 1;
		}
		else{
			for (var i = 0; i < history.length; i++) {
				line(i*1100/num, height/2+total*30, (i+1)*1100/num, height/2+(total+(history[i]-2))*30);
				total += (history[i]-2);
				}
			}
	}

}

p.start_game = function(){ // moves to game_state 1
	game_state = 1;
	history.push(current.number);
	p.setup();
}

p.mouse_over_pre = function(){ // highlihgts the game when moused over
	if(game_state == 0){
		p.background("#c5ccd1");
		p.noStroke();
		p.textAlign(p.CENTER,p.CENTER);
		p.fill(0);
		p.textSize(30);
		p.text("Click to Start the Game",p.width/2,p.height/2);
	}
	else{
	}
}

p.reset = function(new_thing){ // this is changing the "current" product to the once that the user clicks
	current = new Picture(new_thing.parent, 0, new_thing.id, "blue", 1); //NEED TO CHANGE TO MEDIUM SIZED PICTURE
	//current = new Picture(this.id, i, i+1, p.loadImage("https://github.com/zekelongmit/Data/blob/master/final/This_one_180.png?raw=true"), 0);
	history.push(new_thing.number);
	p.setup();
}

function Picture(parent, number, id, picture, state){ // ID of parent, # in list (height), own ID, loaded image, (0 = child, 1 = current, 2 = goal)

	this.parent = parent; // keeps track of parent
	this.number = number; // where it was on the list
	this.id = id; // so I can find pictures of it or look it up if needed
	this.picture = picture; // should be the loaded imagae
	this.state = state; //as stated above

	this.render = function(x,y){ // draws the image where it should go 

		//p.image(x,y,this.picture);

		if (this.picture == "blue") {
			p.fill("#0000ff");
			p.rect(x,y,180,180);
		}
		if (this.picture == "gold") {
			p.fill("#ffff00");
			p.rect(x,y,180,180);
		}
		if (this.picture == "green"){
			p.fill("#00ff00");
			p.rect(x,y,100,100);
		}
		if (this.picture == "red") {
			p.fill("#ff0000");
			p.rect(x,y,100,100);
		}
		
	}

	this.get_children = function(){ // returns list of the children of the product
		var kids = [];
		for (var i = 0; i < 5; i++) {
			// this loop depends on how the API gives me data
			// using fake id, real number, fake ID, fake image, real state
			// kids[i] = new Picture(this.id, i, i+1, p.loadImage("https://github.com/zekelongmit/Data/blob/master/final/Not_this_one_100.png?raw=true"), 0);
			kids[i] = new Picture(this.id, i, i+100, "red", 0);
		}
		var r = Math.floor(p.random(0,4));
		kids[r] = new Picture(this.id, r, 42, "green",0);
		//kids[i] = new Picture(this.id, i, i+1, p.loadImage("https://github.com/zekelongmit/Data/blob/master/final/This_one_100.png?raw=true"), 0);
		return kids; // should return the children of current so that I can use them in the code
	}


}

function keyTyped() {

	if (key == 'e'){
		game_state = 3;
		setup();
	}

}

};

var myp5 = new p5(s, 'thing');
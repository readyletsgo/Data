var state_list = ['England','Delaware','Pennsylvania','New Jersey','Georgia','Connecticut','Massachusetts','Maryland','South Carolina','New Hampshire','Virgina','New York','North Carolina','Rhode Island','Vermont','Kentucky','Tennessee','Ohio','Louisiana','Indiana','Mississippi','Illinois','Alabama','Maine','Missouri','Arkansas','Michican','Florida','Texas','Iowa','Wisconsin','California','Minnesota','Oregon','Kansas','West Virgina','Nevada','South Carolina x2','Arkansas x2','Mississippi x2','Florida x2','Georgia x2','Alabama x2','Louisiana x2','Texas x2','Virgina x2','Nebraska','Colorado','North Dakota','South Dakota','Montana','Washington','Idaho','Wyoming','Utah','Oklahoma','New Mexico','Arizona','Alaska','Hawaii'];

function setup() {
	createCanvas(500*1.9,500);
}
function draw() {
	background(color('#FFFFFF'));
	noStroke();
	var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

    fill(color('#002147'));
    rect(0,0,.76*500,(7/13)*500);
    
    var stripe_width = 1/13*500;

    fill(color('#BB133E'));
    rect(.76*500,0,1.9*500,stripe_width);
    rect(.76*500,2*stripe_width,1.9*500,stripe_width);
    rect(.76*500,4*stripe_width,1.9*500,stripe_width);
    rect(.76*500,6*stripe_width,1.9*500,stripe_width);
    rect(0,8*stripe_width,1.9*500,stripe_width);
    rect(0,10*stripe_width,1.9*500,stripe_width);
    rect(0,12*stripe_width,1.9*500,stripe_width);

    fill(0);
    textSize(48);
    textFont("Courier_New");
    textAlign(CENTER);
    fill(color(248,236,194));
    text(state_list[hours] + "\n" + state_list[minutes] + "\n" + state_list[floor(seconds)],-55,45,500,500);


}
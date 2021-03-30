var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var maxRadius = 40;


window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();

});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = '#fff'

	this.draw = () => {
		
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

}

var circleArray = [];

function init() {
	circleArray = [];

	for (let i = 0; i < 200; i++) {
		var radius = 1.5;
		var x = Math.random() * (window.innerWidth - radius * 2) + radius;
		var y = Math.random() * (window.innerHeight - radius *2) + radius;
		var dx = (Math.random() - 0.5);
		var dy = (Math.random() - 0.5);
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}

}

function animate() {
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].draw();
	}

	requestAnimationFrame(animate);
}

init()
animate()


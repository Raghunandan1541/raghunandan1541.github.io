const myToggle = (() => {
	var x = document.getElementById("nav-item");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
});

var mybutton = document.getElementById("Top");
window.onscroll = () => {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
const topFunction = (() => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
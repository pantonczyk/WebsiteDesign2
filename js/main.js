$(function() {
	$(document).scroll(function() {
		var $nav = $("#mainNavbar");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid white}";
	document.body.appendChild(css);
};

(function ($){
	$.fn.counter = function() {
		const $this = $(this),
			numberFrom = parseInt($this.attr('data-from')),
			numberTo = parseInt($this.attr('data-to')),
			delta = numberTo - numberFrom,
			deltaPositive = delta > 0 ? 1 : 0,
			time = parseInt($this.attr('data-time')),
			changeTime = 10;

		let currentNumber = numberFrom,
			value = delta*changeTime/time;
		var interval1;
		const changeNumber = () => {
			currentNumber += value;
			//checks if currentNumber reached numberTo
			(deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
			this.text(parseInt(currentNumber));
			currentNumber == numberTo ? clearInterval(interval1) : currentNumber;
		}

		interval1 = setInterval(changeNumber,changeTime);
	}
}(jQuery));

$(document).ready(function(){

	$('.count-up').counter();
	$('.count1').counter();
	$('.count2').counter();
	$('.count3').counter();

	new WOW().init();

	setTimeout(function () {
		$('.count5').counter();
	}, 3000);
});

$('.carousel').carousel({
	interval: 3000
})

/* Testimonial */
$('.testi3').owlCarousel({
	loop: true,
	margin: 30,
	nav: false,
	dots: true,
	autoplay: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		1024: {
			items: 3
		}
	}
})

/* Page About  */
/* Section AboutUS */
$(document).ready(function(){
	$("#read-more").click(function(){
		$(".collapse").collapse('toggle');
	});
});

$(document).ready(function(){

	"use strict";

	// Assign height of nav to .intro-bubble top margin.
	var navHeight = $('nav').height();
	$('#hero .intro').css('margin-top', navHeight-1);

	// Adds and removes active class from nav links
	$('nav a').click(function(e){
		var thisId = this.hash;
		var wrapper = $('.wrapper').find('.intro');

		if( !$(this).hasClass('active') ) {
			$(this).addClass('active').siblings().removeClass('active');
			$(thisId).addClass('active-section').siblings().removeClass('active-section');
		}

		$(wrapper).each(function(){
			if( $(this).parent().hasClass('active-section') ) {
				$(this).css('margin-top', navHeight);
			} else {
				$(this).css('margin-top', 0);
			}
		});

		// Smooth scrolling
		if(this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800);
		}
	});

	// Attach social media buttons to sticky footer
	var footerHeight = $('footer').height();
	$('.social').css('margin-bottom', footerHeight + 20 + "px");

	// hero sky background
	var day = new Date();
	var hour = day.getHours();
  var gradient = ('0'+hour.toString()).slice(-2);
  // Shows different sky gradient depending on time of day
  var sky = $('#hero').addClass('sky-gradient-' + gradient);

  // Show's sun or moon depending on time of day
  if( (hour > 5) && (hour < 18) ) {
  	$('#sun').css('display', 'block');
  	$('#moon').css('display', 'none');
  } else {
  	$('#sun').css('display', 'none');
  	$('#moon').css('display', 'block');
  }

  $('.orbit').css({
  	'bottom': hour + 'vh',
  	'left': hour + 'vw'
  });

});

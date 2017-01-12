$(document).ready(function(){

	"use strict";

	// Assign height of nav to .intro-bubble top margin.
	var navHeight = $('nav').height();
	$('#hero .intro').css('margin-top', navHeight-1);

	// Adds and removes active class from nav links
	$('nav a').click(function(){
		var thisId = this.hash;
		if( !$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			// $(thisId).addClass('active');
		}
		// if(!$(thisId).hasClass('active-section')) {
		// 	$(thisId).addClass('active-section').css('margin-top', navHeight)
		// 	.siblings().removeClass('active-section');
		// }
		$(thisId).find('.intro').css('margin-top', navHeight);
	});

	// About me navigation

	// Smooth scroll
	$("a").on('click', function(e){
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

	// var height = $(window).height();

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

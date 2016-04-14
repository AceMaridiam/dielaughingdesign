$(document).ready(function(){

	"use strict";

	// proficiency bars
	$('#html').css('width', '95%');
	$('#css').css('width', '90%');
	$('#js').css('width', '75%');
	$('#wp').css('width', '75%');

	var height = $(window).height();
	console.log(height);

	// hero sky background
	var day = new Date();
	var hour = day.getHours();
	console.log(hour);
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
    	$('.welcome').css('color', '#fff');
    }

    $('.orbit').css({
    	'bottom': hour + 'vh',
    	'left': hour + 'vw'
    });

    // Adds and removes active class from nav links
    $('nav a').click(function(){
    	if( !$(this).hasClass('active') ) {
    		$(this).addClass('active').siblings().removeClass('active');
    	}
    });

    $(document).ready(function() {  
	   $("#myCarousel").swiperight(function() {  
	      $("#myCarousel").carousel('prev');  
	    });  
	   $("#myCarousel").swipeleft(function() {  
	      $("#myCarousel").carousel('next');  
	   });  
	});  
    

});
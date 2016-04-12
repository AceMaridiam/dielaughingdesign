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

    // $('#hero').css('height', height/6 + 'px');

    if( (hour > 5) && (hour < 18) ) {
    	$('#sun').css('display', 'block');
    	$('#moon').css('display', 'none');

    	$('.orbit').css({
	    	'bottom': height/10+'px',
	    	'left': hour+'%'
	    });
    } else {
    	$('#sun').css('display', 'none');
    	$('#moon').css('display', 'block');

    	$('.orbit').css({
	    	'bottom': height/10 + 'px',
	    	'left': hour+'%'
	    });
    }


    

});
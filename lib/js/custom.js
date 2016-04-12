$(document).ready(function(){

	"use strict";

	// proficiency bars
	$('#html').css('width', '95%');
	$('#css').css('width', '90%');
	$('#js').css('width', '75%');
	$('#wp').css('width', '75%');

	// hero sky background
	var d = new Date();
    var hour = ('0'+d.getHours().toString()).slice(-2);
    // Shows different sky gradient depending on time of day
    var sky = $('#hero').addClass('sky-gradient-' + hour);

    // Show's sun or moon depending on time of day
    if( (d.getHours() > 5) && (d.getHours() < 18) ) {
    	$('#sun').css('display', 'block');
    	$('#moon').css('display', 'none');
    } else {
    	$('#sun').css('display', 'none');
    	$('#moon').css('display', 'block');
    }

    $('.orbit').css({
    	'top': hour+'%',
    	'left': hour+'%'
    });

});
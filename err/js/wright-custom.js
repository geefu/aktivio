var $ = jQuery.noConflict();


/////////////////   Inner Alignment   ///////////////////
$(window).load(function() {
	
	// define vars
	WH = $(window).height();
	HH = $('#header').height();
	FH = $('#footer').height();
	
	// height for body
	$('body').css({'height': WH });
	
	// height for inner
	$('#wrapper').css({ 'height': WH - (HH + FH) }); 
	
	// define var
	WrH = $('#wrapper').height();
	
	// calculate extra space to set inner to middle
	exsp = WH - HH - WrH - FH;
	if ( exsp > 0 ){
		halfExsp = exsp/2;
		$('#wrapper').css({ 'margin-top': halfExsp , 'margin-bottom': halfExsp });
	}
	
	$('#wrapper').css({'display':'block'});
	
	// vertical align content from content box
	if ( $('#progressbar').is('*') ){
		innerH = $('.inner').height();
		h1H = $('h1').height();
		countdownH = $('#countdown').height();
		progressbarH = $('#progressbar').height();
		contactH = $('#contact-area').height();
		
		contOfContent = h1H + countdownH + progressbarH + contactH;
		
		if ( contOfContent < innerH ){
			diff = ( contentH - contOfContent ) / 4;
			marginInContent = diff - ( diff / 4 );
			$('h1').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
			$('#countdown').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
			$('#progressbar').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
			$('#contact-area').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
		}
	}else{
		innerH = $('.inner').height();
		h1H = $('h1').height();
		countdownH = $('#countdown').height();
		contactH = $('#contact-area').height();
		
		contOfContent = h1H + countdownH + contactH;
		
		if ( contOfContent < innerH ){
			diff = ( innerH - contOfContent ) / 3;
			marginInContent = diff - ( diff / 3 );
			$('h1').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
			$('#countdown').css({ 'margin-top': marginInContent +10, 'margin-bottom': marginInContent+10 });
			$('#contact-area').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
		}
	}
	
	emailWidth = $('#contact-area').width() - 115;
	$('#email').css({width:emailWidth});
	
});

/////////////////   Logic of Countdown   ///////////////////
$(function () {
	$('#imageLayout').countdown({
		until: target,
		format: 'DHMS',
		compact: true, 
    	layout: $('#imageLayout').html()
	})



	
	///////////////////   Content Box Swinging   ////////////////////
	var rotation = 0.5; 	// angle for rotation
	var swingtime = 2500; 	// time for swing in miliseconds
	
	function init() {
		$('.content').animate({rotate: rotation}, 0, function () {
			$('.content').css("display", "block");
			rotation *= -1;
			pendulumswing();
		});
	}
	function pendulumswing() {
		$('.content').animate({rotate: rotation},swingtime, "swing", function(){
			 rotation *= -1;
			 pendulumswing();
		});
	}
	init();
	

	///////////////////   Email Validator   /////////////////////
	setTimeout(function() {
		
		$.validator.setDefaults({
			submitHandler: function() { 
				var actionUrl = $('#subscribe_email').attr('action');
				
				$.ajax({
					type: 'GET',
					url: actionUrl,
					data: $('#subscribe_email').serialize(),
							success: function(msg){
							}
				});
				
				return false;
			}
		});
		
		$('#subscribe_email').validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: "Please enter a valid email address"	// if user introduce wrong email then will be displayed this message
			}
		});
	}, 200);


	///////////////////   Social   /////////////////////
	// hover on sochial tab
	$(".social_header").hover(function(){
		$(".social").stop().animate({bottom: '20px'}, 200);
		$("#arrow_indicator .down").css('display','block');
		$("#arrow_indicator .up").css('display','none');
		$(".social_header").css({padding: '15px 15px'});
	
		$(".social").hover(function(){
			$('.social_content').css({'-moz-box-shadow':'0 0 7px 1px #000','-webkit-box-shadow':'0 0 7px 1px #000','box-shadow':'0 0 7px 1px #000'});
		},
		function(){
			$(".social").stop().animate({bottom: -60}, 200);
			$("#arrow_indicator .down").css('display','none');
			$("#arrow_indicator .up").css('display','block');
			$(".social_header").css({padding: '5px 15px'});
			$('.social_content').css({'-moz-box-shadow':'none','-webkit-box-shadow':'none','box-shadow':'none'});
		})
	});
	
	/*// toush on sochial tab
	$('.social_header').toggle(function(){
		$('.social_content').css({'-moz-box-shadow':'0 0 7px 1px #000','-webkit-box-shadow':'0 0 7px 1px #000','box-shadow':'0 0 7px 1px #000'});
		$(".social").stop().animate({bottom: '20px'}, 200);
		$("#arrow_indicator .down").css('display','block');
		$("#arrow_indicator .up").css('display','none');
		$(".social_header").css({padding: '15px 15px'});
	},
	function(){
		$(".social").stop().animate({bottom: -60}, 200);
		$("#arrow_indicator .down").css('display','none');
		$("#arrow_indicator .up").css('display','block');
		$(".social_header").css({padding: '5px 15px'});
		$('.social_content').css({'-moz-box-shadow':'none','-webkit-box-shadow':'none','box-shadow':'none'});
	});*/
	
});
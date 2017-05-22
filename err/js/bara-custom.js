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
	innerH = $('.inner').height();
	h1H = $('h1').height();
	errorMessageH = $('.errorMessage').height();
	errorNavH = $('.errorNav').height();
	
	contOfContent = h1H + errorMessageH + errorNavH ;
	
	if ( contOfContent < innerH ){
		diff = ( innerH - contOfContent ) / 3;
		marginInContent = diff - ( diff / 3 );
		$('h1').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
		$('.errorMessage').css({ 'margin-top': marginInContent + 10 , 'margin-bottom': marginInContent + 10 });
		$('.errorNav').css({ 'margin-top': marginInContent , 'margin-bottom': marginInContent });
	}
	
	
	// if window height is smaller than 625px then scale content box
	if ( WH < 625 ){
		$('.chain2').css({ 'right' : '60px' });
		$('.chain1').css({ 'left' : '40px' });
		$('.inner').css({ 'top' : '73px', 'right' : '-175px', 'width' : '360px', 'height' : '240px' });
		$('h1').css({ 'font-size' : '46px' });
		$('.errorMessage').css({ 'font-size' : '18px' });
		$('.menu').css({ 'font-size' : '22px' });
		$('.menu a').css({ 'font-size' : '26px' });
	}
		
});



$(function() {
	
	///////////////////   Content Box Swinging   ////////////////////
	var rotation = 2; // angle for rotation
	var swingtime = 2500; // time for swing in miliseconds
	
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
		});
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
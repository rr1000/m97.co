$(document).ready(function(){
	// Mobile menu
	var menu = $('.burg .open');
	var close = $('.burg .close');
	var nav = $('.main-header nav');
	menu.on('click', function(){
		nav.show(0);
		$(this).hide(0);
		close.show(0);
	});
	close.on('click', function(){
		nav.hide(0);
		$(this).hide(0);
		menu.show(0);
	});
	// Animate header opacity if user is scrolling
	var header = $('.main-header');
	var $window = $(window);
	$window.scroll($.debounce( 250, true, function(){
		header.animate({
			opacity : 0.7
		}, 400, 'easeOutCubic');
	}));
	$window.scroll($.debounce( 250, function(){
		header.animate({
			opacity : 1
		}, 400, 'easeOutCubic');
	}));
	$(".imgOne" ).draggable({
		containment: ".about"
	});
	$(".imgTwo" ).draggable({
		containment: ".about"
	});
	$(".imgThree" ).draggable({
		containment: ".about"
	});
	// Work list
	var showWork = $("#showWork");
	var workList = $(".work-list");
	var closeButton = $(".work-list .close");
	// Show work list
	showWork.click(function(e){
		e.preventDefault();
		workList.fadeIn(250);
	});
	// Close work list
	closeButton.click(function(){
		workList.fadeOut(250);
	});
	// About
	var showAbout = $("#showAbout");
	var about = $(".about");
	var aboutCloseButton = $(".about .close");
	// Show about
	showAbout.click(function(e){
		e.preventDefault();
		about.fadeIn(250);
	});
	// Close about
	aboutCloseButton.click(function(){
		about.fadeOut(250);
	});
});

(function ($, window, document) {
	'use strict';
	$(function () {
		/*$(".slider-container").m( function () {
			$(this).css('cursor', 'pointer');
		});*/
		
		$(window).resize(function () {
			console.log($(window).width());
			if($(window).width() > 975 ) {
				$('.slider-container .caption-head').css({
					fontSize: '53px'
				});
				$('.slider-container .special-head').css({
					fontSize: '50px'
				});
			}
		});
		
	});
}(window.jQuery, window, document));
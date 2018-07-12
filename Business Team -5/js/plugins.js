(function ($, window, document) {
	'use strict';
	$(function () {
		
		/* slick slider plugin */
		$(".slider").slick({
			prevArrow: '.slider-container .prev', // change prev arrow of plugin to the custom prev arrow
			nextArrow: '.slider-container .next', // change next arrow of plugin to the custom next arrow
			autoplay: false,
			autoplaySpeed: 3000,
			infinite: false
		});
		
		/* fitText jquery plugin */
		$('.slider-container .caption-head').fitText(1.7, {
			minFontSize: '28px', // minimum font size of the head
			maxFontSize: '48px'	// maximum font size of the head
		});
		$('.slider-container .special-head').fitText(1.8, {
			minFontSize: '28px', // minimum font size of the head
			maxFontSize: '45px'	// maximum font size of the head
		});
		$('.about-us .title-head').fitText(1.8, {
			minFontSize: '25px',
			maxFontSize: '30px'
		});
		
		/* venobox */
		$('.venobox-video').venobox({
			closeBackground: 'none',
			autoplay: true,
			spinner: 'cube-grid'
		});
		
		
		
		
		
	});
}(window.jQuery, window, document));
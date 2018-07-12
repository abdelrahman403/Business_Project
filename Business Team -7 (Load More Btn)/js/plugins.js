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
		
		/* direction-aware-hover */
		$(' #da-thumbs > li ').each( function() { $(this).hoverdir({
			hoverDelay : 85
		}); } );
		
		/* venobox */
		$('.venobox-video').venobox({
			closeBackground: 'none',
			autoplay: true,
			spinner: 'cube-grid'
		});
		
		/* shuffle.js plugin */
//		var $gridContainer = $('.shuffle-container');
//		var sizer = $('.shuffle-container li');
//		
//		$gridContainer.shuffle({
//			sizer: sizer,
//			speed: 500,
//			easing: 'ease-out'
//		});
		
		var Shuffle = window.Shuffle;
		var element = document.querySelector('.shuffle-container');
		var sizer = element.querySelector('.shuffle-container li');

		var shuffleInstance = new Shuffle(element, {
		  itemSelector: '.shuffle-container li',
		  sizer: sizer // could also be a selector: '.my-sizer-element'
		});
		
		
		$('#btnAll').on('click', function (e) {
//			$gridContainer.shuffle('shuffle', function ($el, shuffle) {
//				return true;
//			});
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter();
		});
		$('#btnGraphic').on('click', function (e) {
//			$gridContainer.shuffle('shuffle', function ($el, shuffle) {
//				return $el.data('group') == 'graphic';
//			});
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('graphic');
		});
		$('#btnWeb').on('click', function (e) {
//			$gridContainer.shuffle('shuffle', function ($el, shuffle) {
//				return $el.data('group') == 'web';
//			});
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('web');
		});
		$('#btnPhoto').on('click', function (e) {
//			$gridContainer.shuffle('shuffle', function ($el, shuffle) {
//				return $el.data('group') == 'photography';
//			});
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('photography');
		});
		$('#btnPrint').on('click', function (e) {
//			$gridContainer.shuffle('shuffle', function ($el, shuffle) {
//				return $el.data('group') == 'print';
//			});
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('print');
		});
		
		
		
	});
}(window.jQuery, window, document));
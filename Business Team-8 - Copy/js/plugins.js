(function ($, window, document) {
	'use strict';
	$(function () {
		
		/* header slider plugin */
		$(".slider").slick({
			prevArrow: 'header .slider-container .prev', // change prev arrow of plugin to the custom prev arrow
			nextArrow: 'header .slider-container .next', // change next arrow of plugin to the custom next arrow
			autoplay: false,
			autoplaySpeed: 3000,
			infinite: false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: true,
						dotsClass:'slider-dots',	// dots container class
						customPaging: function() {
							return '<a' + (' ') + '</a>';	// used this to remove numbers from button
						}
					}
				}
			]
		});
		
		/* testimonials slider */
		$(".testimonials-slider").slick({
			prevArrow: '.testimonials .slider-container .arrow.prev',
			nextArrow: '.testimonials .slider-container .arrow.next',
			autoplay: false
		});
		
		/* clients slider */
		$(".clients-slider").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						autoplay: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: true,
						dotsClass:'slider-dots',	// dots container class
						customPaging: function() {
							return '<a' + (' ') + '</a>';	// used this to remove numbers from button
						}
					}
				}
			]
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
			autoplay: true,
			spinner: 'cube-grid'
		});
		$('.venobox').venobox({
			spinner: 'cube-grid',
			framewidth: '550px',
			frameheight: '580px',
			numeratio: true,
			infinigall: true
		});
		
		
		var Shuffle = window.Shuffle;
		var element = document.querySelector('.shuffle-container');
		var sizer = element.querySelector('.shuffle-container li');

		var shuffleInstance = new Shuffle(element, {
		  itemSelector: '.shuffle-container li',
		  sizer: sizer, // could also be a selector: '.my-sizer-element'
		  speed: 700
		});
		
		
		$('#btnAll').on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter();
		});
		$('#btnGraphic').on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('graphic');
		});
		$('#btnWeb').on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('web');
		});
		$('#btnPhoto').on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('photography');
		});
		$('#btnPrint').on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('active');
			$('.our-portfolio li.active').not($(this).parent()).removeClass('active');
			shuffleInstance.filter('print');
		});
		
		
	});
}(window.jQuery, window, document));

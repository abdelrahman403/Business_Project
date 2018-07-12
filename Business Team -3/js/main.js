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
		
		// word rotate plugin
		$.fn.wordRotatePlugin = function () {
			
			var words = document.getElementsByClassName('word');
			var wordArray = [];
			var currentWord = 0;

			words[currentWord].style.backgroundColor = "#337ab7";
			words[currentWord].style.opacity = 1;
			
			for (var i = 0; i < words.length; i++) {
				splitLetters(words[i]);
			}

			function changeWord() {
				var cw = wordArray[currentWord];
				var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
				for (var i = 0; i < cw.length; i++) {
					animateLetterOut(cw, i);
				}

				for (var i = 0; i < nw.length; i++) {
					nw[i].className = 'letter behind';
					nw[0].parentElement.style.opacity = 1;
					animateLetterIn(nw, i);
				}

				currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
				words[currentWord].style.color = "#fff";
			}

			function animateLetterOut(cw, i) {
				setTimeout(function() {
					cw[i].className = 'letter out';
				}, i*80);
			}

			function animateLetterIn(nw, i) {
				setTimeout(function() {
					nw[i].className = 'letter in';
				}, 340+(i*80));
			}

			function splitLetters(word) {
				var content = word.innerHTML;
				word.innerHTML = '';
				var letters = [];

				for (var i = 0; i < content.length; i++) {
					var letter = document.createElement('span');
					letter.className = 'letter';
					letter.innerHTML = content.charAt(i);
					word.appendChild(letter);
					letters.push(letter);
				}

				wordArray.push(letters);
			}

			words[currentWord].style.color = "#fff";
			changeWord();
			setInterval(changeWord, 4000);
			
		}
		$('.about-us .title-head').wordRotatePlugin();
		
	});
}(window.jQuery, window, document));
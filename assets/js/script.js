// Fires automatically on DOM ready
(function() {

	function displayNavMobile(e) {
		var target = document.querySelector('ul');

		target.classList.toggle('is-open');
	}

	function toggleNav() {
		// Defining targets
		var button = document.querySelector('#menu-icon');
		var btnClose = document.querySelector('#menu-close');

		// click event
		if ( button ) {
			button.addEventListener('click', displayNavMobile, false);
			btnClose.addEventListener('click', displayNavMobile, false);
			$('nav ul').each(function() {
					$("li a", this).each(function() {
						this.addEventListener('click', displayNavMobile, false);
				});
			});
		}
	}

	toggleNav();


	$( document ).scroll(function() {
		var nav = $('nav');
		var origOffsetY = $('header').height() - $('nav').height();
		
		if ($(window).scrollTop() >= origOffsetY) {
			nav.addClass('sticky');
		} else {
			nav.removeClass('sticky');
		}
	});

	//create instance
    $('#webChart').easyPieChart({
        animate: 2000,
		scaleColor: false,
		lineWidth: 12,
		size: 200,
		lineCap: 'square',
		trackColor: '#e5e5e5',
		barColor: '#13bef2' 
    });
		//create instance
    $('#logicielChart').easyPieChart({
        animate: 2000,
		scaleColor: false,
		lineWidth: 12,
		size: 200,
		lineCap: 'square',
		trackColor: '#e5e5e5',
		barColor: 'yellow' 
    });
		//create instance
    $('#outilsChart').easyPieChart({
        animate: 2000,
		scaleColor: false,
		lineWidth: 12,
		size: 200,
		lineCap: 'square',
		trackColor: '#e5e5e5',
		barColor: 'lime' 
    });
	
}());
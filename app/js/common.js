$(document).ready(function () {

	let mySwiper = new Swiper('.swiper-container', {
		// initialSlide: 1,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				spaceBetween: 110
			}
		}
	})

	mySwiper.slideTo(1, 0, false);

	wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       false,       // default
		live:         true        // default
	}
	)
	wow.init();


	let $popap = $('.popap'); 
	$('.btn').not('.btn.popap__btn').on('click', function() {
		$popap.toggleClass('active');
	});
	$('.popap__close').on('click', function() {
		$popap.toggleClass('active');
	});

});
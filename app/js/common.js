$(document).ready(function () {

	// Swiper slider itialize --------------------------------------

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

	// Wow animation itialize --------------------------------------

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

	// Popap toggle  --------------------------------------

	let $popap = $('.popap'); 
	$('.btn').not('.btn.popap__btn').on('click', function() {
		$popap.toggleClass('active');
	});
	$('.popap__close').on('click', function() {
		$popap.toggleClass('active');
	});

	// Sent form to email  --------------------------------------

	$("#popap__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
			$popap.removeClass('active');
		});
		return false;
	});

});
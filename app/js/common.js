/* window.onload = function () {
	
	console.log('js is working!!!'); 

} */

$(document).ready(function () {

	let mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		initialSlide: 1,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 117,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})

	console.log('JQuery!!!');

});
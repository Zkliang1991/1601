var sw = new Swiper(".swiper-container", {
	pagination: '.swiper-pagination',
	slidesPerView: 1,
	autoplay:2000,
	centeredSlides: true,
	coverflow: {
		rotate: 30,
		stretch: 10,
		depth: 60,
		modifier: 2,
		slideShadows: true
	},
	longSwiperRatio: 0.5,
});

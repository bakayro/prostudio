var lazyLoadInstance = new LazyLoad({});

new WOW().init();

/* HEADER Fixed after scrolling */
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top > 120) $("header").addClass('fixed');
	else $("header").removeClass('fixed');
});

$('.burger').click(function () {
	$('.mobile-menu').toggleClass('show-menu');
});

$('.main-page-slider').slick({
	dots: false,
	infinite: true,
	arrows: false,
	autoplay: true,
	speed: 900,
	autoplaySpeed: 3500,
	fade: true
});

$('.main-page-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	$('.main-page-slider .slick-active').addClass('zooming');
});

$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	arrows: false,
	dots: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	fade: true,
	asNavFor: '.slider-nav'
});

/* SCROLL UP BUTTON */
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top > 1000) $(".scroll-up").addClass('fixed');
	else $("scroll-up").removeClass('fixed');
});

$(".scroll-up").click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});

// $(".anchor-link").click(function(e){
// 	var data_scroll = $($(this).data("scroll"));
// 	$("html, body").animate({scrollTop: data_scroll.offset().top},"slow","swing",function(){});
// 	return false;
// });
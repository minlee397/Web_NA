(function ($) {

	"use strict";

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	});


	var widthWindow = window.outerWidth;
	var slidesToShow = 2;
	var listCarouselBlog = 3;
	if (widthWindow < 768){
		slidesToShow = 1;
	}
	if (widthWindow < 769){
		listCarouselBlog = 2;
	}
	if (widthWindow < 768){
		listCarouselBlog = 1;
	}

	$(".slick-carousel").slick({
		infinite: true,
		slidesToShow: slidesToShow, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		arrows: false,
		dots: true, // Adds the dots on the bottom
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".slick-carousel2").slick({
		infinite: true,
		slidesToShow: 1, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".slick-carousel3").slick({
		infinite: true,
		slidesToShow: 1, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".listCarouselBlog").slick({
		infinite: true,
		slidesToShow: listCarouselBlog, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		//arrows: true,
		autoplay: true,
		autoplaySpeed: 2000
		
	});

	$(".title-level1 .content_SanPham3 ul li").on("click", function () {
		$(this).toggleClass("textColspan");
		var icon = $(this).find("span")[0];
		if ($(icon).hasClass("ic-right-light")) {
			$(icon).removeClass("ic-right-light");
			$(icon).addClass("ic-down-light");
		} else {
			$(icon).removeClass("ic-down-light");
			$(icon).addClass("ic-right-light");
		}
	});

	$(".boxScrollTop").click(function(){
		window.scrollTo({top: 0, behavior: 'smooth'});
	});
})(jQuery);
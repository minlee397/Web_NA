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


	$(".slick-carousel").slick({
		infinite: true,
		slidesToShow: 2, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		arrows: false,
		dots: true, // Adds the dots on the bottom
	});

	$(".slick-carousel2").slick({
		infinite: true,
		slidesToShow: 1, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		arrows: true,
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
	})


})(jQuery);
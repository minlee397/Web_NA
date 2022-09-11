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
	if (widthWindow < 768) {
		slidesToShow = 1;
	}
	if (widthWindow < 769) {
		listCarouselBlog = 2;
	}
	if (widthWindow < 768) {
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

	$(".listCarouselCareers").slick({
		infinite: true,
		slidesToShow: 1, // Shows a three slides at a time
		slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
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

	$(".boxScrollTop").click(function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	$(".fileCV").click(function () {
		$("#ctrFileCV").click();
	})

	$("#ctrFileCV").change(function () {
		var input = this;
		if (input.files != undefined && input.files.length > 0) {
			$("#txtCVFile").val(input.files[0].name);
		}
	});

	$("body").click(function () {
		if (!$(event.target).closest('.navbar-nav').length) {
			$(".menu-level1").css('display', 'none');
		}

	});
	$("#giaiphap").click(function () {
		if ($(".menu-level1").css('display') == "none")
			$(".menu-level1").css('display', 'block');
		else
			$(".menu-level1").css('display', 'none');
	});


	SetPositionImage();

})(jQuery);

function SetPositionImage() {
	var boxContentImage_1 = $("#boxContentImage_1");
	var WithContentImage_1 = boxContentImage_1.width();
	var GroupImage_1 = $("#GroupImage_1");
	var dataGroupImage_1 = GroupImage_1.find(".divitem");

	var fristLine = true;
	var TotalWith = 0;
	var bestWidth = 0;

	var ListHighImage = [];

	if (dataGroupImage_1 != undefined && dataGroupImage_1.length > 0) {
		for (let index = 0; index < dataGroupImage_1.length; index++) {
			const element = dataGroupImage_1[index];
			var boxImage = $(element).find(".boxImage");
			var heightImage = $(boxImage).find("img").height();

			if (fristLine) {
				setPosition(boxImage, bestWidth, 0);
				// Luu lai danh sach chieu cao cua dong dau tien
				ListHighImage.push({
					with: bestWidth,
					height: heightImage
				});
				bestWidth += 252;
				if ((bestWidth + 252) >= WithContentImage_1) {
					TotalWith = bestWidth;
					bestWidth = 0;
					fristLine = false;
				}
			} else { // Không phải dòng đầu nữa thì tìm trong danh sách render theo obj nao co chieu cao lon nhat
				var objMax = ListHighImage.reduce(function (prev, curr) {
					return prev.height < curr.height ? prev : curr;
				});

				setPosition(boxImage, bestWidth, objMax.height);
				bestWidth += 252;
				objMax.height += heightImage;
				if ((bestWidth + 252) >= WithContentImage_1) {
					bestWidth = 0;
					fristLine = false;
				}
			}


		}

		// Set lai kich thuoc chieu cao cua boxContent
		var objMax = ListHighImage.reduce(function (prev, curr) {
			return prev.height < curr.height ? prev : curr;
		});
		boxContentImage_1.css("height", objMax.height +"px");
		boxContentImage_1.css("width", TotalWith +"px");
	}
}

function setPosition(element, x, y) {
	$(element).css("transform", "translate(" + x + "px, " + y + "px)")
}
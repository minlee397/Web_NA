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

	$("body").click(function (event) {
		if (!$(event.target).closest('.ic-down-light').length) {
			$(".menu-level1").css('display', 'none');
		}
	});
	$("#giaiphap").click(function () {
		if ($(".menu-level1").css('display') == "none")
			$(".menu-level1").css('display', 'block');
		else
			$(".menu-level1").css('display', 'none');
	});

	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function () {
		$("body").css("overflow", "auto");
		modal.style.display = "none";
	}

	var preEle = $("#prevImage");
	var nextEle = $("#nextImage");
	preEle.click(function () {
		moveImage(false);
	});

	nextEle.click(function () {
		moveImage(true);
	});


	var GroupImage_1 = $("#GroupImage_1");
	var dataGroupImage_1 = GroupImage_1.find(".divitem");
	configModal(dataGroupImage_1, modal);

	var GroupImage_2 = $("#GroupImage_2");
	var dataGroupImage_2 = GroupImage_2.find(".divitem");
	configModal(dataGroupImage_2, modal);

	var GroupImage_3 = $("#GroupImage_3");
	var dataGroupImage_3 = GroupImage_3.find(".divitem");
	configModal(dataGroupImage_3, modal);

	var GroupImage_4 = $("#GroupImage_4");
	var dataGroupImage_4 = GroupImage_4.find(".divitem");
	configModal(dataGroupImage_4, modal);

	SetPositionImage("boxContentImage_1", "GroupImage_1");
	SetPositionImage("boxContentImage_2", "GroupImage_2");
	SetPositionImage("boxContentImage_3", "GroupImage_3");
	SetPositionImage("boxContentImage_4", "GroupImage_4");

})(jQuery);

function SetPositionImage(boxContentImage, GroupImage) {
	var boxContentImage_1 = $("#" + boxContentImage);
	var WithContentImage_1 = boxContentImage_1.width();
	var GroupImage_1 = $("#" + GroupImage);
	var dataGroupImage_1 = GroupImage_1.find(".divitem");

	var fristLine = true;
	var TotalWith = 0;
	var bestWidth = 0;

	var ListHighImage = [];

	if (dataGroupImage_1 != undefined && dataGroupImage_1.length > 0) {
		for (let index = 0; index < dataGroupImage_1.length; index++) {
			const element = dataGroupImage_1[index];
			var boxImage = $(element).find(".boxImage");
			var heightImage = $(boxImage).find("img").height() + 20;
			if ($(boxImage).find("img") == undefined || $(boxImage).find("img").length == 0)
				heightImage = $(boxImage).find("video").height() + 34;
			boxImage.css("height", heightImage + "px");
			if (fristLine) {
				setPosition(boxImage, bestWidth, 0);
				// Luu lai danh sach chieu cao cua dong dau tien
				ListHighImage.push({
					width: bestWidth,
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

				setPosition(boxImage, objMax.width, objMax.height);
				objMax.height += heightImage;
			}


		}

		// Set lai kich thuoc chieu cao cua boxContent
		var maxHeight = Math.max.apply(Math, ListHighImage.map(function (o) {
			return o.height;
		}))
		boxContentImage_1.css("height", maxHeight + "px");
		boxContentImage_1.css("width", TotalWith + "px");
	}
}

function setPosition(element, x, y) {
	$(element).css("transform", "translate(" + x + "px, " + y + "px)")
}

function configModal(dataGroupImage, modal) {
	$(dataGroupImage).click(function (e) {
		$("body").css("overflow", "hidden");
		modal.style.display = "block";
		var IsImage = true;
		var linkurl = $(e.currentTarget).find("img").attr("src");
		if (linkurl == undefined || linkurl == "") {
			linkurl = $(e.currentTarget).find("video").attr("src");
			IsImage = false;
		}

		var boxImage = $(e.currentTarget).find(".boxImage");
		var ItemId = boxImage.attr("data-itemid");
		var ImgId = boxImage.attr("data-imgid");

		if (linkurl != undefined && linkurl != "") {
			if (IsImage) {
				$("#modalPreview").attr("data-itemid", ItemId);
				$("#modalPreview").attr("data-imgid", ImgId);
				$("#modalPreview").attr("src", linkurl);

				$("#modalPreview").css("display", "block");
				$("#modalPreviewVideo").css("display", "none");
				$("#modalPreviewVideo").attr("src", "");
			} else {
				$("#modalPreviewVideo").attr("data-itemid", ItemId);
				$("#modalPreviewVideo").attr("data-imgid", ImgId);
				$("#modalPreviewVideo").attr("src", linkurl);

				$("#modalPreview").css("display", "none");
				$("#modalPreviewVideo").css("display", "block");
				$("#modalPreview").attr("src", "");
			}
		}
	});
}

function moveImage(isNext) {
	var IsImage = true;
	var linkurl = $("#modalPreview").attr("src");
	if (linkurl == undefined || linkurl == "") {
		linkurl = $("#modalPreviewVideo").attr("src");
		IsImage = false;
	}

	var ItemId = "";
	var ImgId = "";
	if (IsImage) {
		ItemId = $("#modalPreview").attr("data-itemid");
		ImgId = $("#modalPreview").attr("data-imgid");
	} else {
		ItemId = $("#modalPreviewVideo").attr("data-itemid");
		ImgId = $("#modalPreviewVideo").attr("data-imgid");
	}

	var boxImage = $(".boxImage[data-itemid='" + ItemId + "'][data-imgid='" + ImgId + "']");
	if (boxImage != undefined) {
		var divItem = boxImage.parent();

		var nextDivItem = divItem.next();
		if (!isNext)
			nextDivItem = divItem.prev();

		if (nextDivItem != undefined && nextDivItem.length > 0) {
			var nextBoxImage = nextDivItem.find(".boxImage");
			var nextIsImage = true;
			var nextLinkurl = nextDivItem.find("img").attr("src");
			if (nextLinkurl == undefined || nextLinkurl == "") {
				nextLinkurl = nextDivItem.find("video").attr("src");
				nextIsImage = false;
			}

			var nextItemId = nextBoxImage.attr("data-itemid");
			var nextImgId = nextBoxImage.attr("data-imgid");

			if (nextIsImage) {
				$("#modalPreview").attr("data-itemid", nextItemId);
				$("#modalPreview").attr("data-imgid", nextImgId);
				$("#modalPreview").attr("src", nextLinkurl);

				$("#modalPreview").css("display", "block");
				$("#modalPreviewVideo").css("display", "none");
				$("#modalPreviewVideo").attr("src", "");
			} else {
				$("#modalPreviewVideo").attr("data-itemid", nextItemId);
				$("#modalPreviewVideo").attr("data-imgid", nextImgId);
				$("#modalPreviewVideo").attr("src", nextLinkurl);

				$("#modalPreview").css("display", "none");
				$("#modalPreviewVideo").css("display", "block");
				$("#modalPreview").attr("src", "");
			}
		}
	}
}
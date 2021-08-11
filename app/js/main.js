

$(function () {


	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true,
		spacing: "2px"
	});

	$('.trend__wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false,
	});

	$(".header__menu-btn").on("click", function () {
		$(".header__menu").slideToggle()
	})

	$(".header__user-menu").on("click", function () {
		$(".header__panel").toggleClass("header__panel-on")
	})

	$('.list__inner .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.list__inner').find('.tab-item').removeClass('active-tab').hide();
		$('.list__inner .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	var mixer = mixitup('.products__box')
})
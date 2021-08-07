

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

	var mixer = mixitup('.products__box')
})


$(function () {

	var mixer = mixitup('.products__box')
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
})


$(function () {

	$('.list__inner .tab, .common__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.list__inner, .common__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.list__inner .tabs , .common__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$(".header__menu-btn").on("click", function () {
		$(".header__menu").slideToggle()
	})
	$(".header__user-menu").on("click", function () {
		$(".header__panel").toggleClass("header__panel-on")
	})
	$('input, select').styler();

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



	noUiSlider.create(slider, {
		start: [0, 600],
		tooltips: true,
		connect: true,
		format: {
			from: function (value) {
				return parseInt(value);
			},
			to: function (value) {
				return parseInt(value) + "$";
			}
		},
		range: {
			'min': 0,
			'max': 1000
		}
	});
	var mixer = mixitup('.products__box')

})
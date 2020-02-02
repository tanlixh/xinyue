window.onload = function () {
	var Fadetext = {};
	Fadetext.arow = 0;
	Fadetext.Flag = false;
	Fadetext.viewWidth = document.body.clientWidth;
	Fadetext.viewHeight = (window.innerHeight) ? window.innerHeight : document.body.clientHeight;
	Fadetext.offsetdom = [];
	Fadetext.offsetinx = [];
	Fadetext.init = function (option) {
		this.option = $.extend({}, option);
		this.className = this.option.className || '';
		this.speed = this.option.speed || '';
		this.bindCarousely();
	}

	Fadetext.bindCarousely = function () {
		var $progress = $('.swiper-pagination-two');
		var $img = $('.slipe-box').find('.swiper-slide');
		var $k = $('.section-img').find('img');
		var mySwiper = new Swiper('.slider-two', {
			loop: true,
			autoplay: 5000,
			speed: 800,
			prevButton: '.slipe-left',
			nextButton: '.slipe-right',
			pagination: '.swiper-pagination-two',
			paginationClickable: true,
			autoplayDisableOnInteraction: false,
			paginationBulletRender: function (swiper, index, className) {
				return '<div class="' + className + '"><p></p></div>';
			},
			onTransitionEnd: function (swiper) {
				if (swiper.activeIndex == 1) {
					setTimeout(function () {
						$progress.find('div').eq(0).find('p').addClass('login');
					}, 1);
				}
				$progress.find('p').removeClass('login');
				$progress.find('div').eq(swiper.activeIndex == swiper.imagesLoaded - 1 ? 0 : swiper.activeIndex - 1).find('p').addClass('login');

			},
			onSlideChangeStart: function (swiper) {
				$k.eq(swiper.activeIndex == swiper.imagesLoaded - 1 ? 0 : swiper.activeIndex - 1).css('opacity', '1').siblings().css('opacity', '0');
			}
		})
		$(document).on('mousemove mouseout', ".slipe-box .swiper-wrapper", function (e) {
			if (e.type === 'mousemove') {
				(Fadetext.viewWidth / 2 > e.pageX) ? $('.slipe-left').addClass('arowshow').siblings('.slipe-right').removeClass('arowshow'): $('.slipe-right').addClass('arowshow').siblings('.slipe-left').removeClass('arowshow');
			} else {
				$('.slipe-left,.slipe-right').removeClass('arowshow');
			}
		})


	}
	

	//初始化
	var init = function () {};

	Fadetext.init();
}

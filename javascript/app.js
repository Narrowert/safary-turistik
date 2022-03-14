$(function() {
	$('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

});

$(function() {
	$('.gallery-item__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

const swiper = new Swiper('.gallery__slider', {
	loop: false,
	speed: 500,
	spaceBetween: 30,
  
	navigation: {
	  nextEl: '.gallery__next',
	  prevEl: '.gallery__prev',
	},
  });

  /* Mask */
$(function () {
$("#phone").mask("(99) 999-99-99");
});

/* Menu burger */
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
document.querySelector('.burger').addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('burger--active');
	nav.classList.toggle('nav--active');
	overlay.classList.toggle('overlay--active');
});


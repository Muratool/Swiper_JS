'use strict';

new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },

		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass) {
		//   return 'Фото <span class="' + currentClass +'">' + '</span>' + ' из ' + '<span class = "' + totalClass +'"></span';
		// }

		// type: 'progressbar'
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},

	simulateTouch: true,
});

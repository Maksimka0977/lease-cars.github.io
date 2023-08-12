const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabIContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
element.addEventListener('click', open);
});

function open(evt){
	const tabTarget = evt.currentTarget; //Тот на кого мы нажали
	const button = tabTarget.dataset.button;


	tabItem.forEach(function(item){
		item.classList.remove('tabs__btn-item--active');
		});

		tabTarget.classList.add('tabs__btn-item--active');	

		tabIContent.forEach(function(item){
			item.classList.remove('tabs__content-item--active');
		});

		document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
};

//Toggle
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
menu.classList.toggle('menu__list--active');
});		



const swiper = new Swiper(".swiper", {
	pagination: {
	el: ".swiper-pagination",
	},
	effect: "fade",
	autoplay: {
	delay: 2800,
	disableOnInteraction: false,
	},	
	});
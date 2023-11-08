`use strict`;
// var datetime = new Date().toLocaleTimeString();
// console.log(datetime); // it will represent date in the console of developers tool
// document.getElementById('time').textContent = datetime; // represent on html page
function updateTime() {
	var datetime = new Date().toLocaleTimeString();
	console.log(datetime);
	document.getElementById('time').textContent = datetime;
}

// Call updateTime function initially
updateTime();

// Use setInterval to update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

let changeLanguage = document.getElementById('change-language');
let headerText = document.getElementById('header-text');
let title = document.getElementById('title');
let myP = document.getElementById('myP');
let price = document.getElementById('price');
let chooseColor = document.getElementById('chooseColor');
let textContainer = document.getElementById('text-container');

let red = document.getElementById('red');
let pink = document.getElementById('pink');
let black = document.getElementById('black');
let purple = document.getElementById('purple');
let blue = document.getElementById('blue');
let changImg = document.getElementById('change-img');

red.addEventListener('click', () => {
	changImg.style.backgroundImage = `url(red.png)`;
});

pink.addEventListener('click', () => {
	changImg.style.backgroundImage = `url(pink.png)`;
});

black.addEventListener('click', () => {
	changImg.style.backgroundImage = `url(black.png)`;
});

purple.addEventListener('click', () => {
	changImg.style.backgroundImage = `url(purple.png)`;
});

blue.addEventListener('click', () => {
	changImg.style.backgroundImage = `url(purp.png)`;
});

changeLanguage.addEventListener('click', () => {
	textContainer.style.textAlign = 'right';
	headerText.innerHTML = 'تسوق من افضل الساعات لدينا';
	title.innerHTML = 'ساعة ذكية';
	myP.innerHTML = 'شاشة لمس كاملة، تنبيه بالمكالمات، أوضاع رياضية، IP68، Sp02 ساعة ذكية';
	price.innerHTML = '300 ريال';
	chooseColor.innerHTML = 'اختر لونك المفضل';
});

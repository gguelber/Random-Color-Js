const hexNumbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
const hexColor = document.querySelector('.hexColor');
const body = document.querySelector('body');
const btnColor = document.querySelector('.btnColor');

btnColor.addEventListener('click', changeColor);

function changeColor() {
	let hexString = '#';

	for (let i = 0; i < 6; i++) {
		hexString += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
	}

	body.style.backgroundColor = hexString;
	hexColor.innerHTML = hexString;
}

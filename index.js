//VARIABLES
const levelTitle = document.querySelector("#level-title");
const buttons = [...document.querySelectorAll(".btn")];

//SOUNDS
const blue = new Audio("./sounds/blue.mp3");
const green = new Audio("./sounds/green.mp3");
const red = new Audio("./sounds/red.mp3");
const yellow = new Audio("./sounds/yellow.mp3");
const wrong = new Audio("./sounds/wrong.mp3");

//GAME VARIABLES
let level = 1;
let first;
let arrayButtonsId = [];
let orderOfFields = [];
const gameOver = "Game Over, Press Any Key to Restart";

for (let i = 0; i < buttons.length; i++) {
	const button = buttons[i];
	arrayButtonsId.push(button.id);
	// button.addEventListener("click", function () {

	// });
}

//LISTENERS
window.addEventListener("keydown", startGame);

// for (let i = 0; i < arrayButtonsId.length; i++) {
// 	const button = arrayButtonsId[i];
// 	// 	button.addEventListener("click", function () {
// 	// 		orderOfFields.push(Math.floor(Math.random() * arrayButtonsId.length));
// 	// 	});
// }

//FUNCTIONS
function firstColor() {
	first = Math.floor(Math.random() * arrayButtonsId.length);
	orderOfFields.push(arrayButtonsId[first]);
}

function nextColors() {
	let randomColor = Math.floor(Math.random() * arrayButtonsId.length);
	orderOfFields.push(arrayButtonsId[randomColor]);
}

function startGame() {
	levelTitle.textContent = `Level ${level}`;
}

firstColor();
//CONSOLE LOGS
// console.log(buttons);
// console.log(arrayButtonsId);
console.log(orderOfFields);

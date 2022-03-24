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
	button.addEventListener("click", function () {
		makeSound(this.id);
		button.classList.add("pressed");
		setTimeout(function(){
			button.classList.remove("pressed")
		}, 100);
	});
}

//LISTENERS
window.addEventListener("keydown", startGame);

//FUNCTIONS
function firstColor() {
	first = Math.floor(Math.random() * arrayButtonsId.length);
	orderOfFields.push(arrayButtonsId[first]);
}

function addRandomColor() {
	let randomColor = Math.floor(Math.random() * arrayButtonsId.length);
	orderOfFields.push(arrayButtonsId[randomColor]);
}

function startGame() {
	levelTitle.textContent = `Level ${level}`;
	makeSound(orderOfFields[0]);
}

function makeSound(key) {
	switch (key) {
		case "blue":
			blue.play();
			break;
		case "green":
			green.play();
			break;
		case "red":
			red.play();
			break;
		case "yellow":
			yellow.play();
			break;
		case "wrong":
			wrong.play();
			break;
		default:
			console.log(key);
	}
}

firstColor();
//CONSOLE LOGS
// console.log(buttons);
// console.log(arrayButtonsId);
console.log(orderOfFields);

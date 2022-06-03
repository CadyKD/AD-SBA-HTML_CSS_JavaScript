import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

var lastRenderTime = 0;
const gameBoard = document.getElementById('snake-board');
let gameOver = false;

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function main(currentTime) {
	if (gameOver) {
		if (confirm('You Died! Press OK to restart.')) {
			window.location = '/';
		};
		return;
	};
	// console.log('callback');
	window.requestAnimationFrame(main);
	if (((currentTime - lastRenderTime) / 1000) < (1 / SNAKE_SPEED)) {
		return;
	}
	lastRenderTime = currentTime;
	// console.log('Update');
	update();
	// console.log('Draw');
	draw();
}

window.requestAnimationFrame(main);

function update() {
	checkDeath();
	updateSnake();
	updateFood();
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
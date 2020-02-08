import { canvas, ctx } from './canvas.js';

export var lives = 0;
export var score = 0;

export function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('Score: ' + score, 8, 20);
  }

export function drawLives() {
    ctx.font = '16px Ariel';
    ctx.fillStyle = 'red';
    ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
  }
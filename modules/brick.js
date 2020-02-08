import { ctx } from './canvas.js';

var brickColumns = 5;
var brickRows = 3;
var brickHeight = 20;
var brickWidth = 75;
var brickColor = 'brown';
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var brickPadding = 10;

//2d brick array
var bricks = [];

for (let c = 0; c < brickColumns; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRows; r++) {
    bricks[c][r] = { x: 10, y: 10, status: 1 };
  }
}

export function draw() {
  for (let c = 0; c < brickColumns; c++) {
    for (let r = 0; r < brickRows; r++) {
      var b = bricks[c][r];
      b.x = (c* (brickWidth + brickPadding) + brickOffsetLeft);
      b.y = (r* (brickHeight + brickPadding) + brickOffsetTop);
      if (b.status == 1) {
        ctx.beginPath();
        ctx.rect(b.x, b.y, brickWidth, brickHeight);
        ctx.fillStyle = brickColor;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

//console.log(bricks);

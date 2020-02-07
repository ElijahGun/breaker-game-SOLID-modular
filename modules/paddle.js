import { canvas, ctx } from './canvas.js';

export function factory() {
    //default paddle location vars
    var defHeight = 10;
    var defWidth = 75;
    var defX = (canvas.width - defWidth) / 2;
    var defY = canvas.height - defHeight;
    var defDX = 0;
    var defDY = 0;
    var defColor = 'green';
    return {
        height: defHeight,
        width: defWidth,
        x: defX,
        y: defY,
        dx: defDX,
        dy: defDY,
        color: defColor
    }
}

export function draw(paddle) {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.color;
    ctx.fill();
    ctx.closePath();
}

export var gamePaddle = factory();

//used to regulate paddle movement
var rightPressed = false;
var leftPressed = false;

export function moveHoriz(paddle) {
    if (rightPressed && paddle.x + paddle.width < canvas.width) {
        paddle.x += 7;
    } else if (leftPressed && paddle.x > 0) {
        paddle.x += -7;
    }
}

function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
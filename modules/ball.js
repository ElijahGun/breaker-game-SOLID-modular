import { canvas, ctx } from './canvas.js';

export function factory() {
    //default ball position vars
    var defRadius = 10;
    var defX = (canvas.width - defRadius) / 2;
    var defY = canvas.height - 30;
    var defDX = 2;
    var defDY = -2; 
    var defColor = 'blue';
    return {
        radius: defRadius,
        x: defX,
        y: defY,
        dx: defDX,
        dy: defDY,
        color: defColor
    }
}

export function draw(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, Math.PI*2, false);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

export var gameBall = factory();

export function moveHoriz(ball) {
    ball.x += ball.dx;
}

export function moveVert(ball) {
    ball.y += ball.dy;
}

export function switchHoriz(ball) {
    ball.dx = -ball.dx;
}

export function switchVert(ball) {
    ball.dy = -ball.dy;
}

export function wallBounce(ball) {
    if (ball.x + ball.radius > canvas.width || ball.x < 0) {
      switchHoriz(ball);
    } else if (ball.y < 0 ) {
        switchVert(ball);
}
}

export function paddleBounce(ball, paddle1, paddle2) {
    if (ball.y > canvas.height - paddle1.height && ball.x > paddle1.x && ball.x < paddle1.x + paddle1.width ) {
        switchVert(ball);
    }
}

//(ball.y > canvas.height && ball.x > paddle1.x && ball.x < paddle1.x + paddle1.width )
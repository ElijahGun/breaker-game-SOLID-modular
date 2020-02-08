import * as ball from './modules/ball.js';
import * as paddle from './modules/paddle.js';
import { clear, canvas } from './modules/canvas.js';

//=======================
//development testing
//=======================
var testBall = ball.factory();
testBall.y = canvas.height - (paddle.gamePaddle.height + testBall.radius);

function runGame() {
    clear();
    ball.draw(testBall);
    ball.draw(ball.gameBall);
    ball.moveHoriz(ball.gameBall);
    ball.moveVert(ball.gameBall);
    ball.wallBounce(ball.gameBall);
    ball.paddleBounce(ball.gameBall, paddle.gamePaddle);
    paddle.draw(paddle.gamePaddle);
    paddle.moveHoriz(paddle.gamePaddle);
}

setInterval(runGame, 10);

console.log(paddle.factory());



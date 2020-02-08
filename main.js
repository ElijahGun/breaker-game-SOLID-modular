import * as ball from './modules/ball.js';
import * as paddle from './modules/paddle.js';
import * as brick from './modules/brick.js';
import { clear, canvas } from './modules/canvas.js';

//=======================
//development testing
//=======================
var testBall = ball.factory();
testBall.y = canvas.height - (paddle.gamePaddle.height + testBall.radius);
//more testing


function runGame() {
    clear();
    ball.draw(testBall);        //dev test ball
    ball.draw(ball.gameBall);
    ball.moveHoriz(ball.gameBall);
    ball.moveVert(ball.gameBall);
    ball.wallBounce(ball.gameBall);
    ball.paddleBounce(ball.gameBall, paddle.gamePaddle);
    paddle.draw(paddle.gamePaddle);
    paddle.moveHoriz(paddle.gamePaddle);
    //bricks
    brick.draw();
}

setInterval(runGame, 10);

console.log(paddle.factory());
console.log(brick.brickColumns);






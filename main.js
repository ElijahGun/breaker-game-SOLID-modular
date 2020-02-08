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
var ball1 = ball.gameBall;

function runGame() {
    clear();
    ball.draw(testBall);        //dev test ball
    ball.draw(ball1);
    ball.moveHoriz(ball1);
    ball.moveVert(ball1);
    ball.wallBounce(ball1);
    ball.paddleBounce(ball1, paddle.gamePaddle);
    paddle.draw(paddle.gamePaddle);
    paddle.moveHoriz(paddle.gamePaddle);
    //bricks
    brick.draw();
    brick.collision(ball1);
}

setInterval(runGame, 10);

console.log(paddle.factory());
console.log(brick.brickColumns);






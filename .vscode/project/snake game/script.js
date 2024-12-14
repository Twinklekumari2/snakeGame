let gameContainer = document.querySelector(".gameSection");
let scoreboard = document.querySelector(".score");

let foodX, foodY;
let headX = 12;
let headY = 12;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let score = 0;

function generateFood(){
     foodX = Math.floor(Math.random() * 25) + 1;
     foodY = Math.floor(Math.random() * 25) + 1;
     for(let i = 0; i < snakeBody.length; i++){
        if(snakeBody[i][1 == foodX || snakeBody[i][0] == foodY]){
            generateFood();
        }
     }
}

function gameOver(){
    velocityX = 0;
    velocityY = 0;
    generateFood();
    headX = 12;
    headY = 12;
    snakeBody = [];
    score = 0;
    alert("game over")
}


function renderGame(){
    
    let updatedgame = `<div class="food" style="grid-area:${foodY}/${foodX};"></div>`;

    if(headX == foodX && headY == foodY){
        snakeBody.push([foodX,foodY]);
        score += 10;
        generateFood();
    }
    scoreboard.innerHTML = "Score " + score;

    snakeBody.pop();
    headX+=velocityX;
    headY+=velocityY;
    snakeBody.unshift([headX,headY]);
    // console.log(snakeBody);
    
    
    if(headX == 0 || headX == 26 || headY == 0 || headY == 26){
        gameOver();
    }
    for(let i = 1; i < snakeBody.length; i++){
    if(snakeBody[0][0] == snakeBody[i][0] && snakeBody[0][1] == snakeBody[i][1]){
        gameOver();
    }
    }
    for(let i = 0; i < snakeBody.length; i++ ){  //for loop to show all the coordinate of snake body
        updatedgame += `<div class="snake" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }
    
    gameContainer.innerHTML = updatedgame;
}
generateFood();
setInterval(renderGame,150);

document.addEventListener('keydown',function(e){
    let key = e.key;
    console.log(key);
    if(key == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(key == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(key == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(key == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
})
//making array of shapes
document.addEventListener("DOMContentLoaded",() => {


const SHAPES = [
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ],
    [
        [0,1,0],
        [0,1,0],
        [0,1,1]
    ],
    [
        [0,1,1],
        [1,1,0],
        [0,0,0]
    ],
    [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ],
    [
        [1,1],
        [1,1]
    ],
    [
        [1,0,0],
        [1,0,0],
        [1,1,1]
    ],
    [
        [1,1,1],
        [0,1,0],
        [0,0,0]
    ],
    [
        [0,1,0],
        [1,1,1],
        [0,1,0]
    ],
    [
        [0,0,0],
        [1,1,0],
        [0,0,0]
    ],
    [
        [1,1],
        [0,1],
        [1,1]
    ],
    [
        [1,1],
        [0,1]
    ],
    [
        [0,1,1],
        [0,1,0],
        [1,1,0]
    ]
];

//making arrays of color

const COLORS = [
    "#fff",
    "#00ffff",
    "#ff6f00",
    "#ff2200",
    "#000000",
    "#00ff73",
    "#5eff00",
    "#00d9ff",
    "#002aff",
    "#d800ff",
    "#ff0000",
    "#0026ff",
    "#162c2a"
]

//now specifying rows and coloumns in canvas

const ROWS = 20;
const COLS = 10;

let canvas = document.querySelector("#canvas");
let scoreboard = document.querySelector("h2");
let btn = document.querySelector("#start");
let left = document.getElementById("left");
let right = document.getElementById("right");
let down = document.getElementById("down");
let rotates = document.getElementById("rotate");
// let pause = document.getElementById("pause");

btn.addEventListener('click' ,() => {

let ctx = canvas.getContext("2d");
console.log(ctx)
ctx.scale(30,30);
// console.log(canvas);
let pieceObj = null;
let grid = generateGrid();
let score = 0;
btn.disabled = true;
function generateRandomPiece(){
    let ran = Math.floor(Math.random() * 12);
    // console.log(SHAPES[ran]);
    let piece = SHAPES[ran];
    let indexColor = ran + 1;
    let x = 4;
    let y = 0;

    return {piece, indexColor, x, y} ; 
}


function checkGrid(){
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        let allField = true;
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 0){
                allField = false;
            }
        }
        if(allField){
            grid.splice(i,1); //ek puri row ko delete kr dega
            grid.unshift([0,0,0,0,0,0,0,0,0,0]);
            count++;
        }
    }
    if(count==1){
        score += 10;
    }
    else if(count == 2){
        score += 30;
    }
    else if(count ==3){
        score += 50;
    }
    else if(count > 3){
        score += 100;
    }
    scoreboard.innerHTML = "Score: " + score;
}
//move karane ke liye setInterval use karenge
function newGame(){
    checkGrid();
    if(pieceObj == null){
        pieceObj = generateRandomPiece();
        renderPiece();
    }
    moveDown();
}
setInterval(newGame,500);

// pause.addEventListener('click' , () => {
//     canvas.set

// })

function renderPiece() {
    let piece = pieceObj.piece;
    for(let i = 0; i < piece.length; i++){
        for(let j = 0; j < piece[i].length; j++){
            if(piece[i][j] == 1){
                ctx.fillStyle = COLORS[pieceObj.indexColor];
                ctx.fillRect(pieceObj.x+j,pieceObj.y+i,1,1);
            }
        }
    }
}

function moveDown(){
    if(!collision(pieceObj.x,pieceObj.y+1))
        pieceObj.y += 1; 
    else{
        for(let i = 0; i < pieceObj.piece.length; i++){
            for(let j = 0; j < pieceObj.piece[i].length; j++){
                if(pieceObj.piece[i][j] == 1){
                    let p = pieceObj.x+j;
                    let q = pieceObj.y+i;
                    grid[q][p] = pieceObj.indexColor; //zero matrix ko hi color kar dega ...at the end ye koi object nahi rahega..bs color hi rahega
                }
            }
        }
        if(pieceObj.y == 0){
            alert("Game Over");
            score = 0;
            btn.disabled = false;
            grid = generateGrid();
        }
        pieceObj = null; //ye sab hone ke baad dubara pieceObj ko khali kar diya taki ab koi new piece dubara genereate ho jaye
    }
    renderGrid(); 
}
function moveLeft(){
    if(!collision(pieceObj.x-1,pieceObj.y))
        pieceObj.x -= 1;
    renderGrid();
}
function moveRight(){
    if(!collision(pieceObj.x+1,pieceObj.y))
        pieceObj.x += 1;
    renderGrid();
}

function rotate(){
    let rotatePiece = [];
    let piece = pieceObj.piece;
    for(let i = 0; i < piece.length; i++){
        rotatePiece.push([]);
        for(let j = 0; j < piece[i].length; j++){
            rotatePiece[i].push(0);
        }
    }
    for(let i = 0; i < piece.length; i++){
        for(let j = 0; j < piece[i].length; j++){
            rotatePiece[i][j] = piece[j][i];
        }
    }
    for(let i = 0; i < rotatePiece.length; i++){
        rotatePiece[i] = rotatePiece[i].reverse();
    }
    
    if(!collision(pieceObj.x,pieceObj.y,rotatePiece))
        pieceObj.piece = rotatePiece;
    renderGrid();


}

function collision(x,y,rotatePiece){
    let piece = rotatePiece || pieceObj.piece;
    for(let i = 0; i < piece.length; i++){
        for(let j = 0; j < piece[i].length; j++){
            if(piece[i][j] == 1){
                let p = x+j;
                let q = y+i;
                if(p >= 0 && p < COLS && q >=0 && q < ROWS){
                    if(grid[q][p] > 0){
                        // console.log(grid[q][p]);
                        return true;
                    }

                }else{
                    return true;
                }
            }
        }
    }
    return false;
}

function generateGrid(){   //ye zero matrix create karega
    let grid = [];
    for(let i = 0; i < ROWS; i++){
        grid.push([]);
        for(let j = 0; j < COLS; j++){
            grid[i].push(0);
        }
    }
    return grid;
}
function renderGrid(){
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
                ctx.fillStyle = COLORS[grid[i][j]];
                ctx.fillRect(j,i,1,1);
        }
    }
    renderPiece();
}

document.addEventListener('keydown',(e) => {
    let key = e.code;
    // console.log(key);
    if(key == "ArrowDown"){
        moveDown();
    }
    else if(key == "ArrowLeft"){
        moveLeft();
    }
    else if(key == "ArrowRight"){
        moveRight();
    }
    else if(key == "ArrowUp"){
        rotate();
    }

})

left.addEventListener('click',moveLeft);
right.addEventListener('click',moveRight);
down.addEventListener('click',moveDown);
rotates.addEventListener('click',rotate);

});


});
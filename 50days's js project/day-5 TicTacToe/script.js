console.log('Welcome to Tic Tac Toe');
 
let music = new Audio('./assest/music.mp3')
let turnGame = new Audio('./asset/ting.mp3')
let gameOver = new Audio('./asset/gameover.mp3')
let turn = 'X';


//Function to Change to turn
const chnageTurn = ()=>{
    return turn ==='X'?'0':'X'
}

// Function to check for a win
const checkWin = () =>{
    
}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = chnageTurn();
            turnGame.play();
            checkWin();
            document.getElementsByClassName('info')[0].innerText = 'Turn for' + turn;
        }
    })
})

 
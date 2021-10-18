let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
//initialize the game
var initializeGame= document.createElement('button')
// use the value stored in the nextPlayer variable to indicate who the next player is
initializeGame.innerText='Click here to start a new game';
document.getElementById('game-over-lbl').appendChild(initializeGame);
initializeGame.addEventListener('click',(initialEvent)=>{initialEvent.target.hidden=true;});
//This call will create the buttons needed for the gameboard.

let playerID= document.querySelector('next-lbl');
playerID.innerText='X'
var table = document.getElementsByTagName('td');
var button = document.createElement('button');
table.addEventListener('click',(initialEvent)=>{initialEvent.target.playerID=true;})
createGameBoard()

function createGameBoard(){
for(let i =0; i<9; i++){
    table[i].innerHTML="<button>[ ]</button>";
    document.getElementById('c'+(i+1)).appendChild(table); 
}
}

    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{   
    /*  
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let gameOver=document.getElementById('game-over-lbl');
        var newHead= document.createElement('h1');
        newHead.innerText('Game Over');
        gameOver.appendChild(newHead);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{   let used=true;
    for(let i = 0; i<button.length; i++){
        if(!button[i].disabled){
            used=false;
        }
    }
    return true;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}

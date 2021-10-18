let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
//initialize the game
var initializeGame= document.createElement('button')
// use the value stored in the nextPlayer variable to indicate who the next player is
initializeGame.innerText='Click here to start a new game';
document.getElementById('game-over-lbl').appendChild(initializeGame);
initializeGame.addEventListener('click',(initialEvent)=>{initialEvent.target.hidden=true;});
//This call will create the buttons needed for the gameboard.
document.getElementById('next-lbl').innerHTML=nextPlayer;
//makes the next player declaration
createGameBoard()

function createGameBoard(){
for(let num of document.getElementsByTagName('td')){
    let button = document.createElement('button');
    button.innerHTML='[]';
    document.getElementById(num.id).appendChild(button);
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
{   let r=event.target;
    r.innerText=nextPlayer;
    if(nextPlayer=='X'){
        nextPlayer='O';
    }else{
        nextPlayer='X'
    }
    document.getElementsByTagName('next-lbl').innerHTML=nextPlayer;
    r.disabled=true;
    /*  
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {  let endGame= document.createElement('h1');
        endGame.innerHTML="Game Over";
        document.getElementById('game-over-lbl').appendChild(endGame);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{   let used=document.querySelectorAll('button');
    let count =0;
    for(let i = 0; i<used.length; i++){
        if(used[i].disabled){
            count++;
        }
    }
    if(count==used.length){
        return true;
    }else{
        return false;
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   
}

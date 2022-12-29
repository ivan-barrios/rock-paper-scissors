let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;



//Random RockPaperScissors
function getComputerChoice(){
    const possibleAnswers = ["Rock", "Paper", "Scissors"];
    return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
}

//Plays ONE round
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    const weapons = {
        Rock: {weakTo: 'Paper', strongTo:'Scissors'},
        Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
        Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
    }
    if (weapons[playerSelection].strongTo == computerSelection){
        playerScore++;
        console.log("Yoy won!"); //return "You Won!";
    }
    else if (weapons[playerSelection].weakTo == computerSelection){
        computerScore++;
        console.log("Yoy lost!")//return "You Lost!";
    }
    else console.log("It's a tie")//return "It's a tie!"
}

//Original Game (5 ROUNDS)
function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        console.log("You Are The Winner! Congratulations!")
    }
    else if (playerScore < computerScore){
        console.log("The Computer Is The Winner! I am sorry!")    
    }
    else console.log("The Game Is A Tie!!")
}

computerSelection = getComputerChoice();


const rockbtn = document.querySelector('.rockbtn');
rockbtn.addEventListener("click", function (){
    playRound("Rock", computerSelection);
});

const paperbtn = document.querySelector('.paperbtn');
paperbtn.addEventListener("click", function (){
    playRound("Paper", computerSelection);
});

const scissorsbtn = document.querySelector('.scissorsbtn');
scissorsbtn.addEventListener("click", function (){
    playRound("Scissors", computerSelection);
});
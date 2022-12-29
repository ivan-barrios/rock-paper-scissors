let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


//Random RockPaperScissors for computer
function getComputerChoice(){
    const possibleAnswers = ["Rock", "Paper", "Scissors"];
    return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
}



//PROCESSES Selections
function playRound(playerSelection, computerSelection){
    const weapons = {
        Rock: {weakTo: 'Paper', strongTo:'Scissors'},
        Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
        Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
    }
    if (weapons[playerSelection].strongTo == computerSelection){
        playerScore++;
        return 'Player';
    }
    else if (weapons[playerSelection].weakTo == computerSelection){
        computerScore++;
        return 'Computer'
    }
    else return "Tie";
}



//variables for the display
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const roundMessage = document.getElementById('roundMessage');
const playerScoreMessage = document.getElementById('playerScoreMessage');
const computerScoreMessage = document.getElementById('computerScoreMessage');
//EventListeners for buttons
rockBtn.addEventListener('click', () => weaponSelected('Rock'));
paperBtn.addEventListener('click', () => weaponSelected('Paper'));
scissorsBtn.addEventListener('click', () => weaponSelected('Scissors'));
playAgainBtn.addEventListener('click', () => resetGame());



//Processes Round
function weaponSelected(playerSelection){
    if (gameFinished()){
        return;
    }
    computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection, computerSelection);
    updateScoreMessages(roundWinner, playerSelection, computerSelection);
}


//Updates Score Messages
function updateScoreMessages(roundWinner,playerSelection, computerSelection){
    if (roundWinner === "Player") {
        roundMessage.textContent = `You win, ${playerSelection}
        is stronger than ${computerSelection}`;
        playerScoreMessage.textContent = playerScore;
    }
    else if (roundWinner === "Computer") {
        roundMessage.textContent = `Computer wins,
        ${computerSelection} is stronger than ${playerSelection}`;
        computerScoreMessage.textContent = computerScore;
    }
    else roundMessage.textContent = `It's a tie!`
    
    if (playerScore === 5){
        roundMessage.textContent = "YOU WON!";
    }
    else if (computerScore === 5){
        roundMessage.textContent = "YOU LOST!"
    }
}



function gameFinished(){
    return playerScore === 5 || computerScore === 5;
}



function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreMessage.textContent = playerScore;
    computerScoreMessage.textContent = computerScore;
    roundMessage.textContent = 'Choose a weapon';
}
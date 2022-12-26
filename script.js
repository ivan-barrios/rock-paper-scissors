
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
        return "You Won!"; 
    }
    else if (weapons[playerSelection].weakTo == computerSelection){
        return "You Lost!";
    }
    else return "It's a tie!"
}

const playerSelection = "roCk";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));
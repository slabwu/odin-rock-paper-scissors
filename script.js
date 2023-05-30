function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function getPlayerChoice () {
    let choice = prompt('Welcome to "Rock, Paper, Scissors"! What\'s your move?')
    const validMoves = ['rock', 'paper', 'scissors'];
    console.log(validMoves);
    if (validMoves.includes(choice.toLowerCase())) {
        return choice.toLowerCase();
    } else {
        alert("That's not a valid move! Try again.");
        getPlayerChoice();
    }
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

console.log(computerSelection);
console.log(playerSelection);
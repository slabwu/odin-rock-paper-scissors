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

function getPlayerChoice() {
    let choice = prompt('Welcome to "Rock, Paper, Scissors"! What\'s your move?')
    const validMoves = ['rock', 'paper', 'scissors'];
    if (choice && validMoves.includes(choice.toLowerCase())) {
        return choice.toLowerCase();
    } else {
        alert('That\'s not a valid move! Try again.');
        getPlayerChoice();
    }
}

function capitalize(string) {
    string = string.toLowerCase();
    letter = string.slice(0, 1);
    return string.replace(letter, letter.toUpperCase());
}

function game(computerSelection, playerSelection) {
    alert(`The opponent plays ${computerSelection}.`);
    if (computerSelection === playerSelection) {
        alert('It\'s a tie!');
    } else {
        switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                alert(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`); 
            } else {
                alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);           
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                alert(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`); 
            } else {
                alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);           
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                alert(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`); 
            } else {
                alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);           
            }
            break;
        }
    }
}

game(getComputerChoice(), getPlayerChoice());
confirm('Play again?') ? game(getComputerChoice(), getPlayerChoice()): null;
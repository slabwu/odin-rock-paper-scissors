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

function getPlayerChoice(round) {
    let choice = (round === 1) ? 
        prompt('Welcome to round 1 of "Rock, Paper, Scissors"! What\'s your move?'): 
        prompt(`Round ${round}: What's your move?`); 
    const validMoves = ['rock', 'paper', 'scissors'];
    if (choice && validMoves.includes(choice.toLowerCase())) {
        return choice.toLowerCase();
    } else {
        alert('That\'s not a valid move! Try again.');
        getPlayerChoice(round);
    }
}

function capitalize(string) {
    string = string.toLowerCase();
    letter = string.slice(0, 1);
    return string.replace(letter, letter.toUpperCase());
}

function play(computerSelection, playerSelection) {
    alert(`The opponent plays ${computerSelection}.`);
    if (computerSelection === playerSelection) {
        alert('It\'s a tie!');
        return 'tie';
    } else {
        switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                alert(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`); 
                return 'win';
            } else {
                alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);   
                return 'loss';        
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                alert(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`); 
                return 'win';
            } else {
                alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);   
                return 'loss';        
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                alert(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`);
                return 'win';
            } else {
                alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);
                return 'loss';           
            }
            break;
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        play(getComputerChoice(), getPlayerChoice(i));
    }
}

game();
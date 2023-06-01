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

function getPlayerChoice(e) {
    choice = this.classList.value;
    return choice;
}

function capitalize(string) {
    string = string.toLowerCase();
    letter = string.slice(0, 1);
    return string.replace(letter, letter.toUpperCase());
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let gameRounds = 5;
    for (let i = 1; i <= gameRounds; i++) {
        outcome = playRound(getComputerChoice(), getPlayerChoice(i));            
        console.log(outcome);
        if (outcome === 'stop') {
            break;
        } else {
            switch (outcome) {
                case 'tie':
                    break;
                case 'win':
                    playerScore++;
                    break;
                case 'loss':
                    computerScore++;
                    break;
            }
            (i===gameRounds) ? 
                alert(`Your Final Score: ${playerScore} \nTheir Final Score: ${computerScore}`):
                alert(`Your Score: ${playerScore} \nTheir Score: ${computerScore}`);
            if (i===gameRounds) {
                if (playerScore === computerScore) {
                    alert(`You are tied with the opponent!`);
                } else if (playerScore > computerScore) {
                    alert(`You won the game!`);   
                } else {
                    alert(`You lost the game!`);
                }
                confirm('Play again?') ? game() : null;
            }
        }
    }
}

const buttons = document.querySelectorAll('button');
const playerChoiceDisplay = document.querySelector('.player');
const computerChoiceDisplay = document.querySelector('.computer');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const finalResult = document.querySelector('.final-result');


let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.textContent = `${playerScore}`;
computerScoreDisplay.textContent = `${computerScore}`;


function createEmoji (name) {
    switch (name) {
        case 'rock':
            return '✊';
            break;
        case 'paper':
            return '✋';
            break;
        case 'scissors':
            return '✌️';
            break;
    }
}

buttons.forEach(button => button.addEventListener('click', getChoice));

function getChoice(e) {
    if (playerScore !== 5 && computerScore !== 5) {
    playerSelection = this.classList.value;
    computerSelection = getComputerChoice();

    playerChoiceDisplay.textContent = `You play ${playerSelection}. ${createEmoji(playerSelection)}`;
    computerChoiceDisplay.textContent = `The opponent plays ${computerSelection}. ${createEmoji(computerSelection)}`;

    outcome = playRound(playerSelection, computerSelection);
    changeScore(outcome);
    }
    if (playerScore === 5) finalResult.textContent = "You won the game!!!";
    if (computerScore === 5) finalResult.textContent = "You lost the game!!!";
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        result.textContent = 'It\'s a tie!';
        return 'tie';
    } else {
        switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                result.textContent = `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`; 
                return 'win';
            } else {
                result.textContent = `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;   
                return 'loss';        
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                result.textContent = `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`; 
                return 'win';
            } else {
                result.textContent = `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;   
                return 'loss';        
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                result.textContent = `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`; 
                return 'win';
            } else {
                result.textContent = `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;   
                return 'loss';           
            }
            break;
        }
    }
}

function changeScore(outcome) {
    switch (outcome) {
        case 'tie':
            break;
        case 'win':
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            break;
        case 'loss':
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            break;
}}

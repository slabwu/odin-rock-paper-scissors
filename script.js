const buttons = document.querySelectorAll('button');
const playerChoiceDisplay = document.querySelector('.player');
const computerChoiceDisplay = document.querySelector('.computer');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const finalResult = document.querySelector('.final-result');

const playerHat = document.querySelector('.player-container .hat');
const playerHead = document.querySelector('.player-container .head');
const playerHand = document.querySelector('.player-updates .hand');
const computerHat = document.querySelector('.computer-container .hat');
const computerHead = document.querySelector('.computer-container .head');
const computerHand = document.querySelector('.computer-updates .hand');

let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.textContent = `${playerScore}`;
computerScoreDisplay.textContent = `${computerScore}`;

const happy = [...'😀😃😄😁😆😅🤣😂🙂😉😊😍🤩😘😗😊😚😙😋😛😜🤪😝😏'];
const meh = [...'🙄😑😶🫤😕😟😲😯😮😶😑😗😬🙄😦😧'];
const sad = [...'🥲🤨😒🙄😬😮😵🤮🤢😳😧😰😨😥😢😭😣😖😱😫😩😓🥺😞'];





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

function capitalize(string) {
    string = string.toLowerCase();
    letter = string.slice(0, 1);
    return string.replace(letter, letter.toUpperCase());
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    document.body.classList.remove('shake');
}






function playGame(e) {
    if (playerScore !== 5 && computerScore !== 5) {
    playerSelection = this.classList.value;
    computerSelection = getComputerChoice();
    
    playerHand.textContent = `${createEmoji(playerSelection)}`;
    computerHand.textContent = `${createEmoji(computerSelection)}`;

    playerChoiceDisplay.textContent = `You play ${playerSelection}. ${createEmoji(playerSelection)}`;
    computerChoiceDisplay.textContent = `They play ${computerSelection}. ${createEmoji(computerSelection)}`;

    


    outcome = playRound(playerSelection, computerSelection);
    changeScore(outcome);
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) finalResult.textContent = "You won the game!!!";
        if (computerScore === 5) finalResult.textContent = "You lost the game!!!";
        buttons.forEach(button => button.textContent = '👏');
        document.body.classList.add('shake');
    }
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
            playerHead.textContent = meh[Math.floor(Math.random()*meh.length)];
            computerHead.textContent = meh[Math.floor(Math.random()*meh.length)];
            break;
        case 'win':
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            playerHead.textContent = happy[Math.floor(Math.random()*happy.length)];
            computerHead.textContent = sad[Math.floor(Math.random()*sad.length)];
            break;
        case 'loss':
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            playerHead.textContent = sad[Math.floor(Math.random()*sad.length)];
            computerHead.textContent = happy[Math.floor(Math.random()*happy.length)];
            break;
}}





buttons.forEach(button => button.addEventListener('click', playGame));
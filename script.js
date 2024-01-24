function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[(Math.floor(Math.random() * choice.length))];
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');

const roundResult = document.querySelector('.result');
const playerText = document.createElement('p');
const computerText = document.createElement('p');
const roundResultText = document.createElement('h3');

const gameWinner = document.createElement('h3');
const playAgain = document.createElement('button');

rock.addEventListener('click', () => handleClick('Rock'));
paper.addEventListener('click', () => handleClick('Paper'));
scissors.addEventListener('click', () => handleClick('Scissors'));

function handleClick(playerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        roundNumber++;
        showRoundResult();
        updateScore();
        gameEnd();
    }
}


function playRound (playerSelection, computerSelection) {
    playerText.textContent = `Player has chosen "${playerSelection}".`;
    computerText.textContent = `Computer has chosen "${computerSelection}".`;
    

    if (playerSelection === computerSelection) {
        roundResultText.textContent = `Round ${roundNumber} : It's a tie.`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        computerScore += 1;
        roundResultText.textContent = `Round ${roundNumber} : You Lost.`;
    } else {
        playerScore += 1;
        roundResultText.textContent = `Round ${roundNumber} : You Won!`;
    }    
}

function showRoundResult() {
    roundResult.append(playerText, computerText, roundResultText);
}

function updateScore() {
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function gameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        showGameWinner();
    }
}

function showGameWinner() {
    if (playerScore > computerScore) {
        gameWinner.textContent = 'Final Result : Yon Won!!!  Wanna play again?';
    } else if (computerScore > playerScore) {
        gameWinner.textContent = "Final Result : You Lost...  Wanna play again?";
    } else {
        gameWinner.textContent = "Final Result : It's a tie.  Wanna play again?";
    }

    playAgain.textContent = 'PLAY AGAIN';
    roundResult.append(gameWinner, playAgain);
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    updateScore();
    removeGameWinner();
}

function removeGameWinner() {
    roundResult.innerHTML = '';
}

playAgain.addEventListener('click', restart);
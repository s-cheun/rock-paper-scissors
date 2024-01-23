function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[(Math.floor(Math.random() * choice.length))];
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("It's a tie.");
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        computerScore++;
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("Computer won.");
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        playerScore++;
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("Player won!");
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        playerScore++;
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("Player won!");
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("It's a tie.");
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        computerScore++;
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("Computer won.");
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        computerScore++;
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("Computer won.");
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        playerScore++;
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("Player won!");
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
        console.log(`Player's move: ${playerSelection}, Computer's move: ${computerSelection}`);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("It's a tie.");
    }
}

function game() {
    let move = prompt("Choose your move");
    playRound(move, getComputerChoice());
    move = prompt("Choose your move");
    playRound(move, getComputerChoice());
    move = prompt("Choose your move");
    playRound(move, getComputerChoice());
    move = prompt("Choose your move");
    playRound(move, getComputerChoice());
    move = prompt("Choose your move");
    playRound(move, getComputerChoice());
    
    if (playerScore > computerScore) {
        return "Player Won!"
    }
    else if (playerScore < computerScore) {
        return "Computer Won!"
    }
    else {
        return "It's a tie!"
    }

}
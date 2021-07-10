let playerScore = 0;
let computerScore = 0;

updateScore();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay())
    });
});

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const result = document.querySelector("#result");

    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
        return;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result.textContent = "You lose! Paper beats Rock";
            computerScore++;
        } else {
            result.textContent = "You win! Rock beats Scissors";
            playerScore++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beats paper";
            computerScore++;
        } else {
            result.textContent = "You win! Paper beats Rock";
            playerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors";
            computerScore++;
        } else {
            result.textContent = "You win! Scissors beats paper";
            playerScore++;
        }
    }
    updateScore();

    declareWinner();
}

function updateScore() {
    const playerScoreText = document.querySelector("#player-score");
    const computerScoreText = document.querySelector("#computer-score");

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
 }

 function declareWinner() {
    const SCORE_TO_WIN = 5;

    if (playerScore < SCORE_TO_WIN && computerScore < SCORE_TO_WIN) {
        return;
    }

    const winner = document.querySelector("#winner");

    winner.textContent = (playerScore >= SCORE_TO_WIN) ? "You won the game!" :
            "You  loss the game!";

    resetGame();
 }

 function resetGame() {
    playerScore = 0;
    computerScore = 0;

    updateScore();
 }


function computerPlay() {
    const MAX_POSSIBLITIES = 3;
    let randomNum = Math.floor(Math.random() * MAX_POSSIBLITIES);

    switch(randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
 
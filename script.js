function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    const SCORE_TO_WIN = 5;

    while(playerScore < SCORE_TO_WIN && computerScore < SCORE_TO_WIN) {
        let input = prompt("Rock, Paper, or Scissors?");

        let roundResult = playRound(input, computerPlay());

        if (roundResult === "win") {
            playerScore++;
        } else if (roundResult === "lose"){
            computerScore++;
        }
        console.log(`Score = Player: ${playerScore} Computer: ${computerScore}`);
    }
    declareWinner(playerScore, computerScore);
 }

 function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            return "lose";
        } else {
            console.log("You win! Rock beats Scissors");
            return "win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats paper");
            return "lose";
        } else {
            console.log("You win! Paper beats Rock");
            return "win";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats scissors");
            return "lose";
        } else {
            console.log("You win! Scissors beats paper");
            return "win";
        }
    }
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

 function declareWinner(playerScore, computerScore) {
    if (playerScore >= 5) {
        console.log("You won the game!");
    } else if (computerScore >= 5) {
        console.log("You loss the game!");
    }
 }

 playGame();

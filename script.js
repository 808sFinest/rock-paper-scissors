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
        }
        if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors");
            return "win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats paper");
            return "lose";
        }
        if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock");
            return "win";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats scissors");
            return "lose";
        }
        if (computerSelection === "paper") {
            console.log("You win! Scissors beats paper");
            return "win";
        }
    }
}


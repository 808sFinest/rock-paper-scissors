function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    const SCORE_TO_WIN = 5;

    /*
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
    */
    declareWinner(playerScore, computerScore);
 }

 function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const result = document.querySelector("#result");

    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result.textContent = "You lose! Paper beats Rock";
        } else {
            result.textContent = "You win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beats paper";
        } else {
            result.textContent = "You win! Paper beats Rock";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors";
        } else {
            result.textContent = "You win! Scissors beats paper";
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

 

 const buttons = document.querySelectorAll("button");

 buttons.forEach((button) => {

     button.addEventListener('click', () => {
         playRound(button.id, computerPlay())
     });
 });

 //playGame();
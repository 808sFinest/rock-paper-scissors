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


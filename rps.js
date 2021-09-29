function getRdmInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let move = undefined;
    let selection = getRdmInt(3);

    switch (selection) {
        case 0:
            move = "rock";
            break;
        case 1:
            move = "paper";
            break;
        case 2:
            move = "scissors";
            break;
        default:
            move = null;
    }
    return move;
}

function comparePlay(pChoice, cChoice) {
    let winner = undefined;

    if (pChoice === cChoice) {
        winner = "t"
    } else {
        if (pChoice === "rock") {
            if (cChoice === "scissors") {
                winner = "p"
            } else {
                winner = "c"
            }
        } else if (pChoice === "paper") {
            if (cChoice === "rock") {
                winner = "p";
            } else {
                winner = "c";
            }
        } else {
            if (cChoice === "paper") {
                winner = "c";
            } else {
                winner = "p";
            }
        }
    }

    return winner;
}

function playRound(playerInput, computerInput) {
    const ALLOWED = ["rock", "paper", "scissors"];
    let playerSelection = playerInput.toLowerCase();
    let winner = undefined;
    let roundResult = undefined;

    if (!ALLOWED.includes(playerSelection)) {
        return "Invalid move.";
    }

    // console.log(`The inputs for playRound are: \n Player: ${playerSelection} \n Computer: ${computerInput}`);
    winner = comparePlay(playerSelection, computerInput);
    // console.log(`The winner returned was ${winner}.`);

    if (winner === 'p') {
        roundResult = `You win! ${playerSelection} beats ${computerInput}!`;
    } else if (winner === 'c') {
        roundResult = `You lose! ${playerSelection} beats ${computerInput}!`;
    } else {
        roundResult = `It was a tie! You both played ${playerSelection}!`;
    }

    return roundResult;
}

function game(iteration) {
    let gamesPlayed = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    let gamesTied = 0;
    let message = "";

    for (i=1;i<iteration+1;i++) {
        input = window.prompt("What is your play?")
        message = playRound(input, computerPlay());
        gamesPlayed += 1;

        if (message.includes("win")) {
            gamesWon += 1;
        } else if (message.includes("lose")) {
            gamesLost += 1;
        } else if (message.includes("tie")) {
            gamesTied += 1;
        } else {
            message += " Try again."
        }

        alert(message);
    }

    alert(`We played ${gamesPlayed} games. You won ${gamesWon} times, lost ${gamesLost} times and tied ${gamesTied} times for a win rate of ${Math.round(gamesWon/gamesPlayed * 100)}%!`)
}
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

function comparePlay(p, c) {
    let winner = undefined;

    if (p === c) {
        winner = "t"
    } else {
        if (p === "rock") {
            if (c === "scissors") {
                winner = "p"
            } else {
                winner = "c"
            }
        } else if (p === "paper") {
            if (c === "rock") {
                winner = "p";
            } else {
                winner = "c";
            }
        } else {
            if (c === "paper") {
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

    console.log(`The inputs for playRound are: \n Player: ${playerSelection} \n Computer: ${computerInput}`);
    winner = comparePlay(playerSelection, computerInput);
    console.log(`The winner returned was ${winner}.`);

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
    let games = 0;
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let message = "";

    for (i=1;i<iteration+1;i++) {
        input = window.prompt("What is your play?")
        message = playRound(input, computerPlay());
        games += 1;

        if (message.includes("win")) {
            wins += 1;
        } else if (message.includes("lose")) {
            losses += 1;
        } else if (message.includes("tie")) {
            ties += 1;
        } else {
            message += " Try again."
        }

        alert(message);
    }

    alert(`We played ${games} games. You won ${wins} times, lost ${losses} times and tied ${ties} times for a win rate of ${Math.round(wins/games * 100)}%!`)
}
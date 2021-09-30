// Globals to keep track of game statistics
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;

// Helper function to generate a random integer based on a provided number
function getRdmInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to pick a move for the computer
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

// Helper function to determine the winner, based on player's choice and computer's choice
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

// Play round function that returns the winner of a round.
function playRound(playerInput, computerInput) {
    const ALLOWED = ["rock", "paper", "scissors"];
    let playerSelection = playerInput.toLowerCase();
    let winner = undefined;
    let roundResult = undefined;

    // Check if input is allowed.
    if (!ALLOWED.includes(playerSelection)) {
        return "Invalid move.";
    }

    // Get the winner
    //console.log(`The inputs for playRound are: \n Player: ${playerSelection} \n Computer: ${computerInput}`);
    winner = comparePlay(playerSelection, computerInput);
    //console.log(`The winner returned was ${winner}.`);

    // Set the round result message
    if (winner === 'p') {
        roundResult = `You win! ${playerSelection} beats ${computerInput}!`;
    } else if (winner === 'c') {
        roundResult = `You lose! ${playerSelection} beats ${computerInput}!`;
    } else {
        roundResult = `It was a tie! You both played ${playerSelection}!`;
    }

    return roundResult;
}

/** Old console based game function
function game(iteration) {
    let gamesPlayed = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    let gamesTied = 0;
    let message = "";

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
}  */

// New game function for GUI version
function playGame(event) {
    // Event handling variables
    let clickedTag = event.target.tagName;
    let moveSelected = event.target.id;

    // console.log(`Got a click, here's info: \n${event}`);
    // console.log(`You clicked on a ${clickedTag}`);
    
    if (!moveSelected) return; // Exit this round if we don't detect a valid click
    if (gamesWon >= 5) { // Stop after 5 wins
        alert('You won!');
    }; 

    // We have a valid move, so play the round.
    // console.log(`You played ${moveSelected}`);
    let message = playRound(moveSelected, computerPlay());

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

    let outputDiv = document.querySelector('.output');
    let outputP = document.createElement('p');
    outputP.textContent = message;
    outputDiv.appendChild(outputP);
    
}

// Set up event listener for a button click.
window.addEventListener('click', playGame);
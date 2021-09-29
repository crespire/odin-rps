function getRdmInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let move = undefined;
    let selection = getRdmInt(3);
    console.log(selection);

    switch (selection) {
        case 0:
            move = "Rock";
            break;
        case 1:
            move = "Paper";
            break;
        case 2:
            move = "Scissors";
            break;
        default:
            move = null;
    }
    return move;
}
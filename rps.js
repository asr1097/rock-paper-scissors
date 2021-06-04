
function computerPlay() {
    let ls = ['Rock', 'Paper', 'Scissors'];
    return ls[Math.floor(Math.random() * 3)]
}

function oneRound (playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    if ((playerSelection === 'Rock' && computerSelection === 'Rock') || 
        (playerSelection === 'Paper' && computerSelection === 'Paper') ||
        (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {
        return "Draw."
    }
    else if ((playerSelection === 'Rock' && computerSelection !== 'Paper') ||
             (playerSelection === 'Paper' && computerSelection !== 'Scissors') ||
             (playerSelection === 'Scissors' && computerSelection !== 'Rock')) {
        return 'You won! ' + playerSelection + ' beats ' + computerSelection + '.'
    }
    else {return 'You lost! ' + computerSelection + ' beats ' + playerSelection + '.' }
}

function game() {
    let pl = 0;
    let cm = 0;
    for (let i = 0; i < 5; i++) {
        let pl_sel = prompt('Select: ');
        let result = oneRound(pl_sel, computerPlay());
        if (result === 'Draw.') {
            console.log(result)
            continue}
        else if (result.substr(0, 7) === 'You won') {
            console.log(result)
            pl+=1}
        else {
            console.log(result)
            cm+=1};
    }
    if (pl === cm) {
        console.log('Draw.')
        return "Draw."}
    else if(pl > cm) {
        console.log('You won!')
        return "You won!"}
    else {
        console.log('You lost.')
        return "You lost."}
}
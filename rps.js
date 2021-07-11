
let ps = document.querySelector(".ps");
let cs = document.querySelector(".cs");

function computerPlay() {
    let ls = ['Rock', 'Paper', 'Scissors'];
    return ls[Math.floor(Math.random() * 3)]
}

function oneRound (playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    if ((playerSelection === 'Rock' && computerSelection === 'Rock') || 
        (playerSelection === 'Paper' && computerSelection === 'Paper') ||
        (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {
        return "D"
    }
    else if ((playerSelection === 'Rock' && computerSelection !== 'Paper') ||
             (playerSelection === 'Paper' && computerSelection !== 'Scissors') ||
             (playerSelection === 'Scissors' && computerSelection !== 'Rock')) {
        return "W"
    }
    else {return "L"}
}

function game(r) {
    if (r === 'W') {
        let v = parseInt(ps.innerHTML, 10) + 1;
        ps.innerHTML = v.toString();
        document.querySelector('.round-result').innerHTML = "Win!"}
    else if (r === "L") {
        let v = parseInt(cs.innerHTML, 10) + 1;
        cs.innerHTML = v.toString();
        document.querySelector('.round-result').innerHTML = "Lost."}
    else {document.querySelector('.round-result').innerHTML = "Draw."} 

    if (checkWinner()) {
        document.querySelector('#reset').addEventListener("click", reset);
    };
}

function checkWinner() {
    if (ps.innerHTML === "5") {
        document.querySelector("#end-game").classList.add('end');
        document.querySelector('.end-game').innerHTML = "YOU WON!!!";
        document.querySelector('.buttons').classList.add('buttons-hide'); 
        document.querySelector('.buttons').classList.remove('buttons-show');
        document.querySelector('.buttons').style.setProperty('visibility', 'hidden'); 
        document.querySelector('#ended').style.setProperty('visibility', 'visible');

        return true;
    }
    else if (cs.innerHTML === "5") {
        document.querySelector("#end-game").classList.add('end');
        document.querySelector('.end-game').innerHTML = "You lost :(";
        document.querySelector('.buttons').classList.add('buttons-hide'); 
        document.querySelector('.buttons').classList.remove('buttons-show');
        document.querySelector('.buttons').style.setProperty('visibility', 'hidden'); 
        document.querySelector('#ended').style.setProperty('visibility', 'visible'); 
        return true;
    }
    return false;
}

function reset() {
    ps.innerHTML = '0';
    cs.innerHTML = '0';
    document.querySelector('.round-result').innerHTML = "";
    document.querySelector('.end-game').innerHTML = "";
    document.querySelector('#reset').classList.add('reset-hide');
    document.querySelector('#reset').classList.remove('reset-show');
    document.querySelector('#ended').style.setProperty('visibility', 'hidden'); 
    document.querySelector("#end-game").classList.remove('end');
    document.querySelector('.buttons').style.setProperty('visibility', 'visible');
    document.querySelector('.buttons').classList.remove('buttons-hide'); 
    document.querySelector('.buttons').classList.add('buttons-show'); 
}
 
let buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener("click", function(){
    let result =  oneRound(this.innerHTML, computerPlay());
    game(result)}))
   

// Stored variables:
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");

const resultsAlert = document.querySelector(".results > p");

const playerScoreSpan = document.getElementById("playerscore");
const compScoreSpan = document.getElementById("compscore");
const scoreBoard = document.querySelector(".scoreboard");

let playerScore = 0;
let compScore = 0;


// Main game function
function maingame() {
    rockButton.addEventListener("click", () => game("r"));
    paperButton.addEventListener("click", () => game("p"));
    scissorsButton.addEventListener("click", () => game("s"));
}


maingame();


// Random computer choice
function getCompChoice() {
    const options = ['r', 'p', 's'];
    const randomNo = Math.floor(Math.random() * 3);
    return options[randomNo];
}

// Player's choice
function game(playersChoice) {
    const compChoice = getCompChoice();
    switch (playersChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playersChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playersChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playersChoice, compChoice);
            break;
    }
}

function wordConverter(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}


function win(playersChoice, compChoice) {
   playerScore++;
   playerScoreSpan.innerHTML = playerScore;
   compScoreSpan.innerHTML = compScore;
   resultsAlert.innerHTML = `${wordConverter(playersChoice)} beats ${wordConverter(compChoice)}. YOU WIN!`;
}

function lose(playersChoice, compChoice) {
   compScore++;
   playerScoreSpan.innerHTML = playerScore;
   compScoreSpan.innerHTML = compScore;
   resultsAlert.innerHTML = `${wordConverter(playersChoice)} loses to ${wordConverter(compChoice)}. YOU LOST!`;
}

function draw(playersChoice, compChoice) {
    resultsAlert.innerHTML = `${wordConverter(playersChoice)} equals ${wordConverter(compChoice)}. IT'S A DRAW!`;
}
























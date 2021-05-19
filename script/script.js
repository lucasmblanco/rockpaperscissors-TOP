function computerPlay() {
    let computerChoice;
    let options = ["Rock", "Paper", "Scissors"];
    computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
            result = "It's a tie!, Rock and Rock.";
            return "It's a tie!, Rock and Rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            result = "You Lose!, Paper beats Rock.";
            return "You Lose!, Paper beats Rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            result = "You Won!, Rock beats Scissors.";
            return "You Won!, Rock beats Scissors.";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            result ="It's a tie!, Paper and Paper.";
            return "It's a tie!, Paper and Paper.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            result = "You Won!, Paper beats Rock.";
            return "You Won!, Paper beats Rock.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            result = "You Lose!, Scissors beats Paper.";
            return "You Lose!, Scissors beats Paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            result = "It's a tie!, Scissors and Scissors.";
            return "It's a tie!, Scissors and Scissors.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            result = "You Lose!, Rock beats Scissors.";
            return "You Lose!, Rock beats Scissors.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            result = "You Won!, Scissors beats Paper.";
            return "You Won!, Scissors beats Paper.";
    }
}

function game() {
    playerSelection = prompt("Choose an option", "");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();
    playerSelection = prompt("Choose an option", "");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();    
    playerSelection = prompt("Choose an option", "");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();
    playerSelection = prompt("Choose an option", "");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();
    playerSelection = prompt("Choose an option", "");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(totalScore());
}


function totalScore() {
    if(result === "You Won!, Rock beats Scissors." || result === "You Won!, Paper beats Rock." || result === "You Won!, Scissors beats Paper.") {
        scoreUser++;
    } else if (result === "You Lose!, Paper beats Rock." || result === "You Lose!, Scissors beats Paper." || result === "You Lose!, Rock beats Scissors." ) {
        scorePc++;
    } 
    return `The results are User: ${scoreUser} PC: ${scorePc}`;
}

let scorePc = 0;
let scoreUser = 0;
let result;
let playerSelection;
let computerSelection;
game();
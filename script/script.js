let scorePc = 0;
let scoreUser = 0;
let result;
let playerSelection;
let computerSelection;


function computerPlay() {
    let computerChoice;
    let options = ["rock", "paper", "scissors"];
    computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
            result = "It's a tie!, Rock and Rock.";
            return "It's a tie!, Rock and Rock.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
            result = "You Lose!, Paper beats Rock.";
            return "You Lose!, Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result = "You Won!, Rock beats Scissors.";
            return "You Won!, Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
            result ="It's a tie!, Paper and Paper.";
            return "It's a tie!, Paper and Paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "You Won!, Paper beats Rock.";
            return "You Won!, Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "You Lose!, Scissors beats Paper.";
            return "You Lose!, Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            result = "It's a tie!, Scissors and Scissors.";
            return "It's a tie!, Scissors and Scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "You Lose!, Rock beats Scissors.";
            return "You Lose!, Rock beats Scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "You Won!, Scissors beats Paper.";
            return "You Won!, Scissors beats Paper.";
    }
}
/*
function playRound(playerSelection, computerSelection) {
        let rock = "rock";
        let scissors = "scissors";
        let paper = "paper;"
        let choiceUser;
        let choicePc;
        if (playerSelection === rock && computerSelection === scissors || playerSelection === scissors &&
                computerSelection === paper || playerSelection === paper && computerSelection === rock) {
                        choiceUser = playerSelection;
                        choicePc = computerSelection;
                        result = `You WON! ${choiceUser} beats ${choicePc}`;
                        return `You WON! ${choiceUser} beats ${choicePc}`;
                } else if (playerSelection === scissors && computerSelection === rock || playerSelection === paper &&
                        computerSelection === scissors || playerSelection === rock && computerSelection === paper) {
                        choiceUser = playerSelection;
                        choicePc = computerSelection;
                        result = `You WON! ${choiceUser} beats ${choicePc}`;
                        return `You LOSE! ${choicePc} beats ${choiceUser}`;
                        } else if (playerSelection === rock && computerSelection === rock || playerSelection === scissors &&
                                computerSelection === scissors || playerSelection === paper && computerSelection === paper) {
                                        choiceUser = playerSelection;
                                        choicePc = computerSelection;
                                        result = `It's a TIE! both players choose ${choiceUser}`;
                                        return `It's a TIE! both players choose ${choiceUser}`;   
                                }
}

*/

/*
function game() {
    playerSelection = prompt("Choose an option", "").toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();
    playerSelection = prompt("Choose an option", "").toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();    
    playerSelection = prompt("Choose an option", "").toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();
    playerSelection = prompt("Choose an option", "").toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    totalScore();
    playerSelection = prompt("Choose an option", "").toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(totalScore());
}
*/

function totalScore() {
    if(result === "You Won!, Rock beats Scissors." || result === "You Won!, Paper beats Rock." || result === "You Won!, Scissors beats Paper.") {
        scoreUser++;
    } else if (result === "You Lose!, Paper beats Rock." || result === "You Lose!, Scissors beats Paper." || result === "You Lose!, Rock beats Scissors." ) {
        scorePc++;
    } 
    return `The results are User: ${scoreUser} PC: ${scorePc}`;
}
/*
function totalScore () {
        if (result === `You WON! ${choiceUser} beats ${choicePc}`) {
                scoreUser++;
        } else if (result === `You LOSE! ${choicePc} beats ${choiceUser}`) {
                scorePc++;
        } else {
                scoreUser;
                scorePc;
        }
}
*/




const buttonSelection = document.querySelectorAll('.buttonSelection');
buttonSelection.forEach(button => button.addEventListener('click', buttonChoice))

let divResults = document.querySelector('#match-results');
let divTotalScore = document.querySelector('#total-score');

function buttonChoice(e) {
        playerSelection = e.target.value;
        computerSelection = computerPlay();
        divResults.textContent = playRound(playerSelection, computerSelection);
        divTotalScore.textContent = totalScore();
        if(scoreUser === 5 ) {
                divTotalScore.textContent = 'USER WON THE MATCH!';
                buttonSelection.forEach(button => button.removeEventListener('click', buttonChoice));
        } else if(scorePc === 5) {
                divTotalScore.textContent = 'PC WON THE MATCH!';
                buttonSelection.forEach(button => button.removeEventListener('click', buttonChoice));
        }
}



// game();
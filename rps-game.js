const playBtnsDiv = document.getElementById("button-container");
const btnArray = Array.from(playBtnsDiv.children);

const button1 = document.getElementById('rock');
const button2 = document.getElementById('paper');
const button3 = document.getElementById('scissors');
const resetButton = document.getElementById('reset-button');

const playerChoice = document.getElementById("player-choice");
const cpuChoice = document.getElementById("cpu-choice");
const result = document.getElementById("result");
const playerScoreSpan = document.getElementById("player-score");
const cpuScoreSpan = document.getElementById("cpu-score")
const announceWinner = document.getElementById("announce-winner");


var playerScore = 0;
var cpuScore = 0;

function getComputerChoice(){
    let choice = (Math.random() * (2 - 0 + 1) ) << 0;
    console.log("Computer chose: " + numToRPS(choice));
    cpuChoice.textContent = numToRPS(choice);
    return choice;
}

function numToRPS(num){
    switch(num){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getPlayerChoice(choice){
    switch(choice){
        case "rock": 
        playerChoice.textContent = "Rock";
        return 0;

        case "paper":
        playerChoice.textContent = "Paper"; 
        return 1;

        case "scissors": 
        playerChoice.textContent = "Scissors";
        return 2;

        default: return "ERROR";
    }
}

function mainRound(playerChoice){
    let pChoice = getPlayerChoice(playerChoice);
    let cChoice = getComputerChoice();
    console.log(playerChoice);

    if(pChoice === cChoice){
        result.textContent = "Tie! You both chose " + numToRPS(pChoice);

    }else if(cChoice - 1 === pChoice || cChoice + 2 === pChoice){
        result.textContent = "You Lose The Round! " + numToRPS(cChoice) + " beats " + numToRPS(pChoice);
        updateScore(cpuScoreSpan, ++cpuScore);

    }else {
        result.textContent = "You Win The Round! " + numToRPS(pChoice) + " beats " + numToRPS(cChoice);
        updateScore(playerScoreSpan, ++playerScore);

    }

    if(playerScore >= 5){
        announceWinner.textContent = "You won the game!";
        hideButtonsAndShowReset();
    }else if(cpuScore >= 5){
        announceWinner.textContent = "The CPU won the game!";
        hideButtonsAndShowReset();
    }
}

function updateScore(winnerSpan, score){
    winnerSpan.textContent = score;
}

btnArray.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(button.id !== "reset-button"){
            mainRound(button.id);
        }
        
    });

});

function hideButtonsAndShowReset() {
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    resetButton.style.display = 'inline-block';
}

function resetGameAndHideReset() {
    button1.style.display = 'inline-block';
    button2.style.display = 'inline-block';
    button3.style.display = 'inline-block';
    resetButton.style.display = 'none';
    cpuScore = 0;
    playerScore = 0;
    playerChoice.textContent = "";
    cpuChoice.textContent = "";
    announceWinner.textContent = "";
    displayScore();
}

resetButton.addEventListener('click', resetGameAndHideReset);
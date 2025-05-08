/* Rock Paper Scissor Game
Rock = 0
Paper = 1
Scissor = 2

- Input is case insensitive
*/

let computer, human;
let humanScore = 0;
let roundNumber = 0;

function getComputerChoice() {
    let randomOpponent = Math.floor(Math.random() * 3);
    return randomOpponent;
}

// Convert number of choice into text
function recallChoice(num1){
    if (num1 === 0) return "Rock";
    if (num1 === 1) return "Paper";
    if (num1 === 2) return "Scissor";
}

// Convert choice into number
function getChoiceValue(choice){
    const c = choice.toLowerCase();
    if(c === "rock") return 0;
    if(c === "paper") return 1;
    if(c === "scissor") return 2;
}

function beatsOver(choice1, choice2){
    return recallChoice(choice1) + " beats " + recallChoice(choice2) + "."
}

function resultMessage(message, humanChoice, computerChoice){

    const startMessage = "Round #" + roundNumber + ": ";

    const resultContainer = document.querySelector("#currentRound");
    const turnResult = document.createElement("p");

    if (humanChoice === computerChoice) {
        turnResult.textContent = startMessage + message + recallChoice(humanChoice);
    } else {
        turnResult.textContent = startMessage + message + beatsOver(computerChoice, humanChoice);
    }
    resultContainer.prepend(turnResult);
}

function playRound(computerChoice, humanChoice) {
    /* 
        Return the score of the game. Prints the result.
    */
    let draw = "It's a draw! Both played ";
    let win = "Player wins! ";
    let loss = "Computer wins. ";

    // DRAW: Same for both. Draw!
    if (computerChoice == humanChoice) {
        resultMessage(draw, humanChoice, computerChoice);
        return 0;
    }
    // WIN: Computer inputs rock, player paper.
    if ((computerChoice == 0 ) && (humanChoice) == 1) {
        resultMessage(win, humanChoice, computerChoice);
        return 1;
    }
    // LOSS: Computer inputs rock, player scissors
    if ((computerChoice == 0 ) && (humanChoice) == 2) {
        resultMessage(loss, humanChoice, computerChoice);
        return -1;
    }
    // LOSS: Computer inputs paper, player rock
    if ((computerChoice == 1 ) && (humanChoice) == 0){
        resultMessage(loss, humanChoice, computerChoice);
        return -1;
    }
    // WIN: Computer inputs paper, player scissors
    if ((computerChoice == 1) && (humanChoice == 2)){
        resultMessage(win, humanChoice, computerChoice);
        return 1;
    }
    // WIN: Computer inputs scissor, player rock
    if ((computerChoice == 2) && (humanChoice == 0)){
        resultMessage(win, humanChoice, computerChoice);
        return 1;
    }
    if ((computerChoice == 2) && (humanChoice == 1)){
        resultMessage(loss, humanChoice, computerChoice);
        return -1;
    }
    else return null;
}

// New contents for the game
const results = document.querySelector("#totalScore");
const resultText = document.createElement("p");

const gameButtons = document.querySelectorAll(".rps-choice");

gameButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (humanScore < 5 && humanScore > -5){
            let choice = getChoiceValue(button.textContent);
            humanScore += playRound(getComputerChoice(), choice);
            if (humanScore < 5 && humanScore > -5){
                resultText.textContent = "A pontuação atual é de: " + parseInt(humanScore);
                roundNumber++;
            } else {
                resultText.textContent = "<b>Game over</b>! A pontuação final é de: " + parseInt(humanScore);
            }
        }
    })
})

results.appendChild(resultText);
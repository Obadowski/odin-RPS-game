/* Rock Paper Scissor Game
Rock = 0
Paper = 1
Scissor = 2

- Input is case insensitive
*/
function getComputerChoice() {
    let randomOpponent = Math.floor(Math.random() * 3);
    return randomOpponent;
}

function getHumanChoice(){
    let choice = prompt("Please choose: Rock, Paper or Scissor", "");
    choice = choice.toLowerCase()
    if (choice === "rock") return 0;
    if (choice === "paper") return 1;
    if (choice === "scissor") return 2;
}

function recallChoice(num1){
    if (num1 === 0) return "Rock";
    if (num1 === 1) return "Paper";
    if (num1 === 2) return "Scissor";
}

function beatsOver(choice1, choice2){
    return recallChoice(choice1) + " beats " + recallChoice(choice2) + "."
}

function humanWin(win_str, humanChoice, computerChoice){
    console.log(win_str + beatsOver(humanChoice, computerChoice));
    return 1;
}

function humanLoss(loss_str, humanChoice, computerChoice){
    console.log(loss_str + beatsOver(computerChoice, humanChoice));
    return -1;
}

let computer, human;
let computerScore = 0, humanScore = 0;

function playRound(computerChoice, humanChoice) {
    /* 
        Return the score of the game. Prints the result.
    */
    let draw = "It's a draw! Both played ";
    let win = "Player wins! ";
    let loss = "Computer wins. ";

    // DRAW: Same for both. Draw!
    if (computerChoice == humanChoice) {
        console.log("It's a draw! Both played " + recallChoice(humanChoice));
        return 0;
    }
    // WIN: Computer inputs rock, player paper.
    if ((computerChoice == 0 ) && (humanChoice) == 1) {
        return humanWin(loss, humanChoice, computerChoice);
    }
    // LOSS: Computer inputs rock, player scissors
    if ((computerChoice == 0 ) && (humanChoice) == 2) {
        return humanLoss(loss, humanChoice, computerChoice);
    }
    // LOSS: Computer inputs paper, player rock
    if ((computerChoice == 1 ) && (humanChoice) == 0){
        return humanLoss(loss, humanChoice, computerChoice);
    }
    // WIN: Computer inputs paper, player scissors
    if ((computerChoice == 1) && (humanChoice == 2)){
        return humanWin(win, humanChoice, computerChoice);
    }
    // WIN: Computer inputs scissor, player rock
    if ((computerChoice == 2) && (humanChoice == 0)){
        return humanWin(win, humanChoice, computerChoice);
    }
    if ((computerChoice == 2) && (humanChoice == 1)){
        return humanLoss(loss, humanChoice, computerChoice)
    }
    else return null;
}

//playRound(computer, human);

for(let i = 0; i <= 5; i++){
    // human = Math.floor(Math.random() * 3);
    human = getHumanChoice();
    a = getComputerChoice();
    // console.log("New Game");
    // console.log(a)
    // console.log(human)
    humanScore += playRound(a, human);
}

console.log("My score: " + humanScore);
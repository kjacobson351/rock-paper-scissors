//get input from player(from buttons)


//get computer choice


//play round

//evaluate the winner of round dependent on pc / player choices


//update UI to show score


//play 5 rounds and declare winner


//EVENT LISTENERS/////////////////////////////////////
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', playerChoiceRock)

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', playerChoicePaper)

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', playerChoiceScissors)
//////////////////////////////////////////////////////

let playerChoice = "";
let computerChoice = 0;
let round = 0;
let playerScore = 0;
const playerText = document.querySelector("#playerText")
let computerScore = 0;
let roundResultMessage = "";
let finalResultMessage = "";

//these functions change the player choice input based on html button press

function playerChoiceRock(){
playerChoice = "Rock"
round++
getComputerChoice()
determineRoundWinner(playerChoice,computerChoice)
playerText.textContent = playerScore;
declareFinalWinner(playerScore,computerScore)
};

function playerChoicePaper(){
playerChoice = "Paper"
round++
getComputerChoice()
determineRoundWinner(playerChoice,computerChoice)
declareFinalWinner(playerScore,computerScore)
};

function playerChoiceScissors(){
    playerChoice = "Scissors"
    round++
    getComputerChoice()
    determineRoundWinner(playerChoice,computerChoice)
    declareFinalWinner(playerScore,computerScore)
    };

//Determines computer choice from random number between 0-2
function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3)
    
    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else  if (computerChoice === 2){
        computerChoice = "Scissors";
    }else {"getComputerChoice ERROR"};
};

//determines who the winnder of the round is and awards points accordingly.
function determineRoundWinner(playerChoice,computerChoice){
    if (playerChoice == computerChoice) {
        roundResultMessage = "It's a draw!"

    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        roundResultMessage = "You Win! Rock smashes scissors";
        playerScore++;

    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        roundResultMessage = "You lose! Paper covers rock!";
        computerScore++;

    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        roundResultMessage = "You win! Paper covers rock!";
        playerScore++;
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        roundResultMessage = "You lose! Scissors cuts paper!"
        computerScore++
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        roundResultMessage = "You win! Paper covers rock!";
        playerScore++;
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        roundResultMessage = "You lose! Rock smashes scissors!";
        computerScore++;
    } else {alert("determineRoundWinner ERROR")}
}
// declares to the first player with 5 points
function declareFinalWinner(playerScore,computerScore) {
    if (playerScore === 5) {
        finalResultMessage = "PLAYER WINS"
    } if (computerScore === 5) {
        finalResultMessage = "COMPUTER WINS";
    }
    };
    
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
const playerChoiceText = document.querySelector("#playerChoiceText")
let computerChoice = 0;
const computerChoiceText = document.querySelector("#computerChoiceText");
let round = 0;
let playerScore = 0;
const playerScoreText = document.querySelector("#playerScoreText")
let computerScore = 0;
const computerScoreText = document.querySelector("#computerScoreText");
let roundResultMessage = "";
const roundResultMessageText = document.querySelector("#roundResultMessageText")
let finalResultMessage = "";
const finalResultMessageText = document.querySelector("#finalResultMessageText")
///////////////Sound Variables//////////////////////////////////////////////
let ropapsiIntro = document.querySelector("#ropapsiIntro")

//these functions change the player choice input based on html button press

function playerChoiceRock(){
playerChoice = "Rock"
round++
getComputerChoice()
determineRoundWinner(playerChoice,computerChoice)
//This updates the UI/////////////////////////////////
playerChoiceText.textContent = playerChoice;
playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;
computerChoiceText.textContent = computerChoice;
roundResultMessageText.textContent = roundResultMessage;
///////////////////////////////////////////////////////
declareFinalWinner(playerScore,computerScore)
test()
};

function playerChoicePaper(){
playerChoice = "Paper"
round++
getComputerChoice()
determineRoundWinner(playerChoice,computerChoice)
playerChoiceText.textContent = playerChoice;
playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;
computerChoiceText.textContent = computerChoice;
roundResultMessageText.textContent = roundResultMessage;
declareFinalWinner(playerScore,computerScore)
};

function playerChoiceScissors(){
    playerChoice = "Scissors"
    round++
    getComputerChoice()
    determineRoundWinner(playerChoice,computerChoice)
    playerChoiceText.textContent = playerChoice;
playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;
computerChoiceText.textContent = computerChoice;
roundResultMessageText.textContent = roundResultMessage;
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
        roundResultMessage = "You win! Rock smashes scissors!";
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
// declares to the first player with 5 points and removes buttons and roundResultMessageText
function declareFinalWinner(playerScore,computerScore) {
    if (playerScore === 5) {
        finalResultMessage = "HUMAN WINS"
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        roundResultMessageText.remove();
        finalResultMessageText.textContent = finalResultMessage;
    } if (computerScore === 5) {
        finalResultMessage = "COMPUTER WINS";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        roundResultMessageText.remove();
        finalResultMessageText.textContent = finalResultMessage;
    }
    };

    function test() {
        if ((playerScore < 5 && computerScore < 5) && roundResultMessage.includes("You win!")) {
            winSound = (Math.floor(Math.random () * 5) + 1);
        switch (winSound){
            case 1:
           console.log(1)
           break;
           case 2:
           console.log(2) 
           break;
           case 3:
           console.log(3) 
           break;
           case 4:
           console.log(4) 
           break;
           case 5:
           console.log(5) 
           break;
 
        }
    }
    }; 
//THIS WORKS!
    //ropapsiIntro.play()
let computerChoice = 1
let playerInput = "scissors"
let match
let matchCount = 0
let computerScore = 0
let playerScore = 0
let win
let lose
let draw



function getComputerChoice(){
    computerChoice = Math.random() * 3;
    computerChoice = Math.floor(computerChoice);
    if (computerChoice === 0) {
        computerChoice = "Rock" 
    } else if (computerChoice === 1) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    } return computerChoice; 
    
    }


//This makes PlayerInput case insensitive
function formatPlayerInput() {
  playerInput = playerInput.toLocaleLowerCase()
  firstChar = playerInput.slice(0,1);
  firstChar = firstChar.toUpperCase()
  otherChar = playerInput.substring(1)
  playerChoice = firstChar + otherChar
  
}











//This takes computer and player choice and determines the winner.
function rockPaperScissors(){
    formatPlayerInput();
match = computerChoice + " " + playerChoice;
switch (match) {
    case "Rock Rock":
        return("It's a draw, TRY AGAIN.");
    break;
    case "Rock Paper":
        return("Paper beats rock. YOU WIN!");
    break;
    case "Rock Scissors":
        return("Rock beats Scissors. YOU LOSE");
    break;
    case "Paper Rock":
        return("Paper beats rock. YOU LOSE!");
    break;
    case "Paper Paper":
        return("It's a draw, TRY AGAIN.");
    break;
    case "Paper Scissors":
        return("Scissors beats paper. YOU WIN!");
    break;
    case "Scissors Rock":
        return("Rock beats scissors. YOU WIN!");
    break;
    case "Scissors Paper":
        return("Scissors beats paper. YOU LOSE!");
    break;
    case "Scissors Scissors":
        return("It's a draw, TRY AGAIN.");
    break;
    default: return "error";
}
}


function playRound(){
    playerInput = prompt();
    getComputerChoice();
    rockPaperScissors();
    matchCount++;
    getScore();
    declareWinner();
    console.log(computerChoice);
    console.log(playerChoice);
    console.log(rockPaperScissors());
    console.log(declareWinner());
    
    
}
    

 
// Checks for a win condition in the rockpaperscissors() return, then distributes points accordingly  
function getScore(){
if (rockPaperScissors().includes("YOU WIN!") ){
 playerScore ++
} else if (rockPaperScissors().includes("YOU LOSE!")){
    computerScore ++
} else {}
}

function resetScore(){
    playerScore = 0;
    computerScore =0;
}

function declareWinner() {
    if (playerScore > computerScore){
        return `Computer score: ${computerScore}. Player score: ${playerScore}. YOU WIN`
    } else if (playerScore < computerScore) {
        return `Computer score: ${computerScore}. Player score: ${playerScore}. YOU LOSE`
    }  else {
        return `Computer score: ${computerScore}. Player score: ${playerScore}. YOU Draw`
    }
}
  
  
    
    
    


//This plays 5 rounds...need to find a way to keep score
function game() {
    for (let matchCount = 1; matchCount < 6; matchCount++)
playRound();
resetScore()
}


game()

console.log(rockPaperScissors().includes("YOU WIN!"))
console.log(rockPaperScissors().includes("YOU LOSE!"))
console.log(rockPaperScissors().includes("TRY AGAIN"))
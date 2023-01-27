let computerChoice = 1
let playerChoice = "Rock"
let match

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


getComputerChoice()
console.log(computerChoice)
console.log(playerChoice)
rockPaperScissors()







function rockPaperScissors(){
match = computerChoice + " " + playerChoice;
switch (match) {
    case "Rock Rock":
        console.log("It's a draw, TRY AGAIN.")
    break;
    case "Rock Paper":
        console.log("Paper beats rock. YOU WIN!")
    break;
    case "Rock Scissors":
        console.log("Rock beats Scissors. YOU LOSE")
    break;
    case "Paper Rock":
        console.log("Paper beats rock. YOU LOSE!")
    break;
    case "Paper Paper":
        console.log("It's a draw, TRY AGAIN.")
    break;
    case "Paper Scissors":
        console.log("Scissors beats paper. YOU WIN!")
    break;
    case "Scissors Rock":
        console.log("Rock beats scissors. YOU LOSE!")
    break;
    case "Scissors Paper":
        console.log("Scissors beats paper. YOU WIN!")
    break;
    case "Scissors Scissors":
        console.log("It's a draw, TRY AGAIN.")
    break;
    default: console.log(ERROR)
}
}






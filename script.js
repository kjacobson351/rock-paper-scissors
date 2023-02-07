
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
const playerScoreText = document.querySelector("#playerScoreText");
let computerScore = 0;
const computerScoreText = document.querySelector("#computerScoreText");
let roundResultMessage = "";
const roundResultMessageText = document.querySelector("#roundResultMessageText");
let finalResultMessage = "";
const finalResultMessageText = document.querySelector("#finalResultMessageText");
///////////////Sound Variables//////////////////////////////////////////////
let ropapsiIntro = document.querySelector("#ropapsiIntro");
let win;
let lose;



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
declareFinalWinner(playerScore,computerScore);
winSound();
loseSound();
finalWinSound();
finalLoseSound();
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
winSound();
loseSound();
finalWinSound();
finalLoseSound();
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
winSound();
loseSound();
finalWinSound();
finalLoseSound();
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
        finalResultMessage = "MEAT BAG WINS!?"
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        roundResultMessageText.remove();
        finalResultMessageText.textContent = finalResultMessage;
    } if (computerScore === 5) {
        finalResultMessage = "RoPapSi WINS!";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        roundResultMessageText.remove();
        finalResultMessageText.textContent = finalResultMessage;
    }
    };

    function winSound() {
        let winSoundNum = 0
        if ((playerScore < 5 && computerScore < 5) && roundResultMessage.includes("You win!")) {
            winSoundNum = (Math.floor(Math.random () * 10) + 1);
            console.log(winSoundNum)
        switch (winSoundNum){
            case 1:
           playerWin1.play()
           break;
           case 2:
            playerWin2.play() 
           break;
           case 3:
            playerWin3.play() 
           break;
           case 4:
            playerWin4.play() 
           break;
           case 5:
            playerWin5.play() 
           break;
           case 6:
            playerWin6.play() 
           break;
           case 7:
            playerWin7.play() 
           break;
           case 8:
            playerWin8.play() 
           break;
           case 9:
            playerWin9.play() 
           break;
           case 10:
            playerWin10.play() 
           break;
        }
    }
    }; 

    function finalWinSound() {
        let winSoundNum = 0
        if (playerScore === 5) {
            winSoundNum = (Math.floor(Math.random () * 3) + 1);
        switch (winSoundNum){
            case 1:
           finalPlayerWin1.play()
           break;
           case 2:
            finalPlayerWin2.play() 
           break;
           case 3:
            finalPlayerWin3.play() 
        }
    }
};

    function loseSound() {
        let loseSoundNum = 0
        if ((playerScore < 5 && computerScore < 5) && roundResultMessage.includes("You lose!")) {
            loseSoundNum = (Math.floor(Math.random () * 10) + 1);
            console.log(loseSoundNum)
        switch (loseSoundNum){
            case 1:
           playerLose1.play()
           break;
           case 2:
            playerLose2.play() 
           break;
           case 3:
            playerLose3.play() 
           break;
           case 4:
            playerLose4.play() 
           break;
           case 5:
            playerLose5.play() 
           break;
           case 6:
            playerLose6.play() 
           break;
           case 7:
            playerLose7.play() 
           break;
           case 8:
            playerLose8.play() 
           break;
           case 9:
            playerLose9.play() 
           break;
           case 10:
            playerLose10.play() 
           break;
        }
    }
    }; 

    function finalLoseSound() {
        let loseSoundNum = 0
        if (computerScore === 5) {
            loseSoundNum = (Math.floor(Math.random () * 3) + 1);
        switch (loseSoundNum){
            case 1:
           finalPlayerLose1.play()
           break;
           case 2:
            finalPlayerLose2.play() 
           break;
           case 3:
            finalPlayerLose3.play() 
        }
    }
};


//THIS WORKS!
    //ropapsiIntro.play()





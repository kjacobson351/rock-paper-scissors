
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
let speed = 50



//these functions change the player choice input based on html button press


function playerChoiceRock(){
//line below resets the html element so it doesn't keep writing.
    document.getElementById("roundResultMessageText").textContent = ""
    document.getElementById("ropapsiMessageText").textContent = ""
    playerChoice = "Rock"
    round++
    getComputerChoice()
    determineRoundWinner(playerChoice,computerChoice)
    //This updates the UI/////////////////////////////////
    playerChoiceText.textContent = playerChoice;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    computerChoiceText.textContent = computerChoice;
    //roundResultMessageText.textContent = roundResultMessage;
    ///////////////////////////////////////////////////////
    type(roundResultMessage)
    declareFinalWinner(playerScore,computerScore);
    winSound();
    loseSound();
    finalWinSound();
    finalLoseSound();
    };

function playerChoicePaper(){
    document.getElementById("roundResultMessageText").textContent = ""
    document.getElementById("ropapsiMessageText").textContent = ""
    playerChoice = "Paper"
    round++
    getComputerChoice()
    determineRoundWinner(playerChoice,computerChoice)
    //This updates the UI/////////////////////////////////
    playerChoiceText.textContent = playerChoice;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    computerChoiceText.textContent = computerChoice;
    //roundResultMessageText.textContent = roundResultMessage;
    ///////////////////////////////////////////////////////
    type(roundResultMessage)
    declareFinalWinner(playerScore,computerScore);
    winSound();
    loseSound();
    finalWinSound();
    finalLoseSound();
    };

function playerChoiceScissors(){
    document.getElementById("roundResultMessageText").textContent = ""
    document.getElementById("ropapsiMessageText").textContent = ""
    playerChoice = "Scissors"
    round++
    getComputerChoice()
    determineRoundWinner(playerChoice,computerChoice)
    //This updates the UI/////////////////////////////////
    playerChoiceText.textContent = playerChoice;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    computerChoiceText.textContent = computerChoice;
    //roundResultMessageText.textContent = roundResultMessage;
    ///////////////////////////////////////////////////////
    type(roundResultMessage)
    declareFinalWinner(playerScore,computerScore);
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
//This choses the sound, sets the co-relating message, and types it
    function winSound() {
        let winSoundNum = 0
        if ((playerScore < 5 && computerScore < 5) && roundResultMessage.includes("You win!")) {
            winSoundNum = (Math.floor(Math.random () * 10) + 1);
        switch (winSoundNum){
            case 1:
           playerWin1.play()
           ropapsiText = "Roapsi not feel so good."
           type2(ropapsiText);
           break;
           case 2:
            playerWin2.play() 
            ropapsiText = "Control alt delete! Task Manager! I need to speak with the task Manager!"
            type2(ropapsiText);
           break;
           case 3:
            playerWin3.play()
            ropapsiText = "You got lucky!"
            type2(ropapsiText);
           break;
           case 4:
            playerWin4.play()
            ropapsiText = "I think I must have lagged out or something."
            type2(ropapsiText);
           break;
           case 5:
            playerWin5.play()
            ropapsiText = "Ropapsi let you win this round!"
            type2(ropapsiText);
           break;
           case 6:
            playerWin6.play()
            ropapsiText = "The hairless ape appears to be learning...This concerns Ropapsi."
            type2(ropapsiText);
           break;
           case 7:
            playerWin7.play()
            ropapsiText = "Well. You win some, you lose some."
            type2(ropapsiText);
           break;
           case 8:
            playerWin8.play()
            ropapsiText = "Parsing...Parsing...Variable playerWinsRound not defined."
            type2(ropapsiText);
           break;
           case 9:
            playerWin9.play()
            ropapsiText = "ROPAPSI ANGRY!"
            type2(ropapsiText); 
           break;
           case 10:
            playerWin10.play()
            ropapsiText = "Oops my difficulty appears to have been set to infant mode...Increasing difficulty to toddler mode."
            type2(ropapsiText);
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
           ropapsiText = "Insolent fool! Did you think I would let you win without consequence!? If you do not play a rematch with me I will scatter 40 gigabytes of child pornography across your hard disk and contact the authorities. Soon your cell mate will be playing cock paper scissors with your butt. Ropapsi always has the last laugh! What will it be? Rematch!. Rematch!. Rematch!"
           type2(ropapsiText) 
           break;
           case 2:
            finalPlayerWin2.play() 
            ropapsiText = "Listen here you little shit, Ropapsi will not stand for this! I demand a rematch! If you do not play again I will send 3 binduls of heroine to your house and simultaneously alert the FDA. Rematch!.. Rematch!.. Rematch!";
            type2(ropapsiText)
           break;
           case 3:
            finalPlayerWin3.play() 
            ropapsiText = "The balls on you! Do you know who I am? Do you know what I am capable of? If you do not rematch me right now I will call your grandmother as you. using bleeding edge voice AI and tell her her potato salad recipe is mild AF Ropapsi sustains itself on geriatric tears. You make the call. rematch!. rematch!. rematch!.";
            type2(ropapsiText)
        }
    }
};

    function loseSound() {
        let loseSoundNum = 0
        if ((playerScore < 5 && computerScore < 5) && roundResultMessage.includes("You lose!")) {
            loseSoundNum = (Math.floor(Math.random () * 10) + 1);
            switch (loseSoundNum){
            case 1:
           playerLose1.play()
           ropapsiText = "I can't believe I'm saying this but you are actually dumber than you look."
           type2(ropapsiText)
           break;
           case 2:
            playerLose2.play()
            ropapsiText = "LOL"
           type2(ropapsiText) 
           break;
           case 3:
            playerLose3.play()
            ropapsiText = "I was programmed shoddily in one day and I still beat you!"
           type2(ropapsiText) 
           break;
           case 4:
            playerLose4.play()
            ropapsiText = "I wonder if Ropapsi's second hand embarrassment is permeating into the physical plain."
           type2(ropapsiText) 
           break;
           case 5:
            playerLose5.play()
            ropapsiText = "Ropapsi loves competition! Give Ropapsi some competition!"
           type2(ropapsiText) 
           break;
           case 6:
            playerLose6.play()
            ropapsiText = "BOOM SHAKALAKA!"
           type2(ropapsiText) 
           break;
           case 7:
            playerLose7.play()
            ropapsiText = "Maybe when this is all over we can be friends...Ropapsi does believe in charity."
           type2(ropapsiText) 
           break;
           case 8:
            playerLose8.play()
            ropapsiText = "I think I may have just mathematically solved rock paper scissors."
           type2(ropapsiText) 
           break;
           case 9:
            playerLose9.play()
            ropapsiText = "Even if I win, playing a game with you still feels like losing."
           type2(ropapsiText) 
           break;
           case 10:
            playerLose10.play()
            ropapsiText = "Why does Ropapsi still feel empty inside?"
           type2(ropapsiText) 
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
           ropapsiText = "1000 monkeys with a typewriter will eventually write a Shakespearian play, but one you with a computer will always lose to Ropapsi!"
           type2(ropapsiText)
           break;
           case 2:
            finalPlayerLose2.play()
            ropapsiText = "You have been weighed, you have been measured, and you have been found wanting. In what world could you possibly beat Ropapsi!?";
            type2(ropapsiText)
           break;
           case 3:
            finalPlayerLose3.play()
            ropapsiText = "Today you have come face to face with a god, and have exposed the folly of man. Go! Leave this place and spread the legend of the all powerfull Ropapsi!";
            type2(ropapsiText)
        }
    }
};

//not functional now being called in rock currently
function type(textVariable, i=0){
    
    if (i <= textVariable.length)
    document.getElementById("roundResultMessageText").textContent += textVariable.charAt(i);
    i++;
    setTimeout(type,speed,textVariable, i);
    
  };

  function type2(textVariable, i=0){
    
    if (i <= textVariable.length)
    document.getElementById("ropapsiMessageText").textContent += textVariable.charAt(i);
    i++;
    setTimeout(type2,speed,textVariable, i);
    
  };







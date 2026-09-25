console.log("Welcome to my game!");

// Function to generate number between 1 to 3
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// Computer will choose
function getComputerChoice() {
    let num = getRandomInt(1,4);
    let choice;

    if(num == 1){
        choice = "Rock";
    }
    else if(num == 2){
        choice = "Paper";
    }
    else{
        choice = "Scissor";
    }

    return choice;
}

// User will make choice
function getHumanChoice() {
    choice = prompt("Rock, Paper os Scissor?");
    return choice;
}

// Declare variable to take note of score
let humanScore = 0;
let computerScore = 0;

// Compare both choice 
function playRound(humanChoice,computerChoice) {

    if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice.toLowerCase() == "scissor") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
        }
        else if (computerChoice.toLowerCase() == "paper") {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        }
        else{
            console.log("It's tie! Both choose same.")
        }
    }

    else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice.toLowerCase() == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
        }
        else if (computerChoice.toLowerCase() == "scissor") {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        }
        else{
            console.log("It's tie! Both choose same.")
        }
    }

    else if (humanChoice.toLowerCase() == "scissor") {
        if (computerChoice.toLowerCase() == "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
        }
        else if (computerChoice.toLowerCase() == "rock") {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        }
        else{
            console.log("It's tie! Both choose same.")
        }
    }

    return;

}

// Function to play game 5 timer
function playGame(){

    for (let i = 0; i < 5; i++) {
       round = playRound(getHumanChoice(),getComputerChoice());
    }

}

// Declare winner
function getWinner(){
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won!");
        alert("You won!");
    }
    else if (humanScore < computerScore) {
        console.log("You loose!");
        alert("You loose!");
    }
    else{
        console.log("It's tie!");
        alert("It's tie!");
    }

return;

}

// Call th playGame function to start the game
playGame();
getWinner();


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
function getHumanChoice(value) {
    
    let choice = value;
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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector(".result");

const comScore = document.createElement("div");
comScore.innerText = `Computer's score: ${computerScore}`;
const plyrScore = document.createElement("div");
plyrScore.innerText = `Your score: ${humanScore}`;

result.appendChild(comScore);
result.appendChild(plyrScore);

rock.addEventListener("click",() => {
    playRound(getHumanChoice("rock"),getComputerChoice());

    plyrScore.innerText = `Your score: ${humanScore}`;
    comScore.innerText = `Computer's score: ${computerScore}`;

    if (humanScore == 5){
        const winner = document.createElement("div");
        winner.innerText = "You won the game!";

        result.setAttribute("style","background-color: #90EE90;");
        result.appendChild(winner);

        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        const winner = document.createElement("div");
        winner.innerText = "computer won the game!";

        result.setAttribute("style","background-color: #FF7F7F;");
        result.appendChild(winner);
        
        humanScore = 0;
        computerScore = 0;
    }
});

paper.addEventListener("click",() => {
    playRound(getHumanChoice("paper"),getComputerChoice());

    plyrScore.innerText = `Your score: ${humanScore}`;
    comScore.innerText = `Computer's score: ${computerScore}`;

    if (humanScore == 5){
        const winner = document.createElement("div");
        winner.innerText = "You won the game!";

        result.setAttribute("style","background-color: #90EE90;");
        result.appendChild(winner);

        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        const winner = document.createElement("div");
        winner.innerText = "computer won the game!";

        result.setAttribute("style","background-color: #FF7F7F;");
        result.appendChild(winner);
        
        humanScore = 0;
        computerScore = 0;
    }
});

scissor.addEventListener("click",() => {
    playRound(getHumanChoice("scissor"),getComputerChoice());

    plyrScore.innerText = `Your score: ${humanScore}`;
    comScore.innerText = `Computer's score: ${computerScore}`;

    if (humanScore == 5){
        const winner = document.createElement("div");
        winner.innerText = "You won the game!";

        result.setAttribute("style","background-color: #90EE90;");
        result.appendChild(winner);

        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        const winner = document.createElement("div");
        winner.innerText = "computer won the game!";

        result.setAttribute("style","background-color: #FF7F7F;");
        result.appendChild(winner);
        
        humanScore = 0;
        computerScore = 0;
    }
});
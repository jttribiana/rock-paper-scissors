//global scope

let humanScore = 0;
let computerScore = 0;

console.log(`👩‍🦰: ${humanScore}`);
console.log(`👾: ${computerScore}`);

//making human choose

function getHumanChoice() {
    let human = window.prompt("rock, paper, or scissors").toLowerCase();
    return human;
}


//making computer choose
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}


let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

//logic to play single round

function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        console.log("It's a tie! 🤝");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors crushes paper! 😎");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper crushes rock! 😎");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock crushes scissors! 😎");
        humanScore++;
    } else  {
        console.log("You lose! 🤬");
        computerScore++;
    }
}


console.log(`👩‍🦰: ${humanChoice}`);
console.log(`👾: ${computerChoice}`);
playRound (humanChoice,computerChoice) 

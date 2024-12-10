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




//play loop 5 times


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
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
    
        } else if (computerChoice === "scissors" && humanChoice === "paper"){
            console.log("Computer wins! Scissors crushes paper! 😎");
            computerScore++;
    
        } else if (computerChoice === "paper" && humanChoice === "rock"){
            console.log("Computer wins! Paper crushes rock! 😎");
            computerScore++;
    
        } else if (computerChoice === "rock" && humanChoice === "scissors"){
            console.log("Computer wins! Rock crushes scissors! 😎");
            computerScore++;
    
        } else  {
            console.log("Enter a valid choice: rock, paper, or scissors!");
    
        }
    }

} //added braces cos the end of functoin has been removed for now

//addition of ui






//making input button that would give r, p, s

const div = document.createElement("div");


const demo = document.createElement("p");
demo.textContent = "Hello world";
const body = document.querySelectorAll("body");
const ul = document.createElement("ul");
const li = document.createElement("li");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");




body.appendChild(ul)
ul.appendChild(li);
li.appendChild(rockBtn)
rockBtn.textContent = "Rock"



//problem no text inside the html, append the elements inside the body
//you need to use prolly the insert before body to append




/*
    
    for (let i = 1; i < 6; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`👩‍🦰: ${humanChoice}`);
        console.log(`👾: ${computerChoice}`);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}
playGame()

//things to improve later on 
//1. add announcement for who wins in 5 rounds
//2. improve function readability (if else is too long)
//3. add another window prompt when entered human choice is error
*/
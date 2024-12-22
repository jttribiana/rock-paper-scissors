

let humanScore = 0;
let computerScore = 0;

const button = document.querySelectorAll(".btn");

button.forEach(button => {
    button.addEventListener('click', (e) => {


        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"]
            return choices[Math.floor(Math.random() * choices.length)];
        }
        let humanChoice = (e.target.value);
        let computerChoice = getComputerChoice();
        
        function playGame() {

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
                } 
            }
            
            
                playRound(humanChoice, computerChoice);
                console.log(`👩‍🦰: ${humanChoice}`);
                console.log(`👾: ${computerChoice}`);
            
                console.log(`Your score: ${humanScore}`);
                console.log(`Computer score: ${computerScore}`)
            
        }
        playGame()
    })
})

/*

    while (humanScore < 5 && computerScore < 5){
        let humanChoice = (e.target.value);
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`👩‍🦰: ${humanChoice}`);
        console.log(`👾: ${computerChoice}`);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }


const button = document.querySelectorAll(".btn");

button.forEach(button => {
    button.addEventListener('click', (e) => {
        playGame();

        function playGame(){
            let humanScore = 0;
            let computerScore = 0;

            
            let humanChoice = (e.target.value);
            console.log(humanChoice)
            let computerChoice = getComputerChoice();
            function getComputerChoice() {
                const choices = ["rock", "paper", "scissors"];
                return choices[Math.floor(Math.random() * choices.length)];
            }
            console.log(computerChoice);
            console.log(`Your score: ${humanScore}`);
            console.log(`Your score: ${computerScore}`);

        return playRound(humanChoice, computerChoice)
        
        //playround
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
        
            } else if (humanScore === 5 && computerScore < 5){
                console.log("You win! Congrats");
        
            } else if (computerScore === 5 && humanScore < 5){
                console.log("Computer wins! Try again!")
            }
        }
        }
    })
    
})

*/

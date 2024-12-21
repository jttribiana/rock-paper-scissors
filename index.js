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
        
            } else  {
                console.log("Enter a valid choice: rock, paper, or scissors!");
        
            }  
        }
        }
    })
    
})







//this is semi working code lmao,, amma edit it based on my preference

/*

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playGame();
        function playGame(){
            let humanScore = 0;
            let computerScore = 0;
            let playerSelection = String(e.target.value);
            let computerSelection = getComputerChoice();
            console.log(`You : ${playerSelection}`);
            console.log(`Computer: ${computerSelection}`);
            console.log(humanScore)
            console.log(computerScore)

        return playRound (playerSelection, computerSelection);
    
        
        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            return choices[Math.floor(Math.random() * choices.length)];
        }
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


        }
    })
})


/*

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

*/
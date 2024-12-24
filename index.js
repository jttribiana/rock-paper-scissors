let humanScore = 0;
let computerScore = 0;

const clickButton = document.querySelectorAll(".btn");

clickButton.forEach(button => {
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

                const playHuman = document.getElementById("playHuman");
                playHuman.textContent = `You chose: ${humanChoice}`;
                const playComputer = document.getElementById ("playComputer");
                playComputer.textContent = `Computer chose: ${computerChoice}`;
                const showHumanScore = document.getElementById("human");
                showHumanScore.textContent = `Your Score: ${humanScore}`;
                const showComputerScore = document.getElementById("computer");
                showComputerScore.textContent = `Computer Score: ${computerScore}`;

                ///this function works, but the reset part fails
                //this part should, reset game, disable the buttons, and put out reset button
                function chooseWinner (){
                    const rockBtn = document.getElementById("rockBtn");
                    const paperBtn = document.getElementById("paperBtn");
                    const scissorsBtn = document.getElementById("scissorsBtn");
                    const divButtons = document.getElementById('btnParent');

                    if (humanScore === 5 && computerScore < 5){
                        console.log("You win the game!");
                        rockBtn.disabled = true;
                        paperBtn.disabled = true;
                        scissorsBtn.disabled = true;
                        ///reset button
                        const listBtn = document.createElement('li');
                        divButtons.appendChild(listBtn);
                        const reset = document.createElement('button');
                        reset.textContent = "RESET";
                        listBtn.appendChild(reset);

                        
                    } else if (computerScore === 5 && humanScore < 5){
                        console.log("Computer wins! Try again!");
                        rockBtn.disabled = true;
                        paperBtn.disabled = true;
                        scissorsBtn.disabled = true;
                        ///reset button
                        const listBtn = document.createElement('li');
                        divButtons.appendChild(listBtn);
                        const reset = document.createElement('button');
                        reset.textContent = "RESET";
                        listBtn.appendChild(reset);
                    } else {
                        rockBtn.disabled = false;
                        paperBtn.disabled = false;
                        scissorsBtn.disabled = false;
                    }
                }
                chooseWinner();
        }
        playGame()
    })
})



///game reset function 


///announce the winner
///reset the game, disable the button, reset click
///make the UI better, showing the scores

/*

                    if (humanScore === 5 && computerScore < 5)document.querySelectorAll(".btn").disabled=true;
                    {
                        console.log("You win the game!");
                        clickButton.disabled = true;
                    } else if (computerScore === 5 && humanScore < 5){
                        console.log("Computer wins! Try again!");
                        clickButton.disabled = true;

                    } else clickButton.disabled = false;

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

let humanScore = 0;
let computerScore = 0;

const clickButton = document.querySelectorAll(".btn");

clickButton.forEach(button => {
    button.addEventListener('click', (e) => {


        function getComputerChoice() {
            const choices = ["Rock", "Paper", "Scissors"]
            return choices[Math.floor(Math.random() * choices.length)];
        }
        let humanChoice = (e.target.value);
        let computerChoice = getComputerChoice();
        
        function playGame() {

            function playRound(humanChoice, computerChoice){
                if (humanChoice === computerChoice) {
                    console.log("It's a tie! 🤝");
                } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
                    console.log("You win! Scissors crushes paper! 😎");
                    humanScore++;
            
                } else if (humanChoice === "Paper" && computerChoice === "Rock"){
                    console.log("You win! Paper crushes rock! 😎");
                    humanScore++;
            
                } else if (humanChoice === "Rock" && computerChoice === "Scissors"){
                    console.log("You win! Rock crushes scissors! 😎");
                    humanScore++;
            
                } else if (computerChoice === "Scissors" && humanChoice === "Paper"){
                    console.log("Computer wins! Scissors crushes paper! 😎");
                    computerScore++;
            
                } else if (computerChoice === "Paper" && humanChoice === "Rock"){
                    console.log("Computer wins! Paper crushes rock! 😎");
                    computerScore++;
            
                } else if (computerChoice === "Rock" && humanChoice === "Scissors"){
                    console.log("Computer wins! Rock crushes scissors! 😎");
                    computerScore++;
                } 
            }
            
            playRound(humanChoice, computerChoice);

                const playHuman = document.getElementById("playHuman");
                playHuman.textContent = `🧑‍💻 ${humanChoice}`;
                const playComputer = document.getElementById ("playComputer");
                playComputer.textContent = `🤖 ${computerChoice}`;
                const showHumanScore = document.getElementById("human");
                showHumanScore.textContent = `${humanScore}`;
                const showComputerScore = document.getElementById("computer");
                showComputerScore.textContent = `${computerScore}`;
                

                ///this function works, but the reset part fails
                //this part should, reset game, disable the buttons, and put out reset button
                function chooseWinner (){
                    const rockBtn = document.getElementById("rockBtn");
                    const paperBtn = document.getElementById("paperBtn");
                    const scissorsBtn = document.getElementById("scissorsBtn");
                    const divButtons = document.getElementById('btnParent');
                    const announceWinner = document.createElement('p');
                    const winHere = document.getElementById('winStatement')
                    winHere.appendChild(announceWinner);
                   
                    let win = "Awesome, you win!"
                    let lose = "Too bad! Computer wins. Try again!"
                    if (humanScore === 5 && computerScore < 5){
                        announceWinner.textContent = win;
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
                        announceWinner.textContent = lose;
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




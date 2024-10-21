

//make the computer choose its random number that would eqaul to a string




/*
const z = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(z){
    if (z == 1) {
        return "rock";
    }

    else if (z == 2){
        return "paper";
    }

    else if (z == 3){
        return "scissors";
    }
}
console.log(getComputerChoice(z))


//pseudo for humanchoice
//add function where itd take human choie
//this choice should return a number that would respond a valid score vs computer


//create a button that would enter the user choice
//make the user choice input recognised, use js

let human = prompt
function getHumanChoice(){
    return 
}

/*
document.getElementById("mySubmit").onclick = function(){

    username = document.getElementById("myText").value;
    
    document.getElementById("header").textContent = `Hello ${username}`
    
    }

*/

//global scope
let humanScore = 0;
let computerScore = 0;




function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        return "rock";
    }

    else if (computer == 2){
        return "paper";
    }

    else if (computer == 3){
        return "scissors";
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    let human = window.prompt("rock, paper, or scissors").toLowerCase();
    return human;
}
console.log(getHumanChoice())


//playround

function playRound(humanChoice, computerChoice){
    
}

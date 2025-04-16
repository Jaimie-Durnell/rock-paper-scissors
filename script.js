var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    const choices =  [ "rock", "paper", "scissors" ];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
    
};

function getHumanChoice() {
    const userInput = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    return userInput;  
};

function playGame () {

    function playRound(humanChoice, computerChoice) {


        
        if (humanChoice === computerChoice) {
            return "It's a draw!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return "You win!";          
        } else {
            computerScore++;
            return "You lose!";
        }         
    };

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

       console.log("Round " + (i + 1) + ":");
       console.log("You chose " + humanChoice + ", the computer chose " + computerChoice);
       console.log(result); 
    };

    console.log("The Final Scores:");
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

};

playGame();





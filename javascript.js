function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNum = Math.random();
        if (randomNum < 0.33) return "rock";
        if (randomNum < 0.66) return "paper";
        return "scissors";
    }

    function getHumanChoice() {
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
        }
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }
        
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}\n`);
    }

    // Declare winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();
console.log("Game Started");
console.log("Game Ended");
console.log("Hello World");
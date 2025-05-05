let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1: return "Stone";
      case 2: return "Paper";
      case 3: return "Scissor";
    }
  }

 /* console.log(getComputerChoice()); */

 function getHumanChoice() {
    let userChoice = prompt("Please select Stone, Paper, or Scissor");
    if (!userChoice) return null;
  
    userChoice = userChoice.toLowerCase();
  
    if (userChoice === "stone") return "Stone";
    if (userChoice === "paper") return "Paper";
    if (userChoice === "scissor") return "Scissor";
    
    alert("Invalid choice. Try again.");
    return getHumanChoice(); 
  }
  
  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    }
    else if (
        (humanChoice === "Stone" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Stone") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
      ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      }
      else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        console.log()
        computerScore++;
      }
  }

  function playGame() {
    humanScore = 0;
    computerScore = 0;
    let round = 1;
    while(humanScore < 5 && computerScore < 5) {
      console.log(`\n--- Round ${round} ---`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log("Human score : " + humanScore);
      console.log("Computer Score : " + computerScore);
      round ++ ;
    }
  
    console.log("\n--- Final Score ---");
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
  
    if (humanScore > computerScore) {
      console.log("You win the game! Congratulations!");
    } else if (humanScore < computerScore) {
      console.log("Oh no, You lose the game :( ");
    }
  }
  
  playGame();
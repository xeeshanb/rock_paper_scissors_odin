
function getComputerChoice() {
    let computerChance = Math.random();
   
    if (computerChance <= .33) {
        return "rock";
    }
        else if (computerChance <= .66) {
            return "paper";
        }
     else if( computerChance <= 1) {
        return "scissors";
     }
}


function getHumanChoice() {
 let humanChance = prompt("Enter your choice(Rock, Paper or Scissors)");

  if(humanChance === "rock"){
    return "rock";
  } else if (humanChance === "paper"){
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let roundsPlay = 0;
  let humanScore = 0;
  let computerScore = 0;
  let gameWinner = "";

  function playRound(humanChoice, computerChoice, roundNumber) {
    console.log(`\nRound ${roundNumber}:`)
    if(humanChoice === "rock" && computerChoice === "rock"){
      console.log("It's a Tie."); 
    } else if (humanChoice === "rock" && computerChoice === "paper"){
      computerScore ++;
      console.log("You Lose! Paper beats Rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
      humanScore ++;
      console.log("You Win. Rock beats Scissors.")
    } else if (humanChoice === "paper" && computerChoice === "rock"){
      humanScore ++;
      console.log("You Win!");
    } else if (humanChoice === "paper" && computerChoice === "paper"){
      console.log("It's a Tie.");
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
      computerScore ++;
      console.log("You Lose!");
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
      computerScore ++;
      console.log("You Lose!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
      humanScore ++;
      console.log("You Win!");
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
      console.log("It's a Tie.");
    }

    console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`)
  }

  playRound(getHumanChoice(), getComputerChoice(), 1);
  
  playRound(getHumanChoice(), getComputerChoice(), 2);

  playRound(getHumanChoice(), getComputerChoice(), 3);
  
  playRound(getHumanChoice(), getComputerChoice(), 4);
  
  playRound(getHumanChoice(), getComputerChoice(), 5);

  console.log("\nFinal Result:");
  if (humanScore > computerScore){
    console.log("You won the game!");
  } else if (computerScore > humanScore){
    console.log("Computer won the game!");
  } else {
    console.log("It's a draw!");
  }

}

playGame();

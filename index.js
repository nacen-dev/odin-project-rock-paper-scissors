const computerPlay = () => {
  let choices = {
    0: "Rock",
    1: "Paper",
    2: "Scissors",
  };
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  let playerChoice = playerSelection();
  let computerChoice = computerSelection();

  if (playerChoice.toLowerCase() === "rock") {
    if (computerChoice === "Rock") {
      console.log("Draw");
      return "draw";
    } else if (computerChoice === "Paper") {
      console.log("You Lose! Paper beats Rock");
      return "lose";
    } else if (computerChoice === "Scissors") {
      console.log("You Win! Rock beats Scissors");
      return "win";
    }
  } else if (playerChoice.toLowerCase() === "paper") {
    if (computerChoice === "Paper") {
      console.log("Draw");
      return "draw";
    } else if (computerChoice === "Scissors") {
      console.log("You Lose! Scissors beats Paper");
      return "lose";
    } else if (computerChoice === "Rock") {
      console.log("You Win! Paper beats Rock");
      return "win";
    }
  } else if (playerChoice.toLowerCase() === "scissors") {
    if (computerChoice === "Scissors") {
      console.log("Draw");
      return "draw";
    } else if (computerChoice === "Rock") {
      console.log("You Lose! Rock beats Scissors");
      return "lose";
    } else if (computerChoice === "Paper") {
      console.log("You Win! Scissors beats Paper");
      return "win";
    }
  }
};

const playerSelection = () => {
  let choice = "";
  choice = prompt("Enter your choice: Rock/Paper/Scissors").toLowerCase();

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Invalid Choice");
    choice = prompt("Enter your choice: Rock/Paper/Scissors").toLowerCase();
  }
  return choice;
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let currentRound = playRound(playerSelection, computerPlay);
    if (currentRound === "win") playerScore++;
    else if (currentRound === "lose") computerScore++;
    else i--;
    console.log(
      `Player's Score: ${playerScore}`,
      `Computer's Score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) return "You won the game";
  return "You lost the game";
};

console.log(game());

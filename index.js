let scores = {
  playerScore: 0,
  computerScore: 0,
};

let playerScoreElement = document.querySelector(".player-score");
let computerScoreElement = document.querySelector(".computer-score");
const choiceButtons = document.querySelectorAll(".choice-button");

choiceButtons.forEach((choiceButton) => {
  choiceButton.addEventListener("click", (event) => {
    console.log(event.currentTarget.id);
    playRound(event.currentTarget.id, computerPlay);
    console.log(scores);
    playerScoreElement.textContent = scores.playerScore;
    computerScoreElement.textContent = scores.computerScore;
  });
});

const computerPlay = () => {
  let choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = (playerChoice, computerSelection) => {
  let computerChoice = computerSelection();
  console.log("computer choice: ", computerChoice);
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      scores.computerScore = scores.computerScore + 1;
    } else if (computerChoice === "scissors") {
      scores.playerScore = scores.playerScore + 1;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      scores.computerScore = scores.computerScore + 1;
    } else if (computerChoice === "rock") {
      scores.playerScore = scores.playerScore + 1;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      scores.computerScore = scores.computerScore + 1;
    } else if (computerChoice === "paper") {
      scores.playerScore = scores.playerScore + 1;
    }
  }
};

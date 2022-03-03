let scores = {
  playerScore: 0,
  computerScore: 0,
};

const scoresElement = document.querySelectorAll(".score");
const choiceButtons = document.querySelectorAll(".choice-button");
const winnerText = document.querySelector(".winner-text");
const playAgain = document.querySelector(".play-again");

playAgain.addEventListener("click", () => {
  playAgain.hidden = true;
  playAgain.disabled = true;
  winnerText.textContent = "";
  scores.playerScore = 0;
  scores.computerScore = 0;
  addScoreToDisplay(scores);
  choiceButtons.forEach((button) => {
    button.disabled = false;
  });
});

const checkScore = ({ playerScore, computerScore }) => {
  if (playerScore === 5 || computerScore === 5) {
    choiceButtons.forEach((button) => {
      button.disabled = true;
    });
    playAgain.hidden = false;
    playAgain.disabled = false;
  }
  if (playerScore === 5) {
    winnerText.textContent = "You won the game";
  } else if (computerScore === 5) {
    winnerText.textContent = "You lost the game";
  }
};

const addScoreToDisplay = ({ playerScore, computerScore }) => {
  scoresElement[0].textContent = playerScore;
  scoresElement[1].textContent = computerScore;
};

choiceButtons.forEach((choiceButton) => {
  choiceButton.addEventListener("click", (event) => {
    playRound(event.currentTarget.id, computerPlay, scores);
    addScoreToDisplay(scores);
    checkScore(scores);
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

const playRound = (playerChoice, computerSelection, scores) => {
  let computerChoice = computerSelection();
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

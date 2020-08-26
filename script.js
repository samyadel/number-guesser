let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a random target number
const generateTarget = () => Math.floor(Math.random() * 10);

// Get the difference between a number and a target
const getAbsoluteDistance = (num, target) => Math.abs(target - num);

// Compare the user guess offset to the computer guess offset
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  let userGuessDiff = getAbsoluteDistance(userGuess, targetNumber);
  let computerGuessDiff = getAbsoluteDistance(computerGuess, targetNumber);

  if (userGuess < 0 || userGuess > 9) {
    alert("Your number is out of range");
    return;
  }

  return userGuessDiff <= computerGuessDiff;
};

// Update the winner's score
const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;
};

// Update the round number
const advanceRound = () => {
  currentRoundNumber++;
};

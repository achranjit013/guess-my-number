"use strict";

let score = 20;
let highscore = 0;

// function to calculate secret number  between 1 - 20
const calcSecretNumber = () => Math.floor(Math.random() * 20 + 1);

// calling the function
let secretNumber = calcSecretNumber();

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

const displayHighscore = (highscore) => {
  document.querySelector(".highscore").textContent = highscore;
};

const displaySecretNumber = (sNum) => {
  document.querySelector(".number").textContent = sNum;
};

const setBgColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

const setWidth = (width) => {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  // not valid input
  if (!guess || guess > 20) {
    displayMessage("🚫 Please insert a valid number between 1 and 20!");

    // when player guess is correct & wins
  } else if (guess === secretNumber && score !== 0) {
    displaySecretNumber(secretNumber);
    displayMessage("✅ Hurray!!! Correct guess. You won the game 🏆");
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    } else {
      displayHighscore(highscore);
    }
    setBgColor("green");
    setWidth("25rem");

    // when the player guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 Oops!!! Your guess is too high."
          : "📉 Oops!!! Your guess is too low."
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("⭕️ Oops!!! You lost the game.");
      score = 0;
      displayScore(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // setting up new secret number
  secretNumber = calcSecretNumber();
  score = 20;

  document.querySelector(".guess").value = "";

  displaySecretNumber("?");
  displayMessage("Start guessing...");
  displayScore(score);
  displayHighscore(highscore);
  setBgColor("#222");
  setWidth("15rem");
});

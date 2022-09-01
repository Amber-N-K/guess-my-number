'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let secretNum;
let guessInput;
let scoreValue = 20;

// Generates secretNum number after DOM loads
addEventListener('DOMContentLoaded', (event) => {
    secretNumber();
});

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

// Resets the board to the original settings
againBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = 'hsl(211, 39%, 23%)';
  number.style.width = '15rem';
  number.textContent = '?';
  displayMessage('Start guessing...');
  scoreValue = 20;
  score.textContent = scoreValue;
  guess.value= '';
  secretNumber();
});

// Generates secretNum number 1-20
const secretNumber = () => {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  //console.log('secretNum: ', secretNum);
  return secretNum;
};

// Check button click event
checkBtn.addEventListener('click', inputNumber);

// User enters a number between 1-20 and decreases score
function inputNumber() {
 guessInput = Number(guess.value);
 console.log('guessInput: ', guessInput);
  
  // when player wins
  if (guessInput == secretNum) {
    document.body.style.backgroundColor = '#65a24c';
    number.style.width = '30rem';
    number.textContent = secretNum;
    displayMessage('🎉 Correct number!');
    if (scoreValue > highScore.textContent) {
      highScore.textContent = scoreValue;
    }
  } // when input is not a number
  else if (isNaN(guessInput)) {
    displayMessage('⛔ No number!');
  
  } // when guess is different from secret number
  else if (guessInput != secretNum) {
    if (scoreValue > 1) {
      displayMessage(guessInput > secretNum ? '📈 Too high!' : '📉 Too low!');
      scoreValue--;
      score.textContent = scoreValue;
    } 
    else {
      displayMessage('💥 You lost the game!');
      score.textContent = 0; 
    }
  }
};


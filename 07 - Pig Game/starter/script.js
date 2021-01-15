'use strict';

// DOM Elements
const scoresDOM = document.querySelectorAll('.score');
const currentDOM = document.querySelectorAll('.current-score');
const sectionsDOM = document.querySelectorAll('.player');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

const winCondition = 20;
let activePlayer;
let currentScore;
let scoresArray;
let diceRoll;
let playing;

// Start Conditions:

// Functionality for the Buttons
const rollDice = function () {
  if (playing) {
    diceRoll = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${diceRoll}.png`;
    dice.classList.remove('hidden');

    if (diceRoll === 1) {
      switchPlayer();
    } else {
      currentScore += diceRoll;
      currentDOM[activePlayer].textContent = currentScore;
    }
  }
};

const switchPlayer = function () {
  if (playing) {
    currentScore = 0;
    currentDOM[activePlayer].textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    for (let i = 0; i < scoresDOM.length; i++) {
      sectionsDOM[i].classList.toggle('player--active');
    }
  }
};

const holdEvent = function () {
  if (playing) {
    scoresArray[activePlayer] += currentScore;
    scoresDOM[activePlayer].textContent = scoresArray[activePlayer];
    if (scoresArray[activePlayer] >= winCondition) {
      playing = false;
      sectionsDOM[activePlayer].classList.remove('player--active');
      sectionsDOM[activePlayer].classList.add('player--winner');
      dice.classList.toggle('hidden');
    } else {
      switchPlayer();
    }
  }
};

const init = function () {
  activePlayer = 0;
  currentScore = 0;
  scoresArray = [0, 0];
  diceRoll = 0;
  playing = true;

  for (let i = 0; i < scoresDOM.length; i++) {
    scoresArray[i] = 0;
    scoresDOM[i].textContent = 0;
    currentDOM[i].textContent = 0;
  }
  dice.classList.add('hidden');
  sectionsDOM[activePlayer].classList.remove('player--winner');
  sectionsDOM[0].classList.add('player--active');
  sectionsDOM[1].classList.remove('player--active');
};

init();

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdEvent);
btnNewGame.addEventListener('click', init);

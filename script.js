'use strict';
// document.querySelector(".number").textContent = 45;
// document.querySelector(".guess").value = 23;

// document.querySelector(".guess").value = 55;
let number = Math.trunc(Math.random() * 100) + 1;
console.log(number);

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let randomNumber = Number(document.querySelector('.guess').value);
  if (randomNumber === number) {
    document.querySelector('.message').textContent = 'right guess';
    document.querySelector('body').style.backgroundColor = '#03C988';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (randomNumber > 100) {
    document.querySelector('.message').textContent =
      'your guess must be between 1 and 100';
  } else if (randomNumber === 0) {
    document.querySelector('.message').textContent = 'no number';
  } else if (randomNumber < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  } else if (randomNumber > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#532cd2';
});

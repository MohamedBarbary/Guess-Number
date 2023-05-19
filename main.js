'use strict';

// DRY is applied in some code
const setMessage = (ourMessage) => {
  document.querySelector('.message').textContent = ourMessage;
};
let guessedNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = guessedNumber;
let highScore = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    setMessage('No number! 🤷‍♂️');
    // there is no input
  } else {
    if (guess === guessedNumber) {
      // correct
      setMessage(' oh!,correct 😎');
      document.querySelector('.number').textContent = guessedNumber;

      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').style.width = '30rem';

      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = hi;
    } else {
      if (score > 1) {
        const resualtScore =
          guess > guessedNumber ? 'Too High 📈' : 'Too Low 📈';
        setMessage(resualtScore);
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'you lost the game 😑';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '0';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  guessedNumber = Math.trunc(Math.random() * 20) + 1;
});

'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').Value = 23;
console.log(document.querySelector('.guess').Value);
*/

const secret_number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = '';
const displayMessages = function (message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
  if (!guess) {
    console.log(
      //(document.querySelector('.message').textContent = '🚫 No number.')
      displayMessages('🚫 No number.')
    );
  } else if (guess === secret_number) {
    console.log(
      //(document.querySelector('.message').textContent = '🎉 Correct Number!')
      displayMessages('🎉 Correct Number!')
    );
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
      if (score > highScore ) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    } 
    
  } else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secret_number ? '↗️ Higher than the number.' : '↘️ Lower than the number.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You lost the game';
      displayMessages('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
})
  /*
  else if (guess > secret_number) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent =
          '↗️ Higher than the number.')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        (document.querySelector('.message').textContent = '💥You lost the game')
      );
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret_number) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent =
          ' ↘️ Lower than the number.')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        (document.querySelector('.message').textContent = '💥You lost the game')
      );
      document.querySelector('.score').textContent = 0;
    }
  }
}); */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secret_number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...'
  
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
}); 


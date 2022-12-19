'use strict';

/* console.log(document.querySelector('.message').textContent); // selecting a class using document.querySelecter
 */
/* DOM stands for Document Object Model: Structured representation os Html Documents. Allows Javascript to access Html elements and Styles to Manipulate them. */

/* Document is a special object that is the entry point to the DOM. Example document.querySelector() */

/* Dom is not a part of javascript, Dom is actually part of something called Web Api's. 
   Web APIs are like libraries that browsers implement and that we can access from javascript code.*/

/* API stands for application prgramming Interface */

/* document.querySelector('.message').textContent = 'Correct Number ';

document.querySelector('.number').textContent = '2';
document.querySelector('.score').textContent = '2';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

/* An event is something that on the page for example a mouse click or a mouse movement etc.
   then with an event listener we can wait for certain event to happen and then react to it.*/

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When guess is Empty
  if (!guess) {
    displaymessage('⛔ No Number !');
  }
  // When guess is correct
  else if (guess === secret) {
    displaymessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secret;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is Different
  else if (guess !== secret) {
    if (score > 1) {
      displaymessage(guess > secret ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* Coding Challenge #1

Implement a game rest functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input
fields

4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK  */

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

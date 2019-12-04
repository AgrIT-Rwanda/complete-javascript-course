/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*

1. How to create our fundamental game variables;
2. How to generate a random number.
3. How to manipulate the DOM.
4. How to read from the DOM.
5. How to change CSS styles.

*/

var scores, roundScore, activePlayer, gamePlaying

init();
//document.querySelector('#current-'+activePlayer).textContent = dice
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>'

var x = document.querySelector('#score-0').textContent;
console.log(x);



/**********************************
 
1. How to set up an event handler;
2. What a callbak function is;
3. What an anonymous function is;
4. Another way to select elements by ID;
5. How to change the image in an <img> element.
 */

document.querySelector('.btn-roll').addEventListener('click', function () {

   if (gamePlaying) {
      // 1. Random number
      dice = Math.floor(Math.random() * 6) + 1;

      //2. Display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      //3. Update the round score If the rolled number was
      /****************************************************
   1.  what the ternary operator is :
   2.  How to add, remove and toggle HTML classes.
   */

      if (dice !== 1) {

         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {

         nextPlayer();

      }
   }


});

function nextPlayer() {

   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   //document.querySelector('.player-0-panel').classList.remove('active');
   //document.querySelector('.player-1-panel').classList.add('active');

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display = 'none';
   /*************************************
     1. How to  use function  to correctly apply the DRY Principel;    
     2. How to think about the game logic like a programmer.           
    */

}
document.querySelector('.btn-hold').addEventListener('click', function () {

   if (gamePlaying) {
      // add current score to global score;
      scores[activePlayer] += roundScore;

      // Update UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      // Check the current player win a game.

      if (scores[activePlayer] >= 20) {

         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
      }

      // next player
      nextPlayer();
   }


});

/*document.querySelector('.btn-new').addEventListener('click', function(){

   init();// 
});

OR 
*/

document.querySelector('.btn-new').addEventListener('click', init);


function init() {

   scores = [0, 0];
   roundScore = 0;
   activePlayer = 0;
   gamePlaying = true;
   document.querySelector('.dice').style.display = 'none';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   document.getElementById('name-0').textContent = 'Player 1';
   document.getElementById('name-1').textContent = 'Player 2';
   //remove active player class and winner
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');

}

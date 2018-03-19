/* Active cards */
let activeCards = [];
let parentIDs = [];
let numberActiveCards = 0;

/* Counter to win the game */
let matchedCards = 0;

/* Function which randomly define the cards
 * get randomly the values of the gridIDs array
 * use those values as IDs for the cards elements
*/
window.onload = function() {
  let gridIDs = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2', 'd1', 'd2', 'e1', 'e2', 'f1', 'f2', 'g1', 'g2', 'h1', 'h2'];
  let min = 0, max = 15;
  for (i = 0; i < 16; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementsByTagName('article')[i].id = gridIDs[randomNumber];
    gridIDs.splice(randomNumber, 1);
    max--;
  }
};

/* Click on a card
 * flip the card if face down
 */
const GRID = document.getElementById('grid');

GRID.addEventListener('click', function(event) {
  /* Check if user has clicked on a back card */
  if (event.target.className === 'card-back') {
    let parentCard = event.target.parentNode;

    /* Active flip animation back to front */
    event.target.className = 'card-back card-back-flip';
    event.target.nextSibling.nextSibling.className = 'card-front card-front-flip';

    /* Count current active cards */
    numberActiveCards++;
    /* Keep the IDs of active cards to compare */
    activeCards.push(parentCard.id[0]);
    parentIDs.push(parentCard.id);

    /* When reach 2 active cards */
    if (numberActiveCards === 2) {
      /* Set variables to style (animation) the correct cards */
      let frontCardPath1 = '#' + parentIDs[0] + ' > .card-front';
      let backCardPath1 = '#' + parentIDs[0] + ' > .card-back';
      let frontCardPath2 = '#' + parentIDs[1] + ' > .card-front';
      let backCardPath2 = '#' + parentIDs[1] + ' > .card-back';

      /* Disable click events */
      document.body.style.pointerEvents = 'none';

      /* Check if the cards matched when 2 are flipped */
      if(activeCards[0] === activeCards[1]) {
        /* Start winning animation after a while */
        let parentID1 = parentIDs[0];
        let parentID2 = parentIDs[1];
        setTimeout(function() {
          document.getElementById(parentID1).className = 'cards card-win';
          document.getElementById(parentID2).className = 'cards card-win';
        }, 700);

        /* Count matched cards */
        matchedCards++;
      } else {
        /* Return card (face down) after a while */
        setTimeout(function() {
          document.querySelector(frontCardPath1).className = 'card-front card-front-reverse';
          document.querySelector(backCardPath1).className = 'card-back card-back-reverse';
          document.querySelector(frontCardPath2).className = 'card-front card-front-reverse';
          document.querySelector(backCardPath2).className = 'card-back card-back-reverse';
        }, 700);
        /* Remove the additional class for animation */
        setTimeout(function() {
          document.querySelector(frontCardPath1).className = 'card-front';
          document.querySelector(backCardPath1).className = 'card-back';
          document.querySelector(frontCardPath2).className = 'card-front';
          document.querySelector(backCardPath2).className = 'card-back';
        }, 750);
      }

      numberActiveCards = 0;
      activeCards = [];
      parentIDs = [];

      /* Enable click events */
      setTimeout(function() {
        document.body.style.pointerEvents = 'auto';
      }, 775);

      if (matchedCards === 8) {
        console.log('You have won the game!');
      }
    }
  }
});
